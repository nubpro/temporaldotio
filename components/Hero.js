import React from 'react';
import { Nav } from './Nav';
import DirectionalControl from './DirectionalControl';
// import { Banner } from './Banner'; // company announcements - not needed for now
import { CodeSwitcher } from './CodeSwitcher/CodeSwitcher';

export default function Hero() {
  return (
    <div>
      {/* <Banner /> */}
      <section className="container mx-auto p-4">
        <Nav />
        <div className="my-12 md:my-14 flex flex-col space-y-5 justify-center items-center">
          <h1 className="text-60 leading-60 lg:text-8xl tracking-wide capitalize font-bold text-center">
            Build Invincible Apps
          </h1>
          <p className="text-xl md:text-2xl max-w-screen-md text-center">
            Temporal is the open source runtime for running highly reliable, scalable microservice
            orchestration for mission-critical applications.
          </p>
          <div className="py-4 text-lg font-medium flex flex-col justify-center sm:justify-start space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 items-center">
            <DirectionalControl href="#explain-temporal">Get Started</DirectionalControl>
            <DirectionalControl secondary={true} href="#explain-temporal">
              How it works
            </DirectionalControl>
          </div>
          <div className="flex space-x-2 items-center text-lg ">
            <img className="w-5 h-5" src="/icons/icon-github.svg" alt="GitHub Icon" />
            <p>
              <a href="https://github.com/temporalio/temporal" rel="noreferrer" target="_blank">
                Check out Temporal on GitHub
              </a>
            </p>
            <div className="flex space-x-2 items-center text-lg">
              <img className="w-5 h-5" src="/icons/icon-star.svg" alt="GitHub Icon" />
              <p className="font-medium">2210</p>
            </div>
          </div>

          <div className="hidden md:block">
            <CodeSwitcher />
          </div>
        </div>
      </section>
    </div>
  );
}
