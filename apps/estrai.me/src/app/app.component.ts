import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/component/footer/footer.component';
import { HeaderComponent } from './shared/component/header/header.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <app-header />
    <router-outlet />
    <app-footer />
  `,
  styles: [''],
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
})
export class AppComponent {
  title = 'estrai.me';
}
