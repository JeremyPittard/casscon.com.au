import { LocalBusiness } from "schema-dts";
import { JsonLd, jsonLdScriptProps } from "react-schemaorg";

const MetaJson = (props) => {

  return (
      <>
        <script
        {...jsonLdScriptProps<LocalBusiness>({
          "@context": "https://schema.org",
          "@type": "Plumber",
          name: "Casscon Plumbing and Gas",
          image: "http://casscon.com.au/wp-content/themes/casscon/images/logobar.png",
          "@id": "https://casscon.com.au",
          url: "https://casscon.com.au",
          telephone: "0435035561",
          priceRange: "0-100",
          address: {
          "@type": "PostalAddress",
          streetAddress: "",
          addressLocality: "Perth",
          addressRegion: "WA",
          postalCode: "6026",
          addressCountry: "AU",
          },
          sameAs: "https://www.facebook.com/CassconWA/",
          knowsAbout: ['Hot water', 'Plumbing', 'Bathroom Renovations', 'Gas Installations']
        })}
      />
    </>
  )
};

export default MetaJson; 
