import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'welcome',
    loadComponent: () => import('./welcome/welcome.page').then((m) => m.WelcomePage),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then((m) => m.SignupPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'booking',
    loadComponent: () => import('./booking/booking.page').then((m) => m.BookingPage),
  },
  {
    path: 'appointments',
    loadComponent: () => import('./appointments/appointments.page').then((m) => m.AppointmentsPage),
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then((m) => m.ProfilePage),
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
];
