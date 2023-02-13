import { CreateUserDto } from "./../user/dto/create-user.dto";
import { UserEntity } from "./../user/entities/user.entity";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "./../user/user.service";
import { BadRequestException, Injectable } from "@nestjs/common";
import { compare, hash } from "bcrypt";

@Injectable()
export class AuthService {
	constructor(
		private userService: UserService,
		private jwtService: JwtService,
	) {}

	async login(user: UserEntity) {
		return {
			user: this.returnUserFields(user),
			accessToken: this.generateJwtToken(user),
		};
	}

	async register(dto: CreateUserDto) {
		const oldUser = await this.userService.findOneByEmail(dto.email);
		if (oldUser)
			throw new BadRequestException("This email address already exists");

		const user = await this.userService.create({
			firstName: dto.firstName,
			lastName: dto.lastName,
			username: dto.username,
			email: dto.email,
			password: await hash(dto.password, 10),
		});
		return {
			user: this.returnUserFields(user),
			accessToken: this.generateJwtToken(user),
		};
	}

	async validateUser(email: string, pass: string): Promise<any> {
		const user = await this.userService.findOneByEmail(email);

		if (user) {
			const isMatch = await compare(pass, user.password);
			if (!isMatch) {
				return null;
			}
			return this.returnUserFields(user);
		}
		return null;
	}

	generateJwtToken(data: { id: number; email: string }) {
		const payload = { email: data.email, sub: data.id };
		return this.jwtService.sign(payload);
	}

	returnUserFields(user: UserEntity) {
		return {
			id: user.id,
			firstName: user.firstName,
			lastName: user.lastName,
			username: user.username,
			email: user.email,
		};
	}
}
