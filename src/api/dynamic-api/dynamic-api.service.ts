import {
  BadRequestException,
  Injectable,
  NotFoundException
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DynamicAPIEntity } from "src/core/orm/entities/dynamic-api.entity";
import { FindOneOptions, Repository } from "typeorm";
import { ICreateDynamicAPI } from "./interfaces/create-dynamic-api.interface";

@Injectable()
export class DynamicAPIService {
  constructor(
    @InjectRepository(DynamicAPIEntity)
    private readonly dynamicAPIRepo: Repository<DynamicAPIEntity>
  ) {}

  async getDynamicAPI(path: string) {
    const data = await this.findOne({ where: { path: path } });
    if (!data) {
      throw new NotFoundException("no API found");
    }
    return data.data;
  }

  async createDynamicAPI(
    payload: ICreateDynamicAPI
  ): Promise<DynamicAPIEntity> {
    const data = await this.findOne({ where: { path: payload.path } });
    const create = await this.dynamicAPIRepo.save(payload);
    if (data) {
      throw new BadRequestException("already exist API");
    }
    return create;
  }

  async findOne(
    options: FindOneOptions<DynamicAPIEntity>
  ): Promise<DynamicAPIEntity> {
    return this.dynamicAPIRepo.findOne(options);
  }
}
