import heroImgMain1x from './imgs/hero-main@1x.jpg';
import heroImgMain2x from './imgs/hero-main@2x.jpg';
import newProduct11x from './imgs/new-product-1@1x.png';
import newProduct12x from './imgs/new-product-1@2x.png';
import newProduct21x from './imgs/new-product-2@1x.png';
import newProduct22x from './imgs/new-product-2@2x.png';
import newProduct31x from './imgs/new-product-3@1x.png';
import newProduct32x from './imgs/new-product-3@2x.png';
import product11x from './imgs/product-1@1x.png';
import product12x from './imgs/product-1@2x.png';
import product21x from './imgs/product-2@1x.png';
import product22x from './imgs/product-2@2x.png';
import product31x from './imgs/product-3@1x.png';
import product32x from './imgs/product-3@2x.png';

const heroImgMain = {
  src: heroImgMain1x,
  srcSet: heroImgMain2x,
  alt: 'Фабричный цех, заполненный станками',
};

const newProductsImgs = [
  {
    src: newProduct11x,
    srcSet: newProduct12x,
    alt: '',
  },
  {
    src: newProduct21x,
    srcSet: newProduct22x,
    alt: '',
  },
  {
    src: newProduct31x,
    srcSet: newProduct32x,
    alt: '',
  },
];

const productsImgs = [
  {
    src: product11x,
    srcSet: product12x,
    alt: '',
  },
  {
    src: product21x,
    srcSet: product22x,
    alt: '',
  },
  {
    src: product31x,
    srcSet: product32x,
    alt: '',
  },
];

export { heroImgMain, newProductsImgs, productsImgs };
