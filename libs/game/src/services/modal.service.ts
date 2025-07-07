import {
  ComponentRef,
  Injectable,
  ViewContainerRef,
  inject,
} from '@angular/core';

import { Subject } from 'rxjs';
import { UserInGame } from '../interface/player-user.interface';
import { WinnerModalComponent } from '../play-game/winner-modal/winner-modal.component';

@Injectable({
  providedIn: 'root',
})
export default class ModalService {
  private componentRef!: ComponentRef<WinnerModalComponent>;
  private componentSubscriber!: Subject<string>;

  openModal(entry: ViewContainerRef, user: UserInGame) {
    this.componentRef = entry.createComponent(WinnerModalComponent);
    this.componentRef.instance.user = user;
    this.componentRef.instance.closeMeEvent.subscribe(() => this.closeModal());
    this.componentRef.instance.confirmEvent.subscribe(() => this.confirm());
    this.componentSubscriber = new Subject<string>();
    return this.componentSubscriber.asObservable();
  }

  closeModal() {
    this.componentSubscriber.complete();
    this.componentRef.destroy();
  }

  confirm() {
    this.componentSubscriber.next('confirm');
    this.closeModal();
  }
}
