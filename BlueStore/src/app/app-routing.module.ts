import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ClothingComponent } from './clothing/clothing.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { FootwearsComponent } from './footwears/footwears.component';
import { WatchComponent } from './watch/watch.component';
import { GroomingComponent } from './grooming/grooming.component';
import { HomeComponent } from './home/home.component';
import { ClothingComponent } from './clothing/clothing.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'Clothing', component: ClothingComponent},
  {path:'Accessories', component: AccessoriesComponent},
  {path:'Footwears', component: FootwearsComponent},
  {path:'Watch', component: WatchComponent},
  {path:'Grooming', component: GroomingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
