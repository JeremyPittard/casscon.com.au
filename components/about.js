import client from '../utils/client'
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

import { gql } from "@apollo/client";
import { stripIgnoredCharacters } from 'graphql';


const About = props =>{
  console.log(props, 'about props')
    return(
      <>
        <h1>About</h1>
      </>
    )

}


export default About;