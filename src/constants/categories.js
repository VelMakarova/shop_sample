import { ENG, RUS } from '../constants/languages';
import routes from './routes';
import perfumes from '../../public/img/categories/perfumes.png';
import organic from '../../public/img/categories/organic.png';
import makeup from '../../public/img/categories/makeup.png';
import care from '../../public/img/categories/care.png';

const CATEGORIES = [
  {
    language: ENG,
    category: [
      {
        categoryName: 'Perfumes',
        categoryLabel: 'perfumes',
        categoryPath: routes.INDEX,
        categoryImg: perfumes,
      },
      {
        categoryName: 'organic cosmetology',
        categoryLabel: 'organic',
        categoryPath: routes.INDEX,
        categoryImg: organic,
      },
      {
        categoryName: 'make up',
        categoryLabel: 'makeup',
        categoryPath: routes.INDEX,
        categoryImg: makeup,
      },
      {
        categoryName: 'skin care',
        categoryLabel: 'care',
        categoryPath: routes.INDEX,
        categoryImg: care,
      },
    ],
  },
  {
    language: RUS,
    category: [
      {
        categoryName: 'Парфюмерия',
        categoryLabel: 'perfumes',
        categoryPath: routes.INDEX,
        categoryImg: perfumes,
      },
      {
        categoryName: 'Органическая косметика',
        categoryLabel: 'organic',
        categoryPath: routes.INDEX,
        categoryImg: organic,
      },
      {
        categoryName: 'Макияж',
        categoryLabel: 'makeup',
        categoryPath: routes.INDEX,
        categoryImg: makeup,
      },
      {
        categoryName: 'Уход за кожей',
        categoryLabel: 'care',
        categoryPath: routes.INDEX,
        categoryImg: care,
      },
    ],
  },
];

export default CATEGORIES;
