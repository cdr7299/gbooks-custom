import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './publicPages/home/home.component';
// import { NavigationMenuComponent } from './common/navbar/navigation-menu/navigation-menu.component';
import { NavigationBarComponent } from './common/navigation-bar/navigation-bar.component';
import { AppRoutingModule } from './/app-routing.module';
import { CommonService } from './common.service';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookViewComponent } from './publicPages/book-view/book-view.component';
import { SearchComponent } from './publicPages/search/search.component';
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    BookViewComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [ CommonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
