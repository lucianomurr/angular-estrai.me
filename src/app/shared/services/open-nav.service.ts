import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ToggleService {
  private sidenavSource$ = new BehaviorSubject<boolean>(false);
  sidenav$ = this.sidenavSource$.asObservable();

  updateData(data: boolean) {
    this.sidenavSource$.next(data);
  }
}
