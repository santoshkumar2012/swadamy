import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

export const routes: Routes = [
    { path:'', component: HomeComponent},
    { path:'product-list', loadComponent: () => import('./pages/product-list/product-list.component').then((m) => m.ProductListComponent)},
    { path:'product-details', loadComponent: () => import('./pages/product-details/product-details.component').then((m) => m.ProductDetailsComponent)},
    { path:'about-us', loadComponent: () => import('./pages/about-us/about-us.component').then((m) => m.AboutUsComponent)},
    { path:'blog', loadComponent: () => import('./pages/blog/blog.component').then((m) => m.BlogComponent)},
    { path: 'cart', loadComponent: () => import('./pages/cart/cart.component').then((m) => m.CartComponent)},
    { path: 'checkout', loadComponent: () => import('./pages/checkout/checkout.component').then((m) => m.CheckoutComponent)},
    { path: 'contact-us', loadComponent: () => import('./pages/contact-us/contact-us.component').then((m) => m.ContactUsComponent)},
    { path: 'login', loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent)},
    { path: 'register', loadComponent: () => import('./pages/register/register.component').then((m) => m.RegisterComponent)}
];
