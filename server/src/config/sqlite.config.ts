import { UserEntity } from "./../user/entities/user.entity";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const getSqliteConfig = async (
	configService: ConfigService,
): Promise<TypeOrmModuleOptions> => ({
	type: "sqlite",
	database: configService.get("DATABASE_NAME"),
	entities: [UserEntity],
	synchronize: true,
});
