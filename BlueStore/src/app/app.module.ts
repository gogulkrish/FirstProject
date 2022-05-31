import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { TopdealsComponent } from './topdeals/topdeals.component';
import { TopfashnComponent } from './topfashn/topfashn.component';
import { TdydealsComponent } from './tdydeals/tdydeals.component';
import { BrnddirComponent } from './brnddir/brnddir.component';
import { FooterComponent } from './footer/footer.component';
import { Nav1Component } from './header/nav1/nav1.component';
import { Nav2Component } from './header/nav2/nav2.component';
import { ClothingComponent } from './clothing/clothing.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { FootwearsComponent } from './footwears/footwears.component';
import { WatchComponent } from './watch/watch.component';
import { GroomingComponent } from './grooming/grooming.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SingleprpgComponent } from './singleprpg/singleprpg.component';
import { SpimgComponent } from './singleprpg/spimg/spimg.component';
import { SpdescprtnComponent } from './singleprpg/spdescprtn/spdescprtn.component';
import { CartComponent } from './cart/cart.component';
import { TestcmpComponent } from './testcmp/testcmp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    TopdealsComponent,
    TopfashnComponent,
    TdydealsComponent,
    BrnddirComponent,
    FooterComponent,
    Nav1Component,
    Nav2Component,
    ClothingComponent,
    AccessoriesComponent,
    FootwearsComponent,
    WatchComponent,
    GroomingComponent,
    HomeComponent,
    SingleprpgComponent,
    SpimgComponent,
    SpdescprtnComponent,
    CartComponent,
    TestcmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
