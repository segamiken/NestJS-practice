import { Controller, Post, Body, Get, Param, Patch, Delete} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./product.entity";

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}
    
    @Post()
    addProduct(@Body() product: Product) {
        this.productService.insertProduct(product);
    }

    @Get()
    getAllProducts() {
        return this.productService.getProducts();
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string, ) {
        return this.productService.getSingleProduct(prodId);
    }

    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string,
        @Body() product: Product
    ) {
        this.productService.updateProduct(prodId, product);
    }

    @Delete(':id')
    removeProduct(@Param('id') prodId: string,) {
        this.productService.deleteProduct(prodId);
        return null;
    }
}