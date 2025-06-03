import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [RouterModule],
  template: ` <router-outlet /> `,
  styles: [],
})
export class GameComponent {}
