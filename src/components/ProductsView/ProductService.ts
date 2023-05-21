import type { Product } from './productsData';
import productsData from './productsData';

class ProductService {
  private products: Product[] = [];

  constructor() {
    this.products = ProductService.getProductsData();
  }

  static getProductsData(): Product[] {
    return productsData;
  }

  getProductsMini(): Promise<Product[]> {
    return Promise.resolve(this.products.slice(0, 5));
  }

  getProductsSmall(): Promise<Product[]> {
    return Promise.resolve(this.products.slice(0, 10));
  }

  getProducts(): Promise<Product[]> {
    return Promise.resolve(this.products);
  }
}

const productService = new ProductService();
export default productService;
