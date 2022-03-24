import heroMain1x from './files/hero-main@1x.jpg';
import heroMain2x from './files/hero-main@2x.jpg';
import newProduct11x from './files/new-product-1@1x.png';
import newProduct12x from './files/new-product-1@2x.png';
import newProduct21x from './files/new-product-2@1x.png';
import newProduct22x from './files/new-product-2@2x.png';
import newProduct31x from './files/new-product-3@1x.png';
import newProduct32x from './files/new-product-3@2x.png';

const heroMain = {
  src1x: heroMain1x,
  src2x: heroMain2x,
  alt: 'Фабричный цех, заполненный станками',
};

const newProducts = [
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

export { heroMain, newProducts };
