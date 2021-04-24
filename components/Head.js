import Head from "next/head";
import MetaJson from './ldjson'

const SiteHead = props => {
  return (
    <Head>
      <title>{props.pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <MetaJson />
    </Head>
  )
};

export default SiteHead;