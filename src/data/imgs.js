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
import aboutUs11x from './imgs/about-us-1@1x.jpg';
import aboutUs12x from './imgs/about-us-1@2x.jpg';
import aboutUs21x from './imgs/about-us-2@1x.jpg';
import aboutUs22x from './imgs/about-us-2@2x.jpg';
import aboutUs31x from './imgs/about-us-3@1x.jpg';
import aboutUs32x from './imgs/about-us-3@2x.jpg';
import news11x from './imgs/news-1@1x.jpg';
import news12x from './imgs/news-1@2x.jpg';
import news21x from './imgs/news-2@1x.jpg';
import news22x from './imgs/news-2@2x.jpg';
import news31x from './imgs/news-3@1x.jpg';
import news32x from './imgs/news-3@2x.jpg';

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

const aboutUsImgs = [
  {
    id: 1,
    alt: 'Мужчина работает со станоком',
    src: aboutUs11x,
    srcSet: aboutUs12x,
  },
  {
    id: 2,
    alt: 'Крупное изображение станка',
    src: aboutUs21x,
    srcSet: aboutUs22x,
  },
  {
    id: 3,
    alt: 'Сварка крупным планом',
    src: aboutUs31x,
    srcSet: aboutUs32x,
  },
];

const newsImgs = [
  {
    src: news11x,
    srcSet: news12x,
    alt: 'Сотрудники завода стоят у коробки с масками',
  },
  {
    src: news21x,
    srcSet: news22x,
    alt: 'Лестницы производственного цеха',
  },
  {
    src: news31x,
    srcSet: news32x,
    alt: 'Коридор вдоль которого стоят большие машины',
  },
];

export {
  heroImgMain, newProductsImgs, productsImgs, aboutUsImgs, newsImgs,
};
