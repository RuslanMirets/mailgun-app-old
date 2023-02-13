import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserEntity } from "./entities/user.entity";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntity)
		private userRepository: Repository<UserEntity>,
	) {}

	async create(dto: CreateUserDto) {
		return this.userRepository.save(dto);
	}

	async findAll() {
		return this.userRepository.find();
	}

	async findOneByEmail(email: string) {
		return this.userRepository.findOneBy({ email });
	}

	async findOneById(id: number) {
		return this.userRepository.findOneBy({ id });
	}
}
