import { Component, inject } from '@angular/core';

import { RouterModule } from '@angular/router';
import { OverviewComponent } from './overview.component';
import { SupportMeComponent } from './support.component';
import { UserService } from '@data-access';
import { HeroComponent } from './hero.component';
import { HowItWorksComponent } from './how-it-works.component';
import { AdminPreviewComponent } from './admin-preview.components';

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
export class IndexComponent {
  public userService = inject(UserService);
}
