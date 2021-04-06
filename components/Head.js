import Head from "next/head";

const SiteHead = props => {
  return (
    <Head>
      <title>{props.pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SiteHead;