import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative z-10 flex items-center overflow-hidden bg-white dark:bg-gray-800">
      <div class="container relative flex px-6 py-16 mx-auto">
        <div class="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
          <span class="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"> </span>
          <h1
            class="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
            Introduction
          </h1>
          <p class="text-sm text-gray-700 sm:text-base dark:text-white">
            Raffle games are an exciting way to bring an extra element of fun to your events. An online raffle game is a
            great tool for increasing engagement and driving donations. With an online raffle game, you can easily reach
            a larger audience, create a unique and memorable experience, and increase donations for your cause. How It
            Works
          </p>

          <h1
            class="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
            How It Works
          </h1>
          <p class="text-sm text-gray-700 sm:text-base dark:text-white">
            To host an online raffle game, you’ll need to register your event with a third-party service that has the
            ability to host online raffles. Once you’ve registered your event, you’ll be able to create a custom raffle
            where participants can purchase tickets to enter. You’ll also be able to set the number of tickets
            available, the price of each ticket, and any additional conditions or restrictions. Once the tickets are
            purchased, participants can then enter the raffle. The winner will be chosen at random and will be notified
            via email. Depending on the service you choose, you may also have the option to have the winner announced
            publicly on a live stream or other platform.
          </p>

          <h1
            class="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
            Benefits
          </h1>
          <p class="text-sm text-gray-700 sm:text-base dark:text-white">
            An online raffle game is a great way to engage your audience and increase donations. It’s a fun and
            interactive way to draw while also raising funds for your cause. It’s also relatively easy to set up and
            manage, allowing you to focus on other aspects of your event. Plus, since tickets can be purchased
            electronically, it’s a great way to make donations more accessible to those who may not be able to attend
            your event in person.
          </p>

          <h1
            class="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
            Conclusion
          </h1>
          <p class="text-sm text-gray-700 sm:text-base dark:text-white">
            An online raffle game is a great way to add an extra layer of fun and excitement to your event. It’s an easy
            way to engage your audience, increase donations, and create a memorable experience.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class AboutComponent {}
