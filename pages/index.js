import Nav from '../components/Nav'
import About from '../components/about'
import Hero from '../components/Hero';
import SiteHead from '../components/Head'
import Cards from '../components/Cards'
import client from '../utils/client'
import { gql } from "@apollo/client";
import Footer from '../components/footer';
import Contact from '../components/Contact';
import { Testimonials } from '../components/testimonials';

export default function Home(results) {
  return (
    <div>
      <SiteHead />
      <Nav />
      <h1>casscon</h1>
      <Hero {...results.bulletpoints} />
      {/* <Testimonials /> */}
      <About {...results.about}/>
      <Contact {...results.cassconSettings}/>
      <Cards {...results.services} cardType={'plumbing'} />
      <Cards {...results.services} cardType={'gas'} />
      <Cards {...results.services} cardType={'other'} />
      <Footer {...results.cassconSettings} />
    </div>
  )
}

export async function getStaticProps() {

  const { data } = await client.query({
    query: gql`
      query {
        bulletpoints_post(id: "cG9zdDoxOA==") {
          id
          bulletpoints {
            bulletpoints {
              bulletpoint
              fieldGroupName
            }
          }
        }
        about_post(id: "cG9zdDoyNQ==") {
          about {
            aboutContent
            fieldGroupName
            title
          }
        }
        services {
          nodes {
            services {
              services {
                fieldGroupName
                serviceDescription
                serviceName
                serviceType
                icon {
                  id
                  sourceUrl
                }
              }
            }
          }
        }
        cassconSettings {
          casscon {
            abn
            contactEmail
            contactNumber
            facebookPage
            gasFitterLicense
            instagram
            pageTitle
            plumbingLicense
            siteName
            twitterLink
          }
        }
      }
    `,
  });

  return {
    props: {
      about: data.about_post.about,
      bulletpoints: data.bulletpoints_post.bulletpoints,
      services: data.services.nodes[0].services,
      cassconSettings: data.cassconSettings.casscon,
    },
  };

}
