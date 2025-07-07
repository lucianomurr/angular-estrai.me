import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-admin-preview',
  template: `
    <section id="admin-panel" class="section bg-gray-50">
      <div class="container">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="mb-6">
            Admin <span class="gradient-text">Control Panel</span>
          </h2>
          <p class="text-gray-600 text-lg">
            Take full control of your extraction events with our comprehensive
            admin dashboard
          </p>
        </div>

        <div
          class="relative rounded-2xl bg-white shadow-xl overflow-hidden mb-16"
        >
          <div
            class="absolute left-8 top-1/4 w-64 bg-white rounded-lg shadow-lg p-4 z-10 hidden lg:block"
          >
            <h4 class="font-semibold text-primary-600 mb-2">
              Game Initialization
            </h4>
            <p class="text-sm text-gray-600">
              Set up event parameters, ticket ranges, and spin settings
            </p>
          </div>

          <div
            class="absolute right-8 top-1/3 w-64 bg-white rounded-lg shadow-lg p-4 z-10 hidden lg:block"
          >
            <h4 class="font-semibold text-secondary-500 mb-2">
              Player Management
            </h4>
            <p class="text-sm text-gray-600">
              Monitor participants, manage tickets, and handle exceptions
            </p>
          </div>

          <div
            class="absolute left-8 bottom-1/4 w-64 bg-white rounded-lg shadow-lg p-4 z-10 hidden lg:block"
          >
            <h4 class="font-semibold text-accent-500 mb-2">Spin Control</h4>
            <p class="text-sm text-gray-600">
              Start spins, control speed, and manage the visual experience
            </p>
          </div>

          <div
            class="absolute right-8 bottom-1/3 w-64 bg-white rounded-lg shadow-lg p-4 z-10 hidden lg:block"
          >
            <h4 class="font-semibold text-success-500 mb-2">
              Prize Allocation
            </h4>
            <p class="text-sm text-gray-600">
              Set up prizes, verify winners, and track prize distribution
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden mb-12">
          <div class="card">
            <h4 class="font-semibold text-primary-600 mb-2">
              Game Initialization
            </h4>
            <p class="text-sm text-gray-600">
              Set up event parameters, ticket ranges, and spin settings
            </p>
          </div>

          <div class="card">
            <h4 class="font-semibold text-secondary-500 mb-2">
              Player Management
            </h4>
            <p class="text-sm text-gray-600">
              Monitor participants, manage tickets, and handle exceptions
            </p>
          </div>

          <div class="card">
            <h4 class="font-semibold text-accent-500 mb-2">Spin Control</h4>
            <p class="text-sm text-gray-600">
              Start spins, control speed, and manage the visual experience
            </p>
          </div>

          <div class="card">
            <h4 class="font-semibold text-success-500 mb-2">
              Prize Allocation
            </h4>
            <p class="text-sm text-gray-600">
              Set up prizes, verify winners, and track prize distribution
            </p>
          </div>
        </div>

        <div
          class="bg-linear-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 class="text-2xl font-semibold text-center mb-8">
            Key Admin Features
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              class="bg-white/10 backdrop-blur-xs rounded-xl p-6 hover:bg-white/20 transition-colors"
            >
              <h4 class="font-semibold mb-3 text-accent-200">
                Real-time Monitoring
              </h4>
              <p class="text-sm opacity-90">
                Track participant entries, waiting room status, and system
                performance
              </p>
            </div>

            <div
              class="bg-white/10 backdrop-blur-xs rounded-xl p-6 hover:bg-white/20 transition-colors relative overflow-hidden"
            >
              <h4 class="font-semibold mb-3 text-accent-200">
                Custom Branding
              </h4>
              <p class="text-sm opacity-90">
                Add your logo, colors, and messaging to create a branded
                experience
              </p>
              <span
                class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset"
                >Coming Soon</span
              >
              <div
                class="absolute inset-0 bg-white opacity-10 rounded-xl animate-pulse-slow"
              ></div>
            </div>

            <div
              class="bg-white/10 backdrop-blur-xs rounded-xl p-6 hover:bg-white/20 transition-colors"
            >
              <h4 class="font-semibold mb-3 text-accent-200">
                Participant Management
              </h4>
              <p class="text-sm opacity-90">
                Add, remove, or modify participant information and ticket
                assignments
              </p>
              <span
                class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset"
                >Coming Soon</span
              >
              <div
                class="absolute inset-0 bg-white opacity-10 rounded-xl animate-pulse-slow"
              ></div>
            </div>

            <div
              class="bg-white/10 backdrop-blur-xs rounded-xl p-6 hover:bg-white/20 transition-colors"
            >
              <h4 class="font-semibold mb-3 text-accent-200">
                Multiple Spin Rounds
              </h4>
              <p class="text-sm opacity-90">
                Configure multiple draw rounds with different prize pools and
                participants
              </p>
            </div>

            <div
              class="bg-white/10 backdrop-blur-xs rounded-xl p-6 hover:bg-white/20 transition-colors"
            >
              <h4 class="font-semibold mb-3 text-accent-200">
                Results Verification
              </h4>
              <p class="text-sm opacity-90">
                Verify winners, manage prize claims, and generate result reports
              </p>
            </div>

            <div
              class="bg-white/10 backdrop-blur-xs rounded-xl p-6 hover:bg-white/20 transition-colors"
            >
              <h4 class="font-semibold mb-3 text-accent-200">
                Detailed Analytics
              </h4>
              <p class="text-sm opacity-90">
                Access comprehensive event statistics and participant engagement
                data
              </p>
              <span
                class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset"
                >Coming Soon</span
              >
              <div
                class="absolute inset-0 bg-white opacity-10 rounded-xl animate-pulse-slow"
              ></div>
            </div>
          </div>

          <div class="mt-10 text-center">
            <a
              [routerLink]="['/game']"
              routerLinkActive="router-link-active"
              class="btn bg-white text-primary-600 hover:bg-accent-200 focus:ring-white"
            >
              Get Admin Access
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class AdminPreviewComponent {}
