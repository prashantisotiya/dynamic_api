import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicAPIEntity } from 'src/core/orm/entities/dynamic-api.entity';
import { DynamicAPIController } from './dynamic-api.controller';
import { DynamicAPIService } from './dynamic-api.service';

@Module({
  imports: [TypeOrmModule.forFeature([DynamicAPIEntity])],
  controllers: [DynamicAPIController],
  providers: [DynamicAPIService],
})
export class DynamicApiModule {}
