import { IsNotEmpty, IsString } from "class-validator";

export class CreateDynamicDto {
  @IsString()
  @IsNotEmpty()
  path: string;

  @IsNotEmpty()
  data: any;
}
