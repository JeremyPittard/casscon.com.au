import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

export async function getStaticProps() {
  return {
    props: {
      launches: []
    }
  }
}
