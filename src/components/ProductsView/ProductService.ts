import productsData from './productsData';

export type Product = {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
};

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
