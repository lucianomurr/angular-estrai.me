import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/component/footer/footer.component';
import { HeaderComponent } from './shared/component/header/header.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div class="min-h-screen bg-gray-50">
      @if (router.url === '/' || router.url === '/home') {
        <app-header />
      }

      <!-- Main content area -->
      <router-outlet />

      @if (router.url !== '/auth/log-in') {
        <app-footer />
      }
    </div>
  `,
  styles: [''],
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
})
export class AppComponent {
  router = inject(Router);
}
