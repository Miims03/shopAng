import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'login', component: LoginComponent },
    { path: 'confirm', component: ConfirmEmailComponent},
    { path: 'signup', component: SignupComponent },
    // { path: '**', redirectTo: '/' } // Default route
];
