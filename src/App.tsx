import React from "react";
import "./App.css";
import UrlShortner from "./Components/UrlShortner";
import Barcode from "./Components/Barcode";
import Login from "./Pages/Login";
import Pricing from "./Components/Pricing";
import Register from "./Pages/Register";
import MyUrl from "./Pages/MyUrl"
import Navigation from "./Navbar/Navigation";
import Faqs from "./Components/Faqs"; 
import {ReactComponent as Logo1 } from "./images/svg.feather.svg"
import { ReactComponent as Logo2 } from "./images/i.fi-social-twitter.svg"
import {ReactComponent as Logo3 } from "./images/i.fi-social-linkedin.svg"
import {ReactComponent as Logo4 } from "./images/i.fi-social-facebook.svg"
import {ReactComponent as Vector} from "./images/Vector.svg"
import {ReactComponent as Vector2} from "./images/Vector 2.svg"
 
function App() {
  return (
    <>
      {/* <div className="App">
        <header></header>
        <h1 className="text-3xl font-bold underline">URL SHORTNER</h1>
      </div> */}

      <section>
        <div>
          <Navigation />
        </div>
      </section>

      <section>
        <div id="myurls" className="box-border h-90 w-100 p-4 border-3 bg-white-400 m8 box-content">
          <MyUrl />
        </div>
      </section>

      <section className=" flex justify-center flex flex-col items-center">
        <div className="box-border h-90 w-100 p-4 border-4 bg-white-400 m8 box-content">
          < Pricing />
        </div>
      </section>

      <section id="urlshort" className=" items-center h-screen flex justify-center bg-sky-300 via-slate-500 to-slate-600">
        <div className="box-border h-90 w-100 p-4 border-4 bg-white-400 m8 box-content">
          <UrlShortner />
        </div>
      </section>

      <section className="bg-cyan-400" id="barcode">
        <div className="box-border h-90 w-100 p-4 border-3 bg-white-400 m8 box-content">
          <Barcode />
        </div>
      </section>

      <section className="bg-sky-300" id="login">
        <div className="box-border h-90 w-100 p-4 border-3 bg-white-400 m8 box-content">
          <Login />
        </div>
      </section>

      <section className="bg-blue-200">

        <div className="box-border h-90 w-100 p-4 border-3 bg-white-400 m8 box-content" id="register">
          <Register />
        </div>
      </section>

      <section className="bg-blue-600">
        <div id="faqs" className="box-border h-90 w-100 p-4 border-3 bg-white-400 m8 box-content">
          <Faqs />  
        </div>
      </section>

      <footer className="box-border h-90 w-100 p-4 border-3 bg-white-400 m8 box-content">

      <section className="box-border h-90 w-100 p-4 border-3 bg-white-400 m8 box-content">


      <div className="w-[1440px] h-[561px] relative bg-white box-content m8 border-3 box-border">
  <div className="left-[426px] top-[95px] absolute justify-start items-start gap-6 inline-flex">
    <div className="flex-col justify-start items-start gap-14 inline-flex">
      <div className="px-6 flex-col justify-start items-start gap-2 flex">
        <div className="text-slate-900 text-[16px] font-bold leading-normal">Why Scissor ?</div>
        <div className="justify-start items-start inline-flex">
          <div className="text-slate-900 text-[16px] font-normal leading-normal">Scissor 101<br/>Integrations & API<br/>Pricing</div>
        </div>
      </div>
      <div className="px-6 flex-col justify-start items-start gap-2 flex">
        <div className="text-slate-900 text-[16px] font-bold leading-normal">Resources</div>
        <div className="justify-start items-start inline-flex">
          <div className="text-slate-900 text-[16px] font-normal leading-normal">Blog<br/>Resource Library<br/>Developers<br/>App Connectors<br/>Support<br/>Trust Center<br/>Browser Extension<br/>Mobile App</div>
        </div>
      </div>
    </div>
    <div className="flex-col justify-start items-start gap-[31px] inline-flex">
      <div className="px-6 flex-col justify-start items-start gap-2 flex">
        <div className="text-slate-900 text-[16px] font-bold leading-normal">Solutions</div>
        <div className="justify-start items-start inline-flex">
          <div className="text-slate-900 text-[16px] font-normal leading-normal">Social Media<br/>Digital Marketing<br/>Customer Service<br/>For Developers</div>
        </div>
      </div>
      <div className="px-6 flex-col justify-start items-start gap-2 flex">
        <div className="text-slate-900 text-[16px] font-bold leading-normal">Features</div>
        <div className="justify-start items-center inline-flex">
          <div className="text-slate-900 text-[16px] font-normal leading-normal">Branded Links<br/>Mobile Links<br/>Campaign<br/>Management &<br/>Analytics<br/>QR Code generation</div>
        </div>
      </div>
    </div>
    <div className="flex-col justify-start items-start gap-14 inline-flex">
      <div className="px-6 flex-col justify-start items-start gap-2 flex">
        <div className="text-slate-900 text-[16px] font-bold leading-normal">Products</div>
        <div className="justify-start items-start inline-flex">
          <div className="text-slate-900 text-[16px] font-normal leading-normal">Link Management<br/>QR Codes<br/>Link-in-bio</div>
        </div>
      </div>
      <div className="px-6 flex-col justify-start items-start gap-2 flex">
        <div className="text-slate-900 text-[16px] font-bold leading-normal">Legal</div>
        <div className="justify-start items-start inline-flex">
          <div className="text-slate-900 text-[16px] font-normal leading-normal">Privacy Policy<br/>Cookie Policy<br/>Terms of Service<br/>Acceptable Use Policy<br/>Code of Conduct</div>
        </div>
      </div>
    </div>
    <div className="px-6 flex-col justify-start items-start gap-2 inline-flex">
      <div className="w-[94px] h-5 text-slate-900 text-[16px] font-bold leading-normal">Company</div>
      <div className="justify-start items-start inline-flex">
        <div className="text-slate-900 text-[16px] font-normal leading-normal">About Scissor<br/>Careers<br/>Partners<br/>Press<br/>Contact<br/>Reviews</div>
      </div>
    </div>
  </div>
  <div className="left-[203px] top-[95px] absolute flex-col justify-start items-start gap-8 inline-flex">
    <div className="p-2 justify-start items-start gap-2 inline-flex">
      <div>
        <Vector className="w-[24px] h-[24px]" />
      </div>
      <div>
        <Vector2 className="w-[24px] h-[25px]" />       
      </div>
      <div className="w-[90px] h-6 text-neutral-900 text-[22px]  mb-4 font-bold leading-loose">SCISSOR</div>
    </div>
    <div className="px-2 justify-start items-start gap-6 inline-flex">
      <div className="w-6 h-6 relative">
        <Logo1 className="absolute w-6 h-6" />
      </div>
      <div className="w-6 h-6 relative">
        <Logo2 className="absolute w-6 h-6" />
      </div>
      <div className="w-6 h-6 relative">
        <Logo3 className="absolute w-6 h-6" />
      </div>
      <div className="w-6 h-6 relative">
        <Logo4 className="absolute w-6 h-6" />
      </div>
    </div>
  </div>
  <div className="origin-top-left rotate-[-7.59deg] opacity-70 w-[804.53px] h-[596.14px] left-[897px] top-[309.27px] absolute">
  </div>
  <div className="origin-top-left rotate-[110.54deg] opacity-80 w-[804.53px] h-[596.14px] left-[507.50px] top-[229.15px] absolute">
  </div>
  <div className="px-3 left-[1017px] top-[502px] absolute justify-center items-center gap-2 inline-flex">
    <div className="text-slate-900 text-[14px] font-normal leading-tight">Term of Service</div>
    <div className="text-slate-900 text-[14px] font-normal leading-tight">Security</div>
    <div className="text-slate-900 text-[14px] font-normal leading-tight">ⓒ Scissor 2023</div>
  </div>
</div>
      </section>
</footer>
    </>
  );
}

export default App;


