# Architecture rules
- Store workshop content and schedule/refund rules in `src/data/events.ts`; listing, detail pages, and Event structured data consume it to keep event facts consistent.
- Use the existing SEO component for new route metadata and maintain public route discovery in `public/sitemap.xml`; client-rendered metadata is not server-rendered social preview support.
- Event posters are optional until supplied; never substitute an unrelated image or invented poster for a requested uploaded asset.
- Resolve workshop CDN asset pointers against the published Lovable origin so images also load on custom domains and in local preview.
- Consultation notifications use the managed email helper from the dedicated submission function with a fixed practice recipient; success requires both saving and accepted email sending, so failed notifications never appear successful.