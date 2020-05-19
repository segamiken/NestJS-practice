import { Controller, Post, Body } from "@nestjs/common";
import { ProductsSercice } from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsSercice) {}
    
    @Post()
    addProduct(
        @Body('tile') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
    ): any {
        const generatedId = this.productService.insertProduct(
            prodTitle, 
            prodDesc, 
            prodPrice
        );
        return {id: generatedId};
    }
}