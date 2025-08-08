import React from 'react';

const Blog = () => {
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              A UX Case Study on Creating a Studious Environment for Students
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Andrew Jonson Posted on 27th January 2021
            </p>
            <div className="mb-8">
              <img 
                src="/src/images/blog1.png" 
                alt="Blog Hero Image"
                className="w-full max-w-4xl mx-auto rounded-lg"
              />
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="text-purple-600 hover:text-purple-700 font-medium">
              Read More
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Blog
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <article key={item} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-300 h-48"></div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-3">27 Jan 2021</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How one Webflow user grew his single person consultancy from $0-100K in 14 months
                  </h3>
                  <p className="text-gray-600 mb-4">
                    See how pivoting to Webflow changed one person's sales strategy and allowed him to attract, retain, and scale customers.
                  </p>
                  <button className="text-gray-900 hover:text-gray-700 font-medium">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
