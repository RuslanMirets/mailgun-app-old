import { CreateMailDto } from "./dto/create-mail.dto";
import { MailService } from "./mail.service";
import { Body, Controller, Post } from "@nestjs/common";

@Controller("mail")
export class MailController {
	constructor(private mailService: MailService) {}

	@Post("send")
	async create(@Body() dto: CreateMailDto) {
		return this.mailService.create(dto);
	}
}
