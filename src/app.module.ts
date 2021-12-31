import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicApiModule } from './api/dynamic-api/dynamic-api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmModule } from './core/orm/orm.module';

@Module({
  imports: [OrmModule, DynamicApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
