import React from 'react';
import aboutHero from '../images/About us hero.png';
import whoWeAre from '../images/Who we are.png';
import team1 from '../images/ce2bda825ab4d67761af2ea0410c9ca7461ad67a.png';
import team2 from '../images/415ae2b435aaebfdeb7acbb107459f0b8643ad03.png';
import team3 from '../images/c441e9a2e469601b15b8a2294b76805bbeaded56.png';
import team4 from '../images/33ccc9b9f7e17cd48bd93bc23df7cb7a5a4e421f.png';

const About = () => {
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">About us</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our designs solve problems
              </h1>
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={aboutHero}
                alt="About Us Hero"
                loading="eager"
                fetchpriority="high"
                decoding="sync"
                className="w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Goal focussed
              </h2>
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Continuous improvement
              </h2>
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center mb-16">
            <img 
              src={whoWeAre}
              alt="Who We Are"
              loading="lazy"
              decoding="async"
              className="w-full max-w-4xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Meet our team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative mb-4">
              <img 
                  src={team1} 
                  alt="John Smith"
                  loading="lazy"
                  className="w-32 h-32 rounded-full mx-auto"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">John Smith</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="text-center">
              <img 
                src={team2} 
                alt="Simon Adams"
                loading="lazy"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Simon Adams</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="text-center">
              <img 
                src={team3} 
                alt="Paul Jones"
                loading="lazy"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Paul Jones</h3>
              <p className="text-gray-600">Design Lead</p>
            </div>
            <div className="text-center">
              <img 
                src={team4} 
                alt="Sara Hardin"
                loading="lazy"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sara Hardin</h3>
              <p className="text-gray-600">Project Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
