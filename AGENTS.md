# Architecture rules
- Store workshop content and schedule/refund rules in `src/data/events.ts`; listing, detail pages, and Event structured data consume it to keep event facts consistent.
- Use the existing SEO component for new route metadata and maintain public route discovery in `public/sitemap.xml`; client-rendered metadata is not server-rendered social preview support.
- Event posters are optional until supplied; never substitute an unrelated image or invented poster for a requested uploaded asset.
- Serve workshop posters as files in `public/` referenced by absolute www.innerhorizon.in URLs, so shared links and images carry only the practice domain.
- Consultation notifications use the managed email helper from the dedicated submission function with a fixed practice recipient; success requires both saving and accepted email sending, so failed notifications never appear successful.