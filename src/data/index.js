import {
  heroImgMain, newProductsImgs, productsImgs, aboutUsImgs, newsImgs,
} from './imgs';

const heroData = {
  title: 'Пионер',
  subtitle: 'Завод cиловых машин',
  text: '28 лет в\u00A0деле. Мы\u00A0знаем, как\u00A0автоматизировать технологические процессы вашего предприятия.',
  mainImg: heroImgMain,
};

const newProductsData = {
  title: 'Новинки',
  text: 'Пионер — это\u00A0инновации. Мы\u00A0регулярно выполняют проекты по\u00A0модернизации серийных и\u00A0разработке новых приборов.',
  products: [
    {
      id: 1,
      title: 'Электромагнитные расходомеры-счетчики',
      src: newProductsImgs[0].src,
      srcSet: newProductsImgs[0].srcSet,
    },
    {
      id: 2,
      title: 'Манометры цифровые эталонные',
      src: newProductsImgs[1].src,
      srcSet: newProductsImgs[1].srcSet,
    },
    {
      id: 3,
      title: 'Электромагнитные расходомеры-счетчики',
      src: newProductsImgs[2].src,
      srcSet: newProductsImgs[2].srcSet,
    },
    {
      id: 4,
      title: 'Штуцер передвижной',
      src: newProductsImgs[0].src,
      srcSet: newProductsImgs[0].srcSet,
    },
    {
      id: 5,
      title: 'Электромагнитные расходомеры-счетчики',
      src: newProductsImgs[1].src,
      srcSet: newProductsImgs[1].srcSet,
    },
  ],
};

const productsData = {
  title: 'Продукция',
  products: [
    {
      id: 1,
      title: 'Сигнализатор уровня и потока термодифференциальный',
      src: productsImgs[0].src,
      srcSet: productsImgs[0].srcSet,
      isMain: true,
    },
    {
      id: 2,
      title: 'Модульные преобразователи',
      src: productsImgs[1].src,
      srcSet: productsImgs[1].srcSet,
      isMain: false,
    },
    {
      id: 3,
      title: 'Калибратор давления',
      src: productsImgs[2].src,
      srcSet: productsImgs[2].srcSet,
      isMain: false,
    },
  ],
};

const aboutUsData = {
  title: 'О компании',
  text: 'Пионер — это\u00A0научно-производственное предприятие. В\u00A0наших лабораториях мы\u00A0разрабатываем и\u00A0тестируем силовые машины. А\u00A0затем реализуем их\u00A0в\u00A0производстве. Наши представительства можно встретить не\u00A0только в\u00A0России, но\u00A0и\u00A0в\u00A0Республике Беларусь, Казахстане и\u00A0Узбекистание.',
  gallery: aboutUsImgs,
};

const newsData = {
  title: 'Новости',
  news: [
    {
      id: 1,
      title: 'ПИОНЕР в условиях пандемии',
      href: '#',
      src: newsImgs[0].src,
      srcSet: newsImgs[0].srcSet,
      isMain: true,
    },
    {
      id: 2,
      title: 'НПП\u00A0ПИОНЕР подтвердило свои\u00A0компетенции в\u00A0области консультирования и\u00A0изготовления оборудование для\u00A0объектов использования атомной энергии',
      href: '#',
      src: newsImgs[1].src,
      srcSet: newsImgs[1].srcSet,
      isMain: false,
    },
    {
      id: 3,
      title: 'Перенос сроковпроведения запланированных работ в\u00A02020\u00A0году',
      href: '#',
      src: newsImgs[2].src,
      srcSet: newsImgs[2].srcSet,
      isMain: false,
    },
  ],
};

export {
  heroData, newProductsData, productsData, aboutUsData, newsData,
};
