import { Routes } from '@angular/router';
import { About } from './components/pages/about/about';
import { Home } from './components/pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: ``,
  },
  {
    path: 'about',
    component: About,
    title: `L'association`,
  },
  { path: '**', redirectTo: '' }, // redirect 404 to home
];
