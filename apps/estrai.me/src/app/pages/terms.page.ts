import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matMail, matPhone, matPin } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ matMail, matPhone, matPin })],
  template: `
    <div class="min-h-screen flex pt-20 items-center bg-white overflow-hidden">
      <main class="container mx-auto px-4 py-12">
        <div class="max-w-4xl mx-auto">
          <!-- {/* Page Header */} -->
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            <p class="text-lg text-gray-600">Last updated: Jun 14, 2025</p>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-12">
            <!-- {/* Introduction */} -->
            <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <div class="prose prose-gray max-w-none">
                <p class="text-gray-700 leading-relaxed">
                  Welcome to Estrai.me ("we," "our," or "us"). These Terms and
                  Conditions ("Terms") govern your use of our website and
                  services. By accessing or using Estrai.me, you agree to be
                  bound by these Terms. If you disagree with any part of these
                  terms, then you may not access the service.
                </p>
                <p class="text-gray-700 leading-relaxed mt-4">
                  These Terms constitute a legally binding agreement between you
                  and Estrai.me. Please read them carefully before using our
                  services.
                </p>
              </div>
            </section>

            <!-- {/* Definitions */} -->
            <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                2. Definitions
              </h2>
              <div class="space-y-4">
                <div class="bg-gray-50 rounded-lg p-4">
                  <h3 class="font-semibold text-gray-900 mb-2">Key Terms:</h3>
                  <ul class="space-y-2 text-gray-700">
                    <li>
                      <strong>"Service"</strong> refers to the Estrai.me
                      platform, website, and all related features
                    </li>
                    <li>
                      <strong>"User," "you," or "your"</strong> refers to the
                      individual accessing or using the Service
                    </li>
                    <li>
                      <strong>"Content"</strong> refers to text, graphics,
                      images, music, software, audio, video, works of
                      authorship, or other materials
                    </li>
                    <li>
                      <strong>"Account"</strong> refers to the unique account
                      created for you to access our Service
                    </li>
                    <li>
                      <strong>"Event"</strong> refers to lucky spin games or
                      draws created using our platform
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <!-- {/* Scope of Services */} -->
            <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                3. Scope of Services
              </h2>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                3.1 Permitted Uses
              </h3>
              <p class="text-gray-700 mb-4">You may use our Service to:</p>
              <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Create and manage lucky spin events and games</li>
                <li>Participate in events created by other users</li>
                <li>Customize spinning wheels and event settings</li>
                <li>Manage participants and prize distribution</li>
                <li>Access analytics and event data</li>
              </ul>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                3.2 Age and Geographic Restrictions
              </h3>
              <div
                class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6"
              >
                <p class="text-gray-700">
                  <strong>Age Requirement:</strong> You must be at least 13
                  years old to use our Service. Users under 18 must have
                  parental consent.
                </p>
                <p class="text-gray-700 mt-2">
                  <strong>Geographic Availability:</strong> Our Service is
                  available worldwide, but certain features may be restricted in
                  some jurisdictions due to local laws and regulations.
                </p>
              </div>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                3.3 Service Limitations
              </h3>
              <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  We reserve the right to limit the number of events per user
                </li>
                <li>Certain features may require a paid subscription</li>
                <li>
                  We may impose usage limits to ensure fair access for all users
                </li>
                <li>Service availability may vary by region</li>
              </ul>
            </section>

            <!-- {/* User Accounts and Responsibilities */} -->
            <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                4. User Accounts and Responsibilities
              </h2>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                4.1 Account Creation
              </h3>
              <p class="text-gray-700 mb-4">
                To access certain features, you must create an account by
                providing:
              </p>
              <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>A valid email address</li>
                <li>A secure password</li>
                <li>Accurate personal information</li>
                <li>Acceptance of these Terms and our Privacy Policy</li>
              </ul>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                4.2 User Obligations
              </h3>
              <p class="text-gray-700 mb-4">You agree to:</p>
              <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Provide accurate and complete information</li>
                <li>Keep your account information updated</li>
                <li>Use the Service in compliance with all applicable laws</li>
                <li>Respect the rights of other users</li>
                <li>Not engage in fraudulent or deceptive practices</li>
              </ul>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                4.3 Prohibited Activities
              </h3>
              <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                <p class="text-gray-700 mb-2"><strong>You may not:</strong></p>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    Use the Service for illegal gambling or betting activities
                  </li>
                  <li>Create fake accounts or impersonate others</li>
                  <li>Attempt to hack, disrupt, or damage our systems</li>
                  <li>Upload malicious content or spam</li>
                  <li>Violate intellectual property rights</li>
                  <li>Harass, threaten, or abuse other users</li>
                </ul>
              </div>
            </section>

            <!-- {/* Intellectual Property Rights */} -->
            <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                5. Intellectual Property Rights
              </h2>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                5.1 Our Rights
              </h3>
              <p class="text-gray-700 mb-4">
                Estrai.me and its original content, features, and functionality
                are owned by us and are protected by international copyright,
                trademark, patent, trade secret, and other intellectual property
                laws.
              </p>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                5.2 User-Generated Content
              </h3>
              <p class="text-gray-700 mb-4">
                By uploading or creating content on our platform, you grant us a
                non-exclusive, worldwide, royalty-free license to use, display,
                and distribute your content in connection with the Service. You
                retain ownership of your content.
              </p>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                5.3 Trademark Protection
              </h3>
              <p class="text-gray-700">
                "Estrai.me" and our logo are trademarks of our company. You may
                not use our trademarks without our prior written consent.
              </p>
            </section>

            <!-- {/* Privacy Considerations */} -->
            <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                6. Privacy and Data Protection
              </h2>
              <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p class="text-gray-700 mb-3">
                  Your privacy is important to us. Our collection and use of
                  personal information is governed by our
                  <a
                    to="/privacy-policy"
                    class="text-primary-600 hover:text-primary-800 font-medium"
                  >
                    Privacy Policy</a
                  >, which is incorporated into these Terms by reference.
                </p>
                <p class="text-gray-700 mb-3">
                  <strong>Data Collection:</strong> We collect information you
                  provide directly, usage data, and technical information to
                  improve our Service.
                </p>
                <p class="text-gray-700">
                  <strong>Cookies:</strong> We use cookies and similar
                  technologies as described in our Cookie Policy to enhance your
                  experience.
                </p>
              </div>
            </section>

            <!-- {/* Liability and Disclaimers */} -->
            <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                7. Disclaimers and Limitation of Liability
              </h2>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                7.1 Service Warranties
              </h3>
              <div
                class="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4"
              >
                <p class="text-gray-700">
                  <strong>DISCLAIMER:</strong> The Service is provided "AS IS"
                  and "AS AVAILABLE" without warranties of any kind, either
                  express or implied. We do not warrant that the Service will be
                  uninterrupted, secure, or error-free.
                </p>
              </div>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                7.2 Limitation of Liability
              </h3>
              <p class="text-gray-700 mb-4">
                To the maximum extent permitted by law, we shall not be liable
                for any indirect, incidental, special, consequential, or
                punitive damages, including but not limited to loss of profits,
                data, or use.
              </p>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                7.3 Indemnification
              </h3>
              <p class="text-gray-700">
                You agree to indemnify and hold us harmless from any claims,
                damages, or expenses arising from your use of the Service or
                violation of these Terms.
              </p>
            </section>

            <!-- {/* Termination */} -->
            <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                8. Termination
              </h2>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                8.1 Termination by You
              </h3>
              <p class="text-gray-700 mb-4">
                You may terminate your account at any time by contacting us or
                using the account deletion feature in your settings.
              </p>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                8.2 Termination by Us
              </h3>
              <p class="text-gray-700 mb-4">
                We may terminate or suspend your account if you:
              </p>
              <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Violate these Terms</li>
                <li>Engage in fraudulent or illegal activities</li>
                <li>Abuse or harass other users</li>
                <li>Fail to pay applicable fees</li>
              </ul>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                8.3 Effect of Termination
              </h3>
              <p class="text-gray-700">
                Upon termination, your right to use the Service ceases
                immediately. We may delete your account and data, though some
                information may be retained as required by law.
              </p>
            </section>

            <!-- {/* Legal Framework */} -->
            <!-- <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                9. Legal Framework
              </h2>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                9.1 Governing Law
              </h3>
              <p class="text-gray-700 mb-4">
                These Terms are governed by and construed in accordance with the
                laws of [Jurisdiction], without regard to conflict of law
                principles.
              </p>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                9.2 Dispute Resolution
              </h3>
              <div class="bg-gray-50 rounded-lg p-4">
                <p class="text-gray-700 mb-3">
                  <strong>Step 1:</strong> Contact us directly to resolve any
                  disputes informally.
                </p>
                <p class="text-gray-700 mb-3">
                  <strong>Step 2:</strong> If informal resolution fails,
                  disputes will be resolved through binding arbitration.
                </p>
                <p class="text-gray-700">
                  <strong>Step 3:</strong> Arbitration will be conducted by a
                  neutral arbitrator in accordance with applicable arbitration
                  rules.
                </p>
              </div>
            </section> -->

            <!-- {/* Administrative Details */} -->
            <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                10. Administrative Details
              </h2>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                10.1 Updates to Terms
              </h3>
              <p class="text-gray-700 mb-4">
                We may update these Terms from time to time. We will notify you
                of significant changes by email or through the Service. Your
                continued use after changes constitutes acceptance of the new
                Terms.
              </p>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                10.2 Severability
              </h3>
              <p class="text-gray-700 mb-4">
                If any provision of these Terms is found to be unenforceable,
                the remaining provisions will remain in full force and effect.
              </p>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                10.3 Contact Information
              </h3>
              <div
                class="bg-primary-50 border border-primary-200 rounded-lg p-6"
              >
                <h4 class="font-semibold text-primary-900 mb-4">
                  Questions about these Terms?
                </h4>
                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <ng-icon
                      name="matMail"
                      size="25"
                      class="text-primary-600"
                    />
                    <span class="text-gray-700"
                      >luciano[.]murruni[at]gmail[.]com</span
                    >
                  </div>
                  <!-- <div class="flex items-center gap-3">
                    <ng-icon
                      name="matPhone"
                      size="25"
                      class="text-primary-600"
                    />
                    <span class="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <ng-icon
                      name="matPin"
                      size="25"
                      class="text-primary-600 mt-1"
                    />
                    <span class="text-gray-700"
                      >123 Lucky Street, San Francisco, CA 94103, USA</span
                    >
                  </div> -->
                </div>
              </div>
            </section>

            <!-- {/* Footer */} -->
            <section class="border-t border-gray-200 pt-8">
              <div class="text-center">
                <p class="text-gray-600 mb-4">
                  By using Estrai.me, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and
                  Conditions.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [],
})
export default class TermsComponent {}
