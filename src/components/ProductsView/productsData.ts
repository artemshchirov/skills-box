export type Product = {
  id: number;
  code: string;
  name: string;
  description: string;
  image: string;
  oldPrice: number;
  discount: number;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
};

const calculatePriceWithDiscount = (price: number, percent: number): number => {
  const priceWithDiscount = price - price * (percent / 100);
  return Math.round(priceWithDiscount);
};

const productsData: Product[] = [
  {
    id: 0,
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image:
      'https://blocks.primereact.org/demo/images/blocks/ecommerce/productlist/product-list-5-1.png',
    oldPrice: 175,
    discount: 15,
    get price() {
      return calculatePriceWithDiscount(this.oldPrice, this.discount);
    },
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5,
  },
  {
    id: 1,
    code: 'nvklal433',
    name: 'Black Watch',
    description: 'Product Description',
    image:
      'https://blocks.primereact.org/demo/images/blocks/ecommerce/productlist/product-list-5-2.png',
    oldPrice: 49,
    discount: 25,
    get price() {
      return calculatePriceWithDiscount(this.oldPrice, this.discount);
    },
    category: 'Accessories',
    quantity: 61,
    inventoryStatus: 'INSTOCK',
    rating: 4,
  },
  {
    id: 2,
    code: 'zz21cz3c1',
    name: 'Blue Band',
    description: 'Product Description',
    image:
      'https://blocks.primereact.org/demo/images/blocks/ecommerce/productlist/product-list-5-3.png',
    oldPrice: 82,
    discount: 10,
    get price() {
      return calculatePriceWithDiscount(this.oldPrice, this.discount);
    },
    category: 'Fitness',
    quantity: 2,
    inventoryStatus: 'LOWSTOCK',
    rating: 3,
  },
  {
    id: 3,
    code: 'zz21dasv2f',
    name: 'Blue Band',
    description: 'Product Description',
    image:
      'https://blocks.primereact.org/demo/images/blocks/ecommerce/productlist/product-list-5-4.png',
    oldPrice: 120,
    discount: 5,
    get price() {
      return calculatePriceWithDiscount(this.oldPrice, this.discount);
    },
    category: 'Fitness',
    quantity: 2,
    inventoryStatus: 'LOWSTOCK',
    rating: 3,
  },
];

export default productsData;
