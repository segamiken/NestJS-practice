import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsSercice } from "./products.service";

@Module({
    controllers: [ProductsController],
    providers: [ProductsSercice],
})
export class ProductsModule {}