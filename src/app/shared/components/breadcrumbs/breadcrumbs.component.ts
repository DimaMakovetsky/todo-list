import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreadcrumbsService } from 'src/app/services/breadcrumbs/breadcrumbs.service';
import { Breadcrumb } from 'src/app/types/breadcrumb.type';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  public breadcrumbs$: Observable<Breadcrumb[]> = this.breadcrumbsService.breadcrumbs$;

  constructor(private breadcrumbsService: BreadcrumbsService) {}

}
