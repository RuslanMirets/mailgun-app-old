import { UserService } from "./../../user/user.service";
import { ConfigService } from "@nestjs/config";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private configService: ConfigService,
		private userService: UserService,
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: configService.get("JWT_SECRET_KEY"),
		});
	}

	async validate(payload: any) {
		const user = await this.userService.findOneById(payload.id);
		if (!user) {
			throw new UnauthorizedException(
				"You are not authorized to perform the operation",
			);
		}
		return payload;
	}
}
