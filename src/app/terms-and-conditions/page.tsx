import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Terms and Conditions | SHREEM Sewing Machine Co.',
  description: 'Terms for using the SHREEM Sewing Machine Co. website and its product information.',
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout title="Terms & Conditions">
      <section aria-labelledby="acceptance">
        <h2 id="acceptance" className="mb-2 text-xl font-bold text-white">
          Using this website
        </h2>
        <p>
          These terms apply when you access shreemsewingmachine.com. By using the website, you agree
          to use it lawfully and not to disrupt, damage, or attempt to gain unauthorized access to
          it.
        </p>
      </section>

      <section aria-labelledby="product-information">
        <h2 id="product-information" className="mb-2 text-xl font-bold text-white">
          Product information and enquiries
        </h2>
        <p>
          Product descriptions, photographs, specifications, prices, and availability shown on the
          website are provided for general information and may change. Please contact or visit our
          Rajkot showroom to confirm current details before making a purchase or arranging service.
          The website does not provide online checkout or accept online payments.
        </p>
        <p className="mt-3">
          Any purchase, repair, or other service arrangement is confirmed separately with SHREEM
          SEWING MACHINE CO. in the applicable quotation, invoice, or service documentation.
        </p>
      </section>

      <section aria-labelledby="warranties">
        <h2 id="warranties" className="mb-2 text-xl font-bold text-white">
          Warranties and consumer rights
        </h2>
        <p>
          Manufacturer warranties, where applicable, are subject to the manufacturer&apos;s terms.
          Nothing in these website terms limits any consumer rights or other protections that
          cannot be excluded under applicable law.
        </p>
      </section>

      <section aria-labelledby="third-party-links">
        <h2 id="third-party-links" className="mb-2 text-xl font-bold text-white">
          Third-party links and services
        </h2>
        <p>
          The website may link to or embed third-party services, including Google Maps, WhatsApp,
          and Instagram. Those services are operated independently and are subject to their own
          terms and privacy policies.
        </p>
      </section>

      <section aria-labelledby="availability">
        <h2 id="availability" className="mb-2 text-xl font-bold text-white">
          Website availability and changes
        </h2>
        <p>
          We aim to keep website information useful and up to date, but do not guarantee that the
          website will always be available or free from errors. We may update website content or
          these terms from time to time. The latest version will be posted on this page.
        </p>
      </section>

      <section aria-labelledby="terms-contact">
        <h2 id="terms-contact" className="mb-2 text-xl font-bold text-white">
          Contact us
        </h2>
        <p>
          For questions about these terms, contact SHREEM SEWING MACHINE CO. at
          Shreemsewingmachineco@gmail.com or +91 95587 00774.
        </p>
      </section>
    </LegalPageLayout>
  );
}
