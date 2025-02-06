import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'navBar', component: NavBarComponent },
    { path: 'home', component: HomeComponent },
    // { path: 'login', component: LoginComponent },
    // Add more routes here...
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: 'home', component: NavBarComponent },
    // { path: 'community', component: NavBarComponent },
    // { path: 'contact', component: NavBarComponent },
    // { path: 'workouts', component: NavBarComponent },
    // { path: 'yoga', component: NavBarComponent },
    // { path: 'nutrition', component: NavBarComponent },
    // { path: 'mental-wellness', component: NavBarComponent },
    // { path: 'fitness-challenges', component: NavBarComponent },
    // { path: '**', redirectTo: '/home' } // Redirect unknown routes
];



