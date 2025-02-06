import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app.routes';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  // providers: [provideRouter(routes)]
})
export class AppComponent {
  title = 'FitGenie';
  // bootstrapApplication(AppComponent)
}