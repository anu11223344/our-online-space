import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  canonical: string;
  ogUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
};

export const SEO = ({
  title,
  description,
  canonical,
  ogUrl = canonical,
  ogTitle = title,
  ogDescription = description,
  twitterTitle = title,
  twitterDescription = description,
}: SEOProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta property="og:title" content={ogTitle} />
    <meta property="og:description" content={ogDescription} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={ogUrl} />
    <meta name="twitter:title" content={twitterTitle} />
    <meta name="twitter:description" content={twitterDescription} />
  </Helmet>
);
