import { Routes } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';

export const routes: Routes = [
  { path: '', component: GreetingComponent },
  {
    path: 'list',
    loadComponent: () =>
      import('./dog-list/dog-list.component').then(
        (screenLoaded) => screenLoaded.DogListComponent
      ),
  },
  {
    path: 'pet-details/:id',
    loadComponent: () =>
      import('./pet-details/pet-details.component').then(
        (screenLoaded) => screenLoaded.PetDetailsComponent
      ),
  },
  {
    path: "pet-creation",
    loadComponent: () => import("./screens/pet-creation/pet-creation.component").then((screenLoaded)=> screenLoaded.PetCreationComponent)
  }
];
