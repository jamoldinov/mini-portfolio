import React from "react";
import { Link } from "react-router-dom";
import myResume from "../../public/img/jamoldinov.pdf";

function Home() {
  return (
    <div className="mt-36 text-center  lg:text-left ml-0 lg:ml-36">
      <section
        id="heroSection"
        className="grid lg:grid-cols-2 items-center gap-20 m-auto"
      >
        <div className=" ">
          <div className="">
            <p className="prose text-xl lg:text-3xl">
              Hey, I'm Jamoldinov <br />
              <span className="text-center lg:ml-36">Kamoliddin</span>
            </p>
            <h1 className="my-4">
              <span className="text-xl lg:text-4xl font-semibold ml-0 lg:ml-5 ">
                FrontEnd Developer
              </span>
              <br />
            </h1>
            <p className="text-xl mb-4">
              A FrontEnd Developer is a tech industry professional who builds
              the front portion of websites that customers, guests, or clients
              use on a daily basis.
            </p>
          </div>
          <div className="hidden lg:inline-block">
            <div className="flex items-center gap-20 ">
            <button className="btn btn-primary">
              <a
                target="blank"
                href={myResume}
                download={"Personal-CV"}
                className=" text-xl rounded p-1.5 shadow-lg hover:scale-105 ease-in duration-200"
              >
                {/* <button type="button"></button> */}
                Download CV
              </a>
            </button>
            <div className="flex items-center gap-6">
              <Link to="https://github.com/jamoldinov">
                <svg
                  width="32"
                  height="32"
                  fill="none"
                  stroke="#00d5ff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.25 22.5v-3.865a3.361 3.361 0 0 0-.94-2.607c3.14-.35 6.44-1.538 6.44-6.99a5.43 5.43 0 0 0-1.5-3.746 5.058 5.058 0 0 0-.09-3.765s-1.18-.35-3.91 1.478a13.397 13.397 0 0 0-7 0C6.52 1.177 5.34 1.527 5.34 1.527a5.058 5.058 0 0 0-.09 3.765 5.43 5.43 0 0 0-1.5 3.775c0 5.413 3.3 6.602 6.44 6.991a3.366 3.366 0 0 0-.94 2.577V22.5"></path>
                  <path d="M9.25 19.503c-5 1.498-5-2.496-7-2.996"></path>
                </svg>
              </Link>

              <Link to="https://www.linkedin.com/in/jamoldinov-kamoliddin/">
                <svg
                  width="32"
                  height="32"
                  fill="none"
                  stroke="#00d5ff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <path d="M2 9h4v12H2z"></path>
                  <path d="M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z"></path>
                </svg>
              </Link>
            </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="./img/home.png"
            alt="Home Section"
            className=" rounded-full h-96 w-64  object-cover duration-300 hover:scale-110 "
          />
        </div>
        <div className="inline-block lg:hidden">
            <div className="flex items-center justify-center gap-2 lg:gap-20 ">
            <button className="btn btn-primary">
              <a
                target="blank"
                href={myResume}
                download={"Personal-CV"}
                className=" text-sm md:text-xl lg:text-xl rounded p-1.5 shadow-lg hover:scale-105 ease-in duration-200"
              >
                {/* <button type="button"></button> */}
                Download CV
              </a>
            </button>
            <div className="flex items-center gap-6">
              <Link to="https://github.com/jamoldinov">
                <svg
                  width="32"
                  height="32"
                  fill="none"
                  stroke="#00d5ff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.25 22.5v-3.865a3.361 3.361 0 0 0-.94-2.607c3.14-.35 6.44-1.538 6.44-6.99a5.43 5.43 0 0 0-1.5-3.746 5.058 5.058 0 0 0-.09-3.765s-1.18-.35-3.91 1.478a13.397 13.397 0 0 0-7 0C6.52 1.177 5.34 1.527 5.34 1.527a5.058 5.058 0 0 0-.09 3.765 5.43 5.43 0 0 0-1.5 3.775c0 5.413 3.3 6.602 6.44 6.991a3.366 3.366 0 0 0-.94 2.577V22.5"></path>
                  <path d="M9.25 19.503c-5 1.498-5-2.496-7-2.996"></path>
                </svg>
              </Link>

              <Link to="https://www.linkedin.com/in/jamoldinov-kamoliddin/">
                <svg
                  width="32"
                  height="32"
                  fill="none"
                  stroke="#00d5ff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <path d="M2 9h4v12H2z"></path>
                  <path d="M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z"></path>
                </svg>
              </Link>
            </div>
            </div>
          </div>
      </section>
    </div>
  );
}

export default Home;
