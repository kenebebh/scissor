import { motion } from "framer-motion";
import { Link } from "react-scroll";
import NavLogo from "../images/Logo.png";

const Navigation = () => {
  return (
    <header className="glass w-full  py-1 font-medium flex items-center justify-between bg-gradient-to-r from-blue-50 to-white fixed backdrop:blur z-10 ">
      <div className="w-full flex justify-around items-center">
        <nav>
          <Link to="myurls">
            <img src={NavLogo} alt="logo" />
          </Link>
        </nav>

        <nav>
          <Link
            to="myurls"
            smooth={true}
            spy={true}
            offset={-100}
            duration={500}
            className="mr-4 text-blue-500"
          >
            {" "}
            My URLs{" "}
          </Link>
          <Link
            to="barcode"
            smooth={true}
            spy={true}
            offset={-50}
            duration={500}
            className="mx-4 font-bold"
          >
            Barcode
          </Link>
          <Link
            to="pricing"
            smooth={true}
            spy={true}
            offset={-50}
            duration={500}
            className="mx-4 font-bold"
          >
            Pricing
          </Link>
          <Link
            to="urlshort"
            smooth={true}
            spy={true}
            offset={-50}
            duration={500}
            className="mx-4 font-bold"
          >
            Url Shortner
          </Link>
          <Link
            to="faqs"
            smooth={true}
            spy={true}
            offset={-50}
            duration={500}
            className="mx-4 font-bold"
          >
            FAQs
          </Link>
        </nav>

        <nav>
          <Link
            to="login"
            smooth={true}
            spy={true}
            offset={-50}
            duration={500}
            className="text-blue-500 mr-2"
          >
            Log in
          </Link>
<Link to="register" smooth={true}
            spy={true}
            offset={-50}
            duration={500}>

          <motion.button
            className="ml-2 mr-1 rounded-full border border-primaryBlue py-2.5 px-6  text-white bg-primaryBlue hover:bg-white hover:text-primaryBlue text-sm font-medium"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
          >
            Sign up
          </motion.button>
</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
