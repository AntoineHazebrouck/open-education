import { Routes } from '@angular/router';
import { About } from './components/pages/about/about';
import { Home } from './components/pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Accueil',
  },
  {
    path: 'about',
    component: About,
    title: 'TODO',
  },
  { path: '**', redirectTo: '' }, // redirect 404 to home
];
