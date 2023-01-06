import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
@NgModule({
    declarations:[
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    BreadcrumbsComponent,
    
  ],
    imports:[
      CommonModule,
      RouterModule
    ],
    exports:[
        HeaderComponent,
        FooterComponent,
        BreadcrumbsComponent
    ]
})
export class SharedModule
{

}