const Hero = (props) => {

  return (
    <>
      <section>
        <img src="/img/casscon-logo.png" alt="casscon plumbing and gas" />
        <h1 className="sr-only">Casscon Plumbing and Gas</h1>
        <img src="/img/tap.jpg" alt="" />
        <ul>
          {props.bulletpoints.map((bullet, i) => {
            return <li key={i}>{bullet.bulletpoint}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default Hero;
