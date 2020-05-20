import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from "./product.entity";

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
    ) {}

    async insertProduct(product: Product): Promise<void> {
        this.productsRepository.save(product);
    }

    getProducts(): Promise<Product[]> {
        return this.productsRepository.find();
    }

    getSingleProduct(id: string): Promise<Product> {
        return this.productsRepository.findOne(id);
    }

    async updateProduct(id: string, product: Product) {
        await this.productsRepository.update(id, product);
        return null;
    }

    async deleteProduct(id: string): Promise<void> {
        await this.productsRepository.delete(id);
    }
}