import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { HomeComponent } from './home/home.component';
import { ShowShoppingCartComponent } from './show-shopping-cart/show-shopping-cart.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'add',component:AddProductComponent},
  {path:'cart',component:ShowShoppingCartComponent},
  {path:'details/:id',component:DetailsComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
