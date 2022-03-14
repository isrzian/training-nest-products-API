import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductsModule } from "./products/products.module";

const uri = `mongodb+srv://ilya:qwertyuiop@cluster0.jjpwt.mongodb.net/products?retryWrites=true&w=majority`;

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(uri)
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
