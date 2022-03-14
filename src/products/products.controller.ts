import {
  Controller,
  Param,
  Body,
  HttpCode,
  Header,
  HttpStatus,
  Req,
  Res,
  Get,
  Post,
  Put,
  Delete
} from "@nestjs/common";

import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Controller("products")
export class ProductsController {

  // @Get()
  // //@Redirect('https://google.com', 301)
  // getAll(@Req() req: Request, @Res() res: Response) {
  //   res.status(201).end('Good bye')
  //   return "getAll";
  // }

  @Get()
  getAll(): string {
    return 'getAll'
  }

  @Get(":id")
  getOne(@Param("id") id: string): string {
    return "getOne " + id;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header("Cache-Control", "none")
  create(@Body() createProductDto: CreateProductDto): string {
    return `Title: ${createProductDto.title}; Price: ${createProductDto.price}`;
  }

  @Put(":id")
  update(@Body() updateProductDto: UpdateProductDto, @Param("id") id: string) {
    return "Update " + id;
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return "Remove " + id;
  }

}
