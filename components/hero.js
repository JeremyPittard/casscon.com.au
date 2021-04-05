const Hero = (props) => {
  console.log(props, "bullet-props");

  return (
    <>
      <img src="/img/casscon-logo.png" alt="casscon plumbing and gas" />
      <h1 className="sr-only">Casscon Plumbing and Gas</h1>
      <img src="/img/tap.jpg" alt="" />
        <ul>
        {props.bulletpoints.map(bullet => {
            return(
                <li>{bullet.bulletpoint}</li>
            )
        })}

        </ul>
    </>
  );
};

export default Hero;
