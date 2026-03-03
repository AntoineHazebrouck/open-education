import { Routes } from '@angular/router';
import { About } from './components/pages/about/about';
import { Home } from './components/pages/home/home';
import { Projects } from './components/pages/projects/projects';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Accueil',
  },
  {
    path: 'about',
    component: About,
    title: 'À propos',
  },
  {
    path: 'projects',
    component: Projects,
    title: 'Nos projets',
  },
  { path: '**', redirectTo: '' }, // redirect 404 to home
];
