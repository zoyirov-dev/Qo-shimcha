import React from 'react';

const Promotion = () => {
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Style Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Design system and component guidelines
            </p>
          </div>

          <div className="mb-16">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <div className="flex justify-between items-center">
                <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download the Font family 👋
                </button>
                <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                  <span className="text-lg font-bold">Aa</span>
                  Poppins Font Family
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-6xl font-bold text-gray-900 mb-4">Heading H1</h2>
                <h3 className="text-5xl font-bold text-gray-900 mb-4">Heading H2</h3>
                <h4 className="text-4xl font-bold text-gray-900 mb-4">Heading H3</h4>
                <h5 className="text-3xl font-bold text-gray-900 mb-4">Heading H4</h5>
                <h6 className="text-2xl font-bold text-gray-900 mb-4">Heading H5</h6>
                <p className="text-xl font-bold text-gray-900 mb-4">Heading H6</p>
              </div>
              <div>
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Body 01</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectato
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Body 02</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectato
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2">Label 1</p>
                  <p className="text-sm text-gray-600">Apparently we had reached</p>
                  <p className="text-sm font-medium text-gray-900 mb-2 mt-4">Label 2</p>
                  <p className="text-sm text-gray-600">Apparently we had reached</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Color palette</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              <div className="w-20 h-20 bg-blue-500 rounded-lg"></div>
              <div className="w-20 h-20 bg-[#0B0D39] rounded-lg"></div>
              <div className="w-20 h-20 bg-yellow-400 rounded-lg"></div>
              <div className="w-20 h-20 bg-[#0B0D39] rounded-lg"></div>
              <div className="w-20 h-20 bg-gray-100 rounded-lg"></div>
              <div className="w-20 h-20 bg-yellow-400 rounded-lg"></div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Button Hover states</h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold">
                  View our work
                </button>
                <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold">
                  View our work
                </button>
              </div>
              <div className="space-y-4">
                <button className="bg-[#0B0D39] text-white px-6 py-3 rounded-lg font-semibold">
                  View our work
                </button>
                <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold">
                  View our work
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promotion;
