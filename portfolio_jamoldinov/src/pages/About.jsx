import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="align-elememt py-20 container px-0 md:px-10 lg:px-28">
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          I am
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Kamolxon
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
      Hello, my name is Kamoliddin. I live in Uzbekistan. I'm 21 years old, I'm a front end developer, I started learning java script in 2021 and I have some knowledge. In 2022-2023, I continued my studies at 'Najot Ta'lim' Training Center
      </p>
        <div className="mt-12">
            <p className="prose text-xl mb-3">for more information:</p>
            <Link to='/contact' className="btn btn-primary">Read more</Link>
        </div>
    </section>
  );
}

export default About;
