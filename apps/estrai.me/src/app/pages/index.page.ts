import { Component, inject } from '@angular/core';

import { RouterModule } from '@angular/router';
import { UserService } from '@data-access';
import { OverviewComponent } from '../components/home/overview.component';
import { SupportMeComponent } from '../components/home/support.component';
import { HeroComponent } from '../components/home/hero.component';
import { HowItWorksComponent } from '../components/home/how-it-works.component';
import { AdminPreviewComponent } from '../components/home/admin-preview.components';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    RouterModule,
    OverviewComponent,
    SupportMeComponent,
    HeroComponent,
    HowItWorksComponent,
    AdminPreviewComponent,
  ],
  providers: [UserService],
  template: `
    <app-hero />
    <app-overview />
    <app-how-it-works />
    <app-admin-preview />
    <app-support-me />
  `,
  styles: [],
})
export default class IndexComponent {
  public userService = inject(UserService);
}
