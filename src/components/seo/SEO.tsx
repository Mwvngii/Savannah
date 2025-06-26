import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  article?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = "Savannah Mabati - Kenya's leading supplier of premium metal roofing solutions. Roman tiles, box profiles, corrugated sheets, and more with nationwide delivery.",
  keywords = "mabati, metal roofing, Kenya, Roman tiles, box profile, corrugated sheets, roofing materials, Nairobi, Mombasa, Kisumu",
  image = "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
  article = false
}) => {
  const location = useLocation();
  const siteUrl = 'https://savannahmabati.co.ke';
  const currentUrl = `${siteUrl}${location.pathname}`;
  
  const siteTitle = 'Savannah Mabati - Premium Metal Roofing Solutions';
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Savannah Mabati" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:site_name" content="Savannah Mabati" />
      <meta property="og:locale" content="en_KE" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@SavannahMabati" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#16a34a" />
      <meta name="msapplication-TileColor" content="#16a34a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Savannah Mabati" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Savannah Mabati",
          "description": description,
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+254701314956",
            "contactType": "customer service",
            "areaServed": "KE",
            "availableLanguage": ["English", "Swahili"]
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kamakis, Eastern Bypass Highway, Near Total Petrol Station",
            "addressLocality": "Nairobi",
            "addressCountry": "KE"
          },
          "sameAs": [
            "https://facebook.com/savannahmabati",
            "https://instagram.com/savannahmabati",
            "https://twitter.com/savannahmabati"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;