import React from "react";
import RotatingGallery from "../components/RotatingGallery";
import rcgif from "../assets/img/theme release.gif";
import image1 from "../assets/img/icons/kindpng_91203.png";
import image2 from "../assets/img/icons/kindpng_97493.png";
import image3 from "../assets/img/icons/kindpng_799916.png";
import image4 from "../assets/img/icons/kindpng_3024028.png";
import "../assets/css/home.css";

function Home() {
  return (
    <>
      <div className={`container mx-auto bg-black bg-opacity-10 p-5 lg:w-3/4`}>
        <div className="text-center font-bold text-4xl text-box11">
          <h1 className="p-3 ">EXPERIENCE</h1>
          <h1 className="p-2 ">ROTARACT CLUB OF TCET</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-1 grid-cols-1 place-content-center ">
          <div className=" aspect-square w-5/6  mx-auto my-0">
            <img
              src={rcgif}
              alt=""
              className="lg:p-6 md:p-4 rounded-full h-full "
            />
          </div>
          <div className=" my-auto">
            <p className="p-6 newtextgen">
              At Rotaract Club of TCET, wellbeing is at the forefront of what
              we’re working together towards. Our programs and activities are
              designed to be a catalyst that helps community members reach their
              goals and fulfill their potential. Learn more about the positive
              impact we have and join us in bringing about positive change.
            </p>
            <p className="text-right p-2 endtext">
              -Chartered on 15th September 2017{" "}
            </p>
            <br />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="bg-regalblueby-400 px-16 w-fit p-5 text-white font-bold rounded-xl hover:bg-white hover:text-black shadow-aboutshadow hover:shadow-none transition ease-in-out delay-100">
            ABOUT AS
          </p>
        </div>
      </div>
      <div className="lg:w-3/4 container mx-auto text-center p-12">
        <img
          src="https://static.wixstatic.com/media/8f62ff_6070c543eb474e8f811ca37ce8038b85~mv2.png/v1/fill/w_437,h_312,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ThemeLogo_webp.png"
          alt=""
          className="mx-auto my-auto"
        />
        <h1 className="text-3xl font-extrabold p-9">RISE OF THE OLYMPIANS</h1>
        <p className="text-left">
          Just like how the mighty gods of Mount Olympus faced the challenges
          early in their lives and overcame them bravely and rose to glory, we
          at RCTCET aim to conquer all challenges that come our way and thrive
          towards betterment of ourselves and everyone around us. Growing
          together and pushing forth for what is just despite the implications
          is undoubtedly arduous, but it is vital. As RCTCET, we strive to work
          towards improvement, facing and overcoming obstacles, and rising to
          heights of Mount Olympus!
        </p>
      </div>
      <div className="container mx-auto lg:w-3/4 p-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          <div>
            <img
              src="https://static.wixstatic.com/media/8f62ff_a873d3cef7314fd0a63c365dd026ebbe~mv2.jpg/v1/fill/w_260,h_241,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f62ff_a873d3cef7314fd0a63c365dd026ebbe~mv2.jpg"
              alt=""
              className="hover:bg-slate-200 hover:bg-opacity-50 hover:opacity-50"
            />
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/8f62ff_637c0aca37254e95a4fe3579c1bf281c~mv2.png/v1/fill/w_260,h_241,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8f62ff_637c0aca37254e95a4fe3579c1bf281c~mv2.png"
              alt=""
              className="hover:bg-slate-200 hover:bg-opacity-50 hover:opacity-50"
            />
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/8f62ff_9c02c51091f34524a189c2887e96d5fa~mv2.jpg/v1/fill/w_260,h_241,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f62ff_9c02c51091f34524a189c2887e96d5fa~mv2.jpg"
              alt=""
              className="hover:bg-slate-200 hover:bg-opacity-50 hover:opacity-50"
            />
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/8f62ff_5529529e74d64df2bd1199790aab2ba9~mv2.jpg/v1/fill/w_260,h_241,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f62ff_5529529e74d64df2bd1199790aab2ba9~mv2.jpg"
              alt=""
              className="hover:bg-slate-200 hover:bg-opacity-50 hover:opacity-50"
            />
          </div>
        </div>
      </div>
      <div className=" p-12 text-center">
        <div>
          <h3 className="font-extrabold text-2xl mb-4">Our Resent Work</h3>
        </div>
        <RotatingGallery></RotatingGallery>
      </div>
      <div>
        <div className="">
          <h1 className="text-center text-3xl font-extrabold p-9 underline decoration-solid">
            FOUNDER
          </h1>
        </div>
        <div className="mb-10 border border-black rounded-lg container mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 lg:w-3/4 boxgen">
          <div>
            <img
              src="https://static.wixstatic.com/media/74d974_5569edfe00de44dc9ca0934e350d857d~mv2.jpg/v1/fill/w_529,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/399ff69f-9aab-49f5-9a3a-7673a790ac4c.jpg"
              alt=""
              className="rounded-l-lg w-full"
            />
          </div>
          <div className="bg-regalblueby-400 p-4 bg-rounded-r-lg opacity-80 text-white relative h-80 md:h-full">
            <p className="font-bold text-2xl">
              "Personality has power to uplift, power to depress, power to
              curse, and power to bless."
            </p>
            <div className=" text-black absolute bottom-0 left-0 m-4">
              <p>- Paul P. Harris</p>
              <p>- Founder, Rotary International</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto lg:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <img src={image1} alt="icon" className="h-2/3" />
            <h3 className="text-center m-2 text-lg font-bold">3141</h3>
            <div className="flex justify-center">
              <p className="text-center border-2 border-black w-fit p-2 rounded-full bg-slate-100 px-5 m-3">
                DISTRICT
              </p>
            </div>
          </div>
          <div>
            <img src={image2} alt="icon" className="h-2/3" />
            <h3 className="text-center m-2 text-lg font-bold">2B</h3>
            <div className="flex justify-center">
              <p className="text-center border-2 border-black w-fit p-2 rounded-full bg-slate-100 px-5 m-3">
                ZONE
              </p>
            </div>
          </div>
          <div>
            <img src={image3} alt="icon" className="h-2/3" />
            <h3 className="text-center m-2 text-lg font-bold">250+</h3>
            <div className="flex justify-center">
              <p className="text-center border-2 border-black w-fit p-2 rounded-full bg-slate-100 px-5 m-3">
                MEMBERS
              </p>
            </div>
          </div>
          <div>
            <img src={image4} alt="icon" className="h-2/3" />
            <h3 className="text-center m-2 text-lg font-bold">550+</h3>
            <div className="flex justify-center">
              <p className="text-center border-2 border-black w-fit p-2 rounded-full bg-slate-100 px-5 m-3">
                TOTAL PROJECTS
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto lg:w-3/4 border border-black rounded bg-regalblueby-400 bg-opacity-80 p-3 m-10 drop-shadow-lg boxgen">
          <h3 className="text-center text-4xl font-bold m-3 text-white">
            WHAT WE DO
          </h3>
          <h5 className="text-center text-2xl font-bold text-white">
            Making A Difference
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <h1 className="text-center text-xl font-bold text-yellow-400 p-3">
                COMMUNITY SERVICE
              </h1>
              <p className="text-slate-800">
                Community Service is one of the Avenues of Service which
                encourages Rotaractors to offer service to their communities.
                Every Rotaract Club and every Rotaractor assumes a
                responsibility to find ways to improve the quality of life for
                those in their communities and to serve the public interest.
                This includes a wide range from blood donation camps to beach
                cleaning.
              </p>
            </div>
            <div>
              <h1 className="text-center text-xl font-bold text-yellow-400 p-3">
                SHIKSHA
              </h1>
              <p className="text-slate-800">
                At Rotaract Club of TCET, we are dedicated to stepping up our
                efforts in addressing this issue. Education is by no means an
                easy feat, but through cooperation and community empowerment we
                believe we can facilitate progress in this area. We are always
                striving to make a difference, and invite you to lend your
                support.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto lg:w-3/4 m-10">
          <h1 className="text-center m-4 text-3xl font-bold">
            MORE ABOUT OUR AVENUES
          </h1>
          <div className="flex justify-center">
            <a
              href="/about"
              className="text-center border-2 border-black rounded-full p-2 text-lg bg-regalblueby-400 text-white"
            >
              click here
            </a>
          </div>
        </div>
        <div className=" bg-black bg-opacity-50">
          <div className="p-5 ">
            <h1 className="text-center text-white font-extrabold text-4xl">
              CONTACT ROTARACT CLUB OF TCET
            </h1>
          </div>
          <div className="">
            <p className="text-center mx-auto w-1/2 md:w-1/4 p-3 ">
              Thakur College of Engineering and Technology A Block, Thakur
              Educational Campus, Thakur Village, Kandivali East, Mumbai 400101,
              MH-IN tcetrotaract@gmail.com
            </p>
          </div>
          <div className="container mx-auto flex justify-around flex-wrap max-w-full pb-9 ">
            <div className="m-1 border w-fit border-black rounded-full text-white bg-slate-900 hover:text-black hover:bg-white transition delay-100">
              <h2 className="px-4 py-2">INSTAGRAM</h2>
            </div>
            <div className="m-1 border w-fit border-black rounded-full text-white bg-slate-900 hover:text-black hover:bg-white transition delay-100">
              <h2 className="px-4 py-2">YOUTUBE</h2>
            </div>
            <div className="m-1 border w-fit border-black rounded-full text-white bg-slate-900 hover:text-black hover:bg-white transition delay-100">
              <h2 className="px-4 py-2">TWITTER</h2>
            </div>
            <div className="m-1 border w-fit border-black rounded-full text-white bg-slate-900 hover:text-black hover:bg-white transition delay-100">
              <h2 className="px-4 py-2">LINKEDIN</h2>
            </div>
            <div className="m-1 border w-fit border-black rounded-full text-white bg-slate-900 hover:text-black hover:bg-white transition delay-100">
              <h2 className="px-4 py-2">DISCORD</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;