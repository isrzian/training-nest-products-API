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
import { ProductsService } from "./products.service";
import { Product } from "./schemas/product.schema";

@Controller("products")
export class ProductsController {

  constructor(private readonly productService: ProductsService) {
  }

  // @Get()
  // //@Redirect('https://google.com', 301)
  // getAll(@Req() req: Request, @Res() res: Response) {
  //   res.status(201).end('Good bye')
  //   return "getAll";
  // }

  @Get()
  getAll(): Promise<Product[]> {
    return this.productService.getAll();
  }

  @Get(":id")
  getOne(@Param("id") id: string): Promise<Product> {
    return this.productService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header("Cache-Control", "none")
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Put(":id")
  update(@Body() updateProductDto: UpdateProductDto, @Param("id") id: string): Promise<Product> {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<Product> {
    return this.productService.remove(id);
  }

}
