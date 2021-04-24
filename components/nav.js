import helpers from "../utils/helpers";

const Nav = props => {
  console.log(props)
  return (
    <nav className="container mx-auto flex justify-between">
        <div>
          <img src="/img/casscon-logo.png" alt="casscon plumbing and gas" />
        </div>
      <ul className="md:flex items-center text-xl font-headings hidden">
        <li className="mx-4">
          <a
            href="#about"
            onClick={(e, destination) => helpers.smoothScroll(e, "#about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e, destination) => helpers.smoothScroll(e, "#contact")}
          >
            Contact
          </a>
        </li>
        <li className="mx-4">
          <a
            href="#reviews"
            onClick={(e, destination) => helpers.smoothScroll(e, "#reviews")}
          >
            Reviews
          </a>
        </li>
        <li className="mx-4">
          <a
            href="#plumbing-services"
            onClick={(e, destination) =>
              helpers.smoothScroll(e, "#plumbing-services")
            }
          >
            Plumbing
          </a>
        </li>
        <li className="mx-4">
          <a
            href="#gas-services"
            onClick={(e, destination) =>
              helpers.smoothScroll(e, "#gas-services")
            }
          >
            Gas
          </a>
        </li>
        <li className="mx-4">
          <a
            href="#other-services"
            onClick={(e, destination) =>
              helpers.smoothScroll(e, "#other-services")
            }
          >
            Other Services
          </a>
        </li>
        <li class="mr-4"><a href={`tel:${props.contactNumber}`} class="dark bg-casscon-blue text-casscon-white py-2 px-4 rounded-md">Call Now!</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
