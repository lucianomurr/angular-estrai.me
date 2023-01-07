import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RaffleDocument, RaffleGameService, UserInGame } from '../../../shared/services/raffe-game.service';
import { Observable, take } from 'rxjs';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-play-game',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8 bg-white shadow dark:bg-gray-800">
      <p class="mb-6 text-xl font-normal text-center text-gray-500 dark:text-gray-300">Join using the code:</p>
      <p class="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">{{ gameID }}</p>
      <p class="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-300">All the users appears below</p>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" *ngIf="players$ | async as players">
        <div class="p-4" *ngFor="let item of players">
          <div class="flex-col  flex justify-center items-center">
            <div class="flex-shrink-0">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="https://ui-avatars.com/api/?name={{ item.name }}&size=150"
                  class="mx-auto object-cover rounded-full h-20 w-20 " />
              </a>
            </div>
            <div class="mt-2 text-center flex flex-col">
              <span class="text-lg font-medium text-gray-600 dark:text-white"> {{ item.name }} </span>
              <span>{{ item.ticketID }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class PlayGameComponent implements OnInit {
  gameID: string;
  docId: Observable<RaffleDocument[]>;

  players$!: Observable<UserInGame[]>;

  constructor(private route: ActivatedRoute, private raffleGameService: RaffleGameService) {
    this.gameID = this.route.snapshot.paramMap.get('gameID') || '';
    this.docId = raffleGameService.getGameByID(this.gameID);
  }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.docId.pipe(take(1)).subscribe(game => {
      if (game[0].status === 'ready') {
        this.raffleGameService.GetUsersByGameID(game[0].collectionID).then(res => {
          this.players$ = res;
        });
      }
    });
  }
}
