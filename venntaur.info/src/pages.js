import Discography from './Discography';
import DjMixes from './DjMixes';
import Info from './Info';
import Music from './Music';

export default [
  {
    url: 'info',
    label: 'Info',
    component: Info,
  },
  {
    url: 'music',
    label: 'Music',
    component: Music,
  },
  {
    url: 'discography',
    label: 'Discography',
    component: Discography,
  },
  {
    url: 'djmixes',
    label: 'DJ mixes',
    component: DjMixes,
  },
];
