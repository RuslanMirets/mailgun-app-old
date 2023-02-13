import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import {
	Body,
	Controller,
	Get,
	Post,
	Request,
	UseGuards,
} from "@nestjs/common";
import { CreateUserDto } from "src/user/dto/create-user.dto";

@Controller("auth")
export class AuthController {
	constructor(private authService: AuthService) {}

	@UseGuards(LocalAuthGuard)
	@Post("login")
	async login(@Request() req) {
		return this.authService.login(req.user);
	}

	@Post("register")
	register(@Body() dto: CreateUserDto) {
		return this.authService.register(dto);
	}

	@UseGuards(JwtAuthGuard)
	@Get("profile")
	getProfile(@Request() req) {
		return req.user;
	}
}
