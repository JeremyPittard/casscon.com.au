import helpers from "../utils/helpers";

const Nav = () => {
  return (
    <nav className="container mx-auto">
      <ul className="flex items-center text-2xl font-headings">
        <li>
          <img src="/img/casscon-logo.png" alt="casscon plumbing and gas" />
        </li>
        <li>
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
        <li>
          <a
            href="#reviews"
            onClick={(e, destination) => helpers.smoothScroll(e, "#reviews")}
          >
            Reviews
          </a>
        </li>
        <li>
          <a
            href="#plumbing-services"
            onClick={(e, destination) =>
              helpers.smoothScroll(e, "#plumbing-services")
            }
          >
            Plumbing
          </a>
        </li>
        <li>
          <a
            href="#gas-services"
            onClick={(e, destination) =>
              helpers.smoothScroll(e, "#gas-services")
            }
          >
            Gas
          </a>
        </li>
        <li>
          <a
            href="#other-services"
            onClick={(e, destination) =>
              helpers.smoothScroll(e, "#other-services")
            }
          >
            Other Services
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
