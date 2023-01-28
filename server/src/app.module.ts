import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { getSqliteConfig } from "./config/sqlite.config";
import { UserModule } from "./user/user.module";

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getSqliteConfig,
		}),
		UserModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
