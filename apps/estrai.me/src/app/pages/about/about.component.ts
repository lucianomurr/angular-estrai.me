import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="px-4 py-20 bg-lightblue">
      <div class="flex flex-col max-w-6xl mx-auto md:flex-row">
        <h2 class="w-full mr-8 text-3xl font-extrabold leading-9 md:w-1/3">
          ABOUT
        </h2>
        <dl class="w-full md:w-2/3">
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">What is Estrai.me?</h3>
          </dt>
          <dd class="mb-16">
            <p>
              Raffle games are an exciting way to bring an extra element of fun
              to your events. An online raffle game is a great tool for
              increasing engagement and driving donations. With ESTRAI.me, you
              can easily create a unique and memorable experience.
            </p>
          </dd>
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">How It Works?</h3>
          </dt>
          <dd class="mb-16">
            <p>
              ESTRAI.me give to you the ability to host an in person raffle
              game. What you need is to login and create your event. Once you’ve
              registered your event, you’ll be able to create a custom raffle
              where participants can join and take free tickets to enter. Once
              the tickets are purchased, participants can then enter the raffle.
              The winner will be chosen at random and will be announced directly
              on the ESTRAI.me page.
            </p>
          </dd>
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">Benefits</h3>
          </dt>
          <dd class="mb-16">
            <p>
              An online raffle game is a great way to engage your audience and
              increase interaction and networking. It’s a fun and interactive
              way to draw while. It’s also relatively easy to set up and manage,
              allowing you to focus on other aspects of your event. Plus, since
              tickets can be assigned electronically, it’s a great way improve
              your event spend more time on engaging people for your event in
              person.
            </p>
          </dd>
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">DISCLAIMER</h3>
          </dt>
          <dd class="mb-16">
            <p>
              This online raffle game is provided as a free service and without
              any warranty of any kind. The game is provided without any
              guarantee of results or accuracy. We assume no responsibility or
              liability for any loss or damage incurred as a result of
              participating in this game. All participants must comply with all
              applicable laws and regulations.
            </p>
          </dd>
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">Conclusion</h3>
          </dt>
          <dd class="mb-16">
            <p>
              ESTRAI.me is a great way to add an extra layer of fun and
              excitement to your event. It’s an easy way to engage your
              audience, and create a memorable experience.
            </p>
          </dd>
        </dl>
      </div>
    </div>
  `,
  styles: [],
})
export class AboutComponent {}
