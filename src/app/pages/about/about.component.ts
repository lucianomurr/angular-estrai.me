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
            class="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue pt-6 sm:text-8xl dark:text-white">
            Introduction
          </h1>
          <p class="text-sm text-gray-700 sm:text-base dark:text-white">
            Raffle games are an exciting way to bring an extra element of fun to your events. An online raffle game is a
            great tool for increasing engagement and driving donations. With ESTRAI.me, you can easily create a unique
            and memorable experience.
          </p>

          <h1
            class="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue pt-6 sm:text-8xl dark:text-white">
            How It Works
          </h1>
          <p class="text-sm text-gray-700 sm:text-base dark:text-white">
            ESTRAI.me give to you the ability to host an in person raffle game. What you need is to login and create
            your event. Once you’ve registered your event, you’ll be able to create a custom raffle where participants
            can join and take free tickets to enter. Once the tickets are purchased, participants can then enter the
            raffle. The winner will be chosen at random and will be announced directly on the ESTRAI.me page.
          </p>

          <h1
            class="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue pt-6 sm:text-8xl dark:text-white">
            Benefits
          </h1>
          <p class="text-sm text-gray-700 sm:text-base dark:text-white">
            An online raffle game is a great way to engage your audience and increase interaction and networking. It’s a
            fun and interactive way to draw while. It’s also relatively easy to set up and manage, allowing you to focus
            on other aspects of your event. Plus, since tickets can be assigned electronically, it’s a great way improve
            your event spend more time on engaging people for your event in person.
          </p>

          <h1
            class="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue pt-6 sm:text-8xl dark:text-white">
            DISCLAIMER
          </h1>
          <p class="text-sm text-gray-700 sm:text-base dark:text-white">
            This online raffle game is provided as a free service and without any warranty of any kind. The game is
            provided without any guarantee of results or accuracy. We assume no responsibility or liability for any loss
            or damage incurred as a result of participating in this game. All participants must comply with all
            applicable laws and regulations.
          </p>

          <h1
            class="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue pt-6 sm:text-8xl dark:text-white">
            Conclusion
          </h1>
          <p class="text-sm text-gray-700 sm:text-base dark:text-white">
            ESTRAI.me is a great way to add an extra layer of fun and excitement to your event. It’s an easy way to
            engage your audience, and create a memorable experience.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class AboutComponent {}
