import Image from "next/image";
import reefImage from "../public/images/CoralReef_test.png";

const Home = () => {
  return (
    <main className="h-screen">
      <section
        id="intro-section"
        className=" pt-20 z-0 relative h-full overflow-clip"
      >
        <h2 className="text-xl font-semibold text-white">Welcome to</h2>
        <h1 className="text-2xl font-semibold text-orange-500">
          Contextual Graphics.LLC
        </h1>
        <p className="text-white font-light pt-4 leading-snug">
          Whether you're a startup looking to make your mark, an established
          brand seeking a fresh look, or an individual with a unique vision, our
          team of dedicated designers is here to transform your ideas into
          reality. From innovative logos to captivating marketing materials, we
          provide a full spectrum of graphic design services tailored to your
          specific needs.
        </p>
        <div className="flex justify-between">
          <div>
            <button className="border underline underline-offset-4 mt-8 text-white py-2 px-4 rounded-lg">
              Sign Up/ Login
            </button>
            <p className="text-white underline text-center pt-2 font-light text-sm">
              Privacy Policy
            </p>
          </div>
          <div>
            <button className="bg-orange-500 mt-8 py-2 px-4 rounded-lg">
              Contact Us
            </button>
            <p className="text-white underline text-center pt-2 font-light text-sm">
              Terms of Service
            </p>
          </div>
        </div>
        {/* <Image
          src={reefImage}
          className="z-10 absolute bottom-0 right-0 translate-x-14 translate-y-20"
        /> */}
      </section>
    </main>
  );
};

export default Home;
