import { Body, Controller, Get, Post } from "@nestjs/common";
import { GetWildCardPath } from "src/common/decorators/getWildCardPath";
import { DynamicAPIEntity } from "src/core/orm/entities/dynamic-api.entity";
import { CreateDynamicDto } from "./dto/create-dynamic-api.dto";
import { DynamicAPIService } from "./dynamic-api.service";

@Controller("api")
export class DynamicAPIController {
  constructor(private dynamicAPIService: DynamicAPIService) {}

  @Get("*")
  getDynamicAPI(@GetWildCardPath() path: string) {
    return this.dynamicAPIService.getDynamicAPI(path);
  }

  @Post("dynamicapi")
  createDynamicAPI(@Body() body: CreateDynamicDto): Promise<DynamicAPIEntity> {
    return this.dynamicAPIService.createDynamicAPI(body);
  }
}
