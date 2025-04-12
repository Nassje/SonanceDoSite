import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-green-600 mb-8 hover:text-green-700 transition-colors">
          <i className="fas fa-arrow-left mr-2"></i> Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto prose prose-green">
          <h1>Privacy Policy for SonanceDo</h1>
          <p><strong>Last Updated: April 12, 2025</strong></p>
          
          <h2>Introduction</h2>
          <p>
            Naser Harif ("I", "me", or "my") respects your privacy and is committed to protecting it 
            through compliance with this policy. This Privacy Policy describes how your personal information 
            is collected, used, and shared when you use the SonanceDo application ("App").
          </p>
          
          <h2>Information We Collect</h2>
          
          <h3>Information You Provide</h3>
          <p>When using SonanceDo, you may provide the following types of information:</p>
          <ul>
            <li>Task Information: Task titles, descriptions, due dates, categories, priorities, and notes.</li>
            <li>Speech Data: Voice recordings that are processed for transcription when using the voice input feature.</li>
            <li>App Settings: Your preferences such as selected language, accent color, and notification settings.</li>
          </ul>
          
          <h3>Information Collected Automatically</h3>
          <p>We may automatically collect certain information when you use the App:</p>
          <ul>
            <li>Usage Data: Information about how you use the App, including task creation patterns and feature usage statistics.</li>
            <li>Device Information: Device type, operating system version, and device identifiers.</li>
          </ul>
          
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve the App</li>
            <li>Create, manage, and organize your tasks</li>
            <li>Process your voice inputs into text for task creation</li>
            <li>Send notifications about your tasks</li>
            <li>Respond to your requests or inquiries</li>
            <li>Develop new features and improvements</li>
          </ul>
          
          <h2>Data Storage</h2>
          
          <h3>Local Storage</h3>
          <p>SonanceDo primarily stores your information locally on your device using secure iOS storage mechanisms:</p>
          <ul>
            <li>Task data is stored using SwiftData</li>
            <li>App settings are stored using UserDefaults</li>
            <li>Voice recordings are processed locally and then deleted once transcription is complete</li>
          </ul>
          
          <h3>Third-Party Services</h3>
          <p>The App uses the following third-party services:</p>
          <ul>
            <li>
              OpenAI API: When you use voice input features, your speech is transcribed locally and the
              resulting text may be sent to OpenAI's API for natural language processing to identify tasks,
              dates, priorities, and categories. The OpenAI API processes this text according to their
              privacy policy available at <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">
                https://openai.com/policies/privacy-policy
              </a>.
            </li>
          </ul>
          
          <h2>Data Sharing and Disclosure</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to outside parties except as
            specifically described in this policy. We may share information in the following situations:
          </p>
          <ul>
            <li>Service Providers: With third-party service providers that perform services on our behalf (like OpenAI for natural language processing of text).</li>
            <li>Legal Requirements: When required by law or in response to valid requests from public authorities.</li>
            <li>Business Transfers: In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
            <li>With Your Consent: In other ways described to you at the time of collection or with your consent.</li>
          </ul>
          
          <h2>Your Privacy Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information:</p>
          <ul>
            <li>Access: You can request access to the data we hold about you.</li>
            <li>Correction: You can request that we correct inaccurate or incomplete information.</li>
            <li>Deletion: You can request that we delete your personal information.</li>
            <li>Data Portability: You can request a copy of the information we have in a structured, machine-readable format.</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided at the end of this policy.</p>
          
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against
            unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of
            transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h2>Children's Privacy</h2>
          <p>
            The App is not intended for children under 13 years of age, and we do not knowingly collect personal
            information from children under 13. If we learn we have collected personal information from a child
            under 13, we will delete that information.
          </p>
          
          <h2>Your Choices</h2>
          
          <h3>Permissions</h3>
          <p>The App requests the following permissions:</p>
          <ul>
            <li>Microphone Access: Required for voice input features. You can enable or disable microphone access in your device settings.</li>
            <li>Speech Recognition: Required for transcribing voice to text. You can manage this permission in your device settings.</li>
            <li>Notification Access: Required for task reminders. You can manage notification settings both in the App and in your device settings.</li>
          </ul>
          
          <h3>App Settings</h3>
          <p>You can manage various privacy-related settings within the App:</p>
          <ul>
            <li>Change or disable your preferred language for speech recognition</li>
            <li>Control when and how notifications are sent</li>
            <li>Delete task data within the app</li>
          </ul>
          
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by an
            updated "Last Updated" date, and the updated version will be effective as soon as it is accessible.
            We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.
          </p>
          
          <h2>Contact Information</h2>
          <p>If you have questions or concerns about this Privacy Policy, please contact me at:</p>
          <p>
            Naser Harif<br />
            Email: N.Harif@Outlook.com<br />
            Website: SonanceDo.com
          </p>
          
          <h2>App Store Information</h2>
          <p>
            SonanceDo is available on the Apple App Store. When downloading the App through the App Store,
            Apple may collect and share certain information with us as the developer. The information shared by
            Apple with us is subject to Apple's Privacy Policy, which can be found at
            <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
              https://www.apple.com/legal/privacy/
            </a>.
          </p>
          
          <h2>Compliance with Apple Guidelines</h2>
          <p>This App complies with Apple's App Store Review Guidelines regarding privacy, including:</p>
          <ul>
            <li>Requesting only the data and permissions that are necessary for the functioning of the App</li>
            <li>Providing clear explanations of how data is used</li>
            <li>Storing and processing data securely</li>
            <li>Providing this privacy policy that accurately describes our data collection and use</li>
          </ul>
        </div>
      </div>
    </div>
  );
}