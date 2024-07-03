import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti';

/*
    Shows confetti animations, just for fun.
    See: https://www.kirilv.com/canvas-confetti/
*/
@Injectable({
  providedIn: 'root',
})
export class ConfettiService {
  constructor() {}

  public canon(): void {
    confetti({
      angle: this.randomInRange(55, 125),
      spread: this.randomInRange(50, 70),
      particleCount: this.randomInRange(50, 100),
      origin: { y: 0.6 },
    });
  }

  public fireworks(): void {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 99 };

    setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      const particleCount = 50 * (timeLeft / duration);

      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: this.randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        }),
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: this.randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        }),
      );
    }, 250);
  }

  private randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
}
