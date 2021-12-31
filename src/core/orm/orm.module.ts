import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConnectionOptions } from 'typeorm';
import 'reflect-metadata';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService): ConnectionOptions => ({
        type: 'postgres',
        host: configService.get('PG_HOST'),
        port: configService.get<number>('PG_PORT'),
        username: configService.get('PG_USER'),
        password: configService.get('PG_PASSWORD'),
        database: configService.get('PG_DATABASE'),
        synchronize: true,
        logging: configService.get('NODE_ENV') !== 'prod',
        // migrationsRun: true,
        // migrationsTableName: 'migrations',
        // migrations: [__dirname + '/migrations/*{.ts,.js}'],
        entities: [__dirname + '/entities/*.entity{.ts,.js}'],
        // subscribers: [__dirname + '/subscribers/*.subscriber{.ts,.js}'],
      }),
      inject: [ConfigService],
    }),
  ],
})
export class OrmModule {}
