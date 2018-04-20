import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './publicPages/home/home.component';
import { NavigationBarComponent } from './common/navigation-bar/navigation-bar.component';
import { BookViewComponent } from './publicPages/book-view/book-view.component';
import { SearchComponent } from './publicPages/search/search.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'bookDetail/:id', component: BookViewComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/:query', component: SearchComponent }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
