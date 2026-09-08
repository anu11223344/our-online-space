import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

type LegalPageProps = {
  title: string;
  intro: string;
  children: React.ReactNode;
};

export const LegalPage = ({ title, intro, children }: LegalPageProps) => (
  <main className="page-section min-h-[65vh] bg-background">
    <article className="site-container max-w-3xl">
      <h1 className="page-title mb-6">{title}</h1>
      <p className="measure text-lg text-foreground/80">{intro}</p>
      <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/80">{children}</div>
      <Link className="mt-10 inline-block font-medium text-primary underline underline-offset-4 focus-ring" to="/contact">
        Book a consultation
      </Link>
    </article>
  </main>
);

export const Privacy = () => (
  <>
    <SEO title="Privacy Policy | Inner Horizon" description="Inner Horizon's Privacy Policy explains what information is collected when you make a consultation enquiry and how it is handled." canonical="https://www.innerhorizon.in/privacy" />
    <LegalPage title="Privacy Policy" intro="Inner Horizon collects only the information you choose to share when making a consultation enquiry.">
    <section><h2 className="section-title-sm mb-3">Information collected</h2><p>Name, contact details, contact preference, service interest, session preference, and an optional brief message are used to respond to your enquiry.</p></section>
    <section><h2 className="section-title-sm mb-3">How it is handled</h2><p>Enquiries are stored securely so Dr. Rajat K. Thukral can respond. Please do not include diagnosis, crisis details, or clinical history in the message field.</p></section>
    <section><h2 className="section-title-sm mb-3">Questions</h2><p>Email <a className="text-primary underline underline-offset-4" href="mailto:innerhorizoncare@gmail.com">innerhorizoncare@gmail.com</a> with a privacy question or request.</p></section>
  </LegalPage>
  </>
);

export const Terms = () => (
  <>
    <SEO title="Terms | Inner Horizon" description="Terms for using the Inner Horizon website and requesting a consultation with Dr. Rajat K. Thukral." canonical="https://www.innerhorizon.in/terms" />
    <LegalPage title="Terms" intro="This website provides general information about Inner Horizon and a way to request a consultation.">
    <section><h2 className="section-title-sm mb-3">Clinical care</h2><p>Using this website or sending an enquiry does not establish a therapeutic relationship. A first conversation is used to consider fit, with no obligation to continue.</p></section>
    <section><h2 className="section-title-sm mb-3">Appointments</h2><p>Fees are shared directly on enquiry. Cancellations require 24 hours’ notice or the session is charged in full.</p></section>
    <section><h2 className="section-title-sm mb-3">Urgent support</h2><p>This website is not monitored as an emergency or crisis service. Contact local emergency services when immediate help is needed.</p></section>
  </LegalPage>
  </>
);

export const Accessibility = () => (
  <>
    <SEO title="Accessibility | Inner Horizon" description="Inner Horizon's commitment to an accessible website and how to report a barrier." canonical="https://www.innerhorizon.in/accessibility" />
    <LegalPage title="Accessibility" intro="Inner Horizon aims to make this website clear, readable, keyboard accessible, and usable across common screen sizes.">
    <section><h2 className="section-title-sm mb-3">Support</h2><p>If you encounter an accessibility barrier, email <a className="text-primary underline underline-offset-4" href="mailto:innerhorizoncare@gmail.com">innerhorizoncare@gmail.com</a> or call <a className="text-primary underline underline-offset-4" href="tel:+919205500670">+91 92055 00670</a>.</p></section>
  </LegalPage>
  </>
);

export const CrisisSupport = () => (
  <>
    <SEO title="Crisis Support | Inner Horizon" description="Inner Horizon is not a crisis service. Find India-based mental health helplines and emergency guidance." canonical="https://www.innerhorizon.in/crisis-support" />
    <LegalPage title="Crisis Support" intro="Inner Horizon is not an emergency or crisis service. If there is immediate risk to safety, contact local emergency services.">
    <section><h2 className="section-title-sm mb-3">India-based helplines</h2><ul className="space-y-3"><li><strong>AASRA (24/7):</strong> 91-9820466726 or 91-22-27546669</li><li><strong>iCall (TISS):</strong> +91 9152987821, Monday–Saturday, 10 AM–8 PM</li><li><strong>Vandrevala Foundation:</strong> 1860 266 2345 or 9999 666 555</li></ul><p className="mt-4">Outside India, contact your local emergency or crisis service.</p></section>
  </LegalPage>
  </>
);