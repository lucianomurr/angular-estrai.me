import { Component, Input, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroCheckCircle,
  heroClipboardDocument,
} from '@ng-icons/heroicons/outline';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [NgIcon, QRCodeComponent],
  providers: [provideIcons({ heroCheckCircle, heroClipboardDocument })],
  template: `
    <div class="card">
      <h2 class="text-xl font-semibold mb-4">Game Information</h2>

      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2"
            >Game ID</label
          >
          <div class="flex items-center gap-2">
            <input
              type="text"
              [value]="gameID"
              readOnly
              class="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 font-mono"
            />
            <!-- Copy Button -->
            <button
              class="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              (click)="copyToClipboardGameID()"
              [attr.aria-label]="'Copy Game ID'"
              [attr.title]="'Copy Game ID'"
            >
              @if (!copyToClipboardGameIDSuccess) {
                <ng-icon name="heroClipboardDocument" size="20"></ng-icon>
              } @else {
                <ng-icon
                  name="heroCheckCircle"
                  class="text-green-500"
                  size="20"
                ></ng-icon>
              }
            </button>
          </div>
        </div>

        @if (gameStatus === 'ready') {
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Join URL</label
            >
            <div class="flex items-center gap-2">
              <input
                type="text"
                value="{{ gameQRUrl + gameID }}"
                readOnly
                class="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 text-sm"
              />
              <!-- Copy Button -->
              <button
                class="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                (click)="copyToClipboardJoinURL()"
                [attr.aria-label]="'Copy Game ID'"
                [attr.title]="'Copy Game ID'"
              >
                @if (!copyToClipboardJoinURLSuccess) {
                  <ng-icon name="heroClipboardDocument" size="20"></ng-icon>
                } @else {
                  <ng-icon
                    name="heroCheckCircle"
                    class="text-green-500"
                    size="20"
                  ></ng-icon>
                }
              </button>
            </div>
          </div>

          <!-- -- QR Code Section -->
          <div class="text-center">
            <div
              class="inline-block p-4 bg-gray-100 border-2 border-gray-200 rounded-lg"
            >
              <div
                class="w-48 h-48  rounded-lg flex items-center justify-center"
              >
                <div class="text-center">
                  <qrcode
                    [qrdata]="gameQRUrl + gameID"
                    [imageHeight]="180"
                    [imageWidth]="180"
                    [width]="180"
                    [errorCorrectionLevel]="'M'"
                  ></qrcode>

                  <p class="text-xs text-gray-500 pt-2">Scan to join</p>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [``],
})
export class GameInfoComponent {
  @Input() public gameID: string = '';
  @Input() public gameStatus: string = '';

  public get gameQRUrl(): string {
    return `${window.location.origin}/game/join?game=`;
  }
  public copyToClipboardGameIDSuccess = false;
  public copyToClipboardJoinURLSuccess = false;

  public copyToClipboardGameID() {
    // copy the game ID to clipboard
    navigator.clipboard.writeText(this.gameID).then(
      () => {
        console.log('Game ID copied to clipboard');
        this.copyToClipboardGameIDSuccess = true;
      },
      (err) => {
        console.error('Failed to copy Game ID: ', err);
      },
    );
    setTimeout(() => {
      this.copyToClipboardGameIDSuccess = false;
    }, 2000);
  }
  public copyToClipboardJoinURL() {
    navigator.clipboard.writeText(this.gameQRUrl + this.gameID).then(
      () => {
        this.copyToClipboardJoinURLSuccess = true;
        console.log('Join URL copied to clipboard');
      },
      (err) => {
        console.error('Failed to copy Join URL: ', err);
      },
    );
    setTimeout(() => {
      this.copyToClipboardJoinURLSuccess = false;
    }, 2000);
  }
}
