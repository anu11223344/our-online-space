# Inner Horizon typography, trust, contact, and copy refinement

## Scope
- Rework the site-wide typography and spacing so Alice is used only for H1–H3, while body copy, navigation, controls, and labels use Inter.
- Standardize the 1200px content grid, responsive section spacing, readable text measure, warm ivory/white/sage-tint surfaces, WCAG AA contrast, and compact equal-height cards with clear keyboard and hover states.
- Remove the blue-green gradients and replace them with restrained semantic surface treatments.

## Home page
- Keep the current two-column hero and update its typography to the requested responsive H1 scale and body rhythm.
- Add the exact credentials block beside the portrait: “Dr. Rajat K. Thukral / Registered Clinical Psychologist / RCI Registration No. A55242”.
- Add “What you can expect” immediately after the hero with the five supplied statements, presented as a concise, accessible trust section without adding claims.
- Refine nearby benefits and calls to action to avoid repetitive “healing”, “journey”, “transformation”, and “deeper understanding” language.

## Contact page
- Replace the current booking-step/card layout with one focused “Book a consultation” form.
- Include only: name, email or phone, preferred contact method, service of interest, online/in-person preference, optional brief message, and required privacy consent.
- Add client-side Zod validation, a hidden honeypot and minimum-completion-time spam check, one submit button, and visible loading/success/error states.
- Store validated enquiries securely with Lovable Cloud so the form has a real submission path; do not collect diagnosis, crisis details, or clinical history.
- Keep tap-to-call and tap-to-email links and a concise non-urgent-care notice.

## Footer and policy access
- Add working links for Privacy Policy, Terms, Accessibility, and Crisis Support.
- Create concise branded pages for those links so none are dead; keep statements limited to the site’s actual contact-form behavior and supplied practice information.
- Shorten and visually separate the crisis disclaimer from booking calls to action while retaining the existing India helplines.

## Copy and terminology pass
- Replace “Corporate Therapy” with “Workplace Mental Health” or “Organisational Wellbeing” according to context.
- Use “Services” consistently in navigation and page labels; do not use “Therapy Services”.
- Preserve “Internal Family Systems (IFS) Informed” exactly.
- Hyphenate “evidence-based” and “depth-oriented”, remove stray ellipses/placeholders, remove emoji headings, and avoid unsupported credentials, affiliations, ratings, reviews, and other claims.

## Technical details
- Define typography, color, focus, spacing, and shadow roles as semantic tokens in the global design system and Tailwind configuration.
- Add shared page-width/section-spacing patterns and update existing pages and cards to use them consistently.
- Add a Cloud migration for consultation enquiries with explicit grants, row-level security, field length checks, and no public read access; submissions will go through a validated server-side function.
- Add routes for the four footer resources and update route-aware navigation/footer behavior.
- Verify build diagnostics, keyboard focus, form validation/submission states, copy rules, and responsive rendering at 390px, 768px, and 1440px.
