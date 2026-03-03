import { Routes } from '@angular/router';
import { Classes } from './components/pages/classes/classes';
import { Home } from './components/pages/home/home';
import { Projects } from './components/pages/projects/projects';
import { Volunteer } from './components/pages/volunteer/volunteer';
import { Donation } from './components/pages/donation/donation';
import { Contact } from './components/pages/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: `L'association`,
  },
  {
    path: 'classes',
    component: Classes,
    title: 'Nos classes',
  },
  {
    path: 'projects',
    component: Projects,
    title: 'Nos projets',
  },
  {
    path: 'volunteer',
    component: Volunteer,
    title: 'Devenir bénévole',
  },
  {
    path: 'donation',
    component: Donation,
    title: 'Faire un don',
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Nous contacter',
  },
  { path: '**', redirectTo: '' }, // redirect 404 to home
];
