import client from "../utils/client";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

import { gql } from "@apollo/client";
import { stripIgnoredCharacters } from "graphql";

const About = (props) => {
  return (
    <>
      <section id='about'>
        <div dangerouslySetInnerHTML={{ __html: props.aboutContent }}></div>
      </section>
    </>
  );
};

export default About;
