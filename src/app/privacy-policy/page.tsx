import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy | SHREEM Sewing Machine Co.',
  description: 'Learn how SHREEM Sewing Machine Co. handles information when you visit our website or contact us.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <section aria-labelledby="privacy-intro">
        <h2 id="privacy-intro" className="mb-2 text-xl font-bold text-white">
          About this policy
        </h2>
        <p>
          This policy explains how SHREEM SEWING MACHINE CO. handles information when you visit
          shreemsewingmachine.com or contact our Rajkot showroom.
        </p>
      </section>

      <section aria-labelledby="information-we-handle">
        <h2 id="information-we-handle" className="mb-2 text-xl font-bold text-white">
          Information we handle
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            If you contact us by phone, email, WhatsApp, or Instagram, we receive the details you
            choose to share, such as your name, contact information, and inquiry.
          </li>
          <li>
            Our hosting and infrastructure providers may process technical information, such as
            your IP address, browser or device details, and request logs, to operate and protect
            the website.
          </li>
        </ul>
        <p className="mt-3">
          This website does not currently provide user accounts, contact forms, online checkout, or
          online payment fields. Please do not send payment-card details through the website or
          ordinary email.
        </p>
      </section>

      <section aria-labelledby="how-we-use-information">
        <h2 id="how-we-use-information" className="mb-2 text-xl font-bold text-white">
          How we use information
        </h2>
        <p>
          We use information you provide to respond to questions, discuss products or services you
          request, and communicate with you. Technical information may be used by our service
          providers to maintain the website, help protect it from misuse, and troubleshoot problems.
        </p>
      </section>

      <section aria-labelledby="third-party-services">
        <h2 id="third-party-services" className="mb-2 text-xl font-bold text-white">
          Third-party services
        </h2>
        <p>
          The website includes a Google Maps embed and links to services such as WhatsApp and
          Instagram. If you load or use those features, the relevant provider may receive
          information from your browser and handle it under its own privacy policy. We do not
          control those providers&apos; data practices.
        </p>
      </section>

      <section aria-labelledby="cookies">
        <h2 id="cookies" className="mb-2 text-xl font-bold text-white">
          Cookies and similar technologies
        </h2>
        <p>
          Embedded third-party services may use cookies or similar technologies under their own
          policies. You can manage cookies through your browser settings; blocking them may affect
          embedded features such as the map.
        </p>
      </section>

      <section aria-labelledby="sharing-retention">
        <h2 id="sharing-retention" className="mb-2 text-xl font-bold text-white">
          Sharing and retention
        </h2>
        <p>
          We do not sell information you provide to us through direct contact. We may share it with
          service providers when needed to operate the website or respond to your request, or when
          required by law. We keep information only for as long as reasonably needed for those
          purposes or to meet legal obligations.
        </p>
      </section>

      <section aria-labelledby="your-choices">
        <h2 id="your-choices" className="mb-2 text-xl font-bold text-white">
          Your choices and questions
        </h2>
        <p>
          You can choose not to contact us or not to provide information. If you have a question or
          would like to request access to, correction of, or deletion of information you shared
          with us, use the contact details below, subject to applicable law.
        </p>
      </section>

      <section aria-labelledby="privacy-contact">
        <h2 id="privacy-contact" className="mb-2 text-xl font-bold text-white">
          Contact us
        </h2>
        <p>
          SHREEM SEWING MACHINE CO., Shop No. 150, 1st Floor, Shiromani Complex, Bhupendra Road,
          Diwanpara, Rajkot, Gujarat 360001, India.
        </p>
      </section>
    </LegalPageLayout>
  );
}
