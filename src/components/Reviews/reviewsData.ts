type Review = {
  id: number;
  author: string;
  description: string;
  rating: number;
  image: string;
  product: string;
  type: string;
};

const reviews: Review[] = [
  {
    id: 0,
    author: 'Jenny Wilson',
    description:
      'Maecenas sed enim ut sem viverra aliquet eget sit amet. Faucibus nisl tincidunt eget nullam non nisi est.',
    rating: 4,
    image: 'https://blocks.primereact.org/demo/images/blocks/ecommerce/review/review-1-1.png',
    product: 'Bamboo Watch',
    type: 'Accessories',
  },
  {
    id: 1,
    author: 'Wade Warren',
    description:
      'Pellentesque eu tincidunt tortor aliquam nulla facilisi. Nunc consequat interdum varius sit mattis. 🔥',
    rating: 5,
    image: 'https://blocks.primereact.org/demo/images/blocks/ecommerce/review/review-1-3.png',
    product: 'Black Watch',
    type: 'Accessories',
  },
  {
    id: 2,
    author: 'Anna Feldman',
    description:
      'Cursus sit amet dictum sit amet justo donec enim diam. Eget gravida cum sociis natoque et magnis. 👏',
    rating: 3,
    image: 'https://blocks.primereact.org/demo/images/blocks/ecommerce/review/review-1-5.png',
    product: 'Blue Band',
    type: 'Fitness',
  },
];

export default reviews;
