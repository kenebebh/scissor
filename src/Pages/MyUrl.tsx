import TextAnimate from "../Components/TextAnimate";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import image1 from "../images/Ellipse 1.png";

const MyUrls = () => {
  return (
    <main
      id="myurls"
      className="mt-32 w-full flex flex-col items-center self-center"
    >
      {/* <div></div> */}
      <TextAnimate
        text="Optimize Your Online Experience With Our Advance Url Shortening Solution."
        className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl "
      />
      <p className="my-6 text-lg font-medium w-[781px]">
        Personalize your shortened URLs to align with your brand identity.
        Utilize custom slugs, branded links, and domain customization options to
        reinforce your brand presence and enhance user engagement.
      </p>
      <div className="flex items-center m-3">
        <Link
          to="register"
          smooth={true}
          spy={true}
          offset={-50}
          duration={500}
        >
          <motion.button
            className="rounded-full  border border-primaryBlue py-2.5 px-8  text-white focus:outline-none focus:z-10 bg-primaryBlue mr-4 text-md font-medium hover:text-blue-500 hover:bg-white"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
          >
            Sign up
          </motion.button>
        </Link>
        <Link to="/LearnMore" className="text-primaryBlueBase text-md ">
          Learn more
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center box-border  border border-blue-400  rounded-xl mt-24 py-10 px-16 max-w-600 h-56 w-[504px]  top-96 backdrop-blur-3xl">
        {/* <div>
                 
                </div>         */}
        <div className="flex justify-center items-center">
          <Icon
            icon="iconamoon:link-thin"
            color="#cacaca"
            height="80"
            className="!text-gray-900 top-12"
          />
          <Icon
            icon="iconamoon:link-thin"
            color="#cacaca"
            height="80"
            className="!text-gray-900 top-12"
          />
          <Icon
            icon="iconamoon:link-thin"
            color="#cacaca"
            height="80"
            className="!text-gray-900 top-12"
          />

          <div className="text-4xl items-baseline">&rarr;</div>

          <Icon
            icon="iconamoon:link-thin"
            color="#cacaca"
            height="80"
            className="!text-gray-900 top-12"
          />
        </div>

        <div>
          <p className="text-center">
            Seamlessly transform your long URLs into concise and shareable links
            with just few clicks.
          </p>
        </div>
      </div>

      <div className="">
        <img
          src={image1}
          alt={"Ellipse"}
          className="w-[900px] h-[93px] relative  left-[30px] top-[10px] mt-20 "
        />
      </div>

      <div className="box bg-green-500 mt-40">
        <div className="frame-wrapper">
          <div className="frame">
            <div className="one-stop-four-wrapper">
              <h1 className="one-stop-four">
                <span className="text-wrapper">One Stop.Four</span>
                <span className="span"> Possibilities</span>
                <span className="text-wrapper-2">.</span>
              </h1>
            </div>
            <div className="div">
              <div className="frame-2">
                <div className="frame-3">
                  <div className="text-wrapper-3">3M</div>
                  <div className="text-wrapper-4">Active users</div>
                </div>
                <div className="frame-4">
                  <div className="text-wrapper-5">60M</div>
                  <p className="links-QR-codes">Links &amp; QR codes created</p>
                </div>
              </div>
              <div className="frame-5">
                <div className="div-wrapper">
                  <div className="frame-6">
                    <div className="frame-7">
                      <div className="text-wrapper-6">1B</div>
                      <div className="clicked-scanned">
                        Clicked &amp; Scanned connections
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-8">
                  <div className="text-wrapper-7">300k</div>
                  <div className="text-wrapper-8">App Integrations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-x-24 mt-20">
        <div className="basis-1/3 flex flex-col gap-4 items-end ">
          <h1 className="text-4xl font-semibold self-start">
            Why choose <span className="text-blue-600">Scissors</span>
          </h1>
          <p className="text-base w-auto h-[192px]">
            Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advance analytics for all of
            these is second to none.
          </p>
        </div>

        <div className="basis-2/3 grid grid-cols-2 grid-rows-2 gap-x-8">
          <div className="flex flex-col gap-4 items-center">
            <h1 className=" text-4xl font-semibold self-start">
              URL Shortening
            </h1>
            <p className="flex-col text-base">
              Scissor allows you to shorten URLs of your business, events.
              Shorten your URL at scale, URL redirects.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <h1 className=" text-4xl font-semibold self-start">Custom URLs</h1>
            <p className="flex-col text-base">
              With Scissor, you can create custom URLs, with the length you
              want! A solution for socials and businesses.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <h1 className=" text-4xl font-semibold self-start">QR Codes</h1>
            <p className="flex-col text-base">
              Generate QR codes to your business, events. Bring your audience
              and customers to your doorstep with this scan and go solution.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <h1 className=" text-4xl font-semibold self-start">
              Data Analytics
            </h1>
            <p className="flex-col text-base">
              Receive data on the usage of either your shortened URL, custom
              URLs or generated QR codes. Embedded to monitor progress.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyUrls;
