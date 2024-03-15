import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { NewproductDetailsComponent } from './component/newproduct-details/newproduct-details.component';
import { CartComponent } from './component/cart/cart.component';
import { ObsComponent } from './component/obs/obs.component';
import { NewProductComponent } from './component/new-product/new-product.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'addproduct', component: NewProductComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'cart', component: CartComponent, title: 'cart' },
  { path: 'contactus', component: ContactusComponent, title: 'contactus' },
  { path: 'aboutus', component: AboutusComponent, title: 'aboutus' },
  { path: 'login', component: LoginComponent, title: 'login' },
  { path: 'profile', component: ProfileComponent, title: 'profile' },
  { path: 'obs', component: ObsComponent, title: 'obs' },
  {
    path: 'product/:id',
    component: NewproductDetailsComponent,
    title: 'product',
  },
  { path: '**', component: NotfoundComponent }, //de l hwa byrohlha law kol l fo2 da mesh bymatch
];
