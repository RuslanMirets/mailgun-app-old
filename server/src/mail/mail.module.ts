import { getMailgunConfig } from "./../config/mailgun.config";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MailgunModule } from "nestjs-mailgun";
import { Module } from "@nestjs/common";
import { MailService } from "./mail.service";
import { MailController } from "./mail.controller";

@Module({
	imports: [
		ConfigModule.forRoot(),
		MailgunModule.forAsyncRoot({
			// useFactory: async () => {
			// 	return {
			// 		username: "api",
			// 		key: "b011aba31eee0e3a5b10b6f4867912cf-d1a07e51-76d5f60c",
			// 	};
			// },
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMailgunConfig,
		}),
	],
	providers: [MailService],
	controllers: [MailController],
	exports: [MailService],
})
export class MailModule {}
