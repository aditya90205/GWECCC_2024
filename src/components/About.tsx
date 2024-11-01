// // src/components/About.tsx
// import React from "react";

// const About: React.FC = () => {
//   return (
//     <section id="about" className="p-10text-center bg-blue-100 m-6 p-6 rounded-md">
//       <h2 className="text-3xl font-semibold mb-4 text-blue-500">ABOUT GWECCC</h2>
//       <p className="text-lg">
//         Global Water, Energy and Climate Change Congress is a water & energy
//         centric event that will mainly address the concerns that are faced by
//         natural resources due to heavy consumption in major industries & the
//         impacts of climate change. It will be organized as the ultimate platform
//         for addressing sustainable development & integrated management of water
//         & energy resources and promoting regional & international strategy
//         related programmes & projects which address the challenges faced by the
//         sector, in maintaining and flourishing its resources. GWECCC will
//         include a showcase of advanced technologies, innovations and bring
//         together global leaders, experts, and policymakers to exchange
//         experiences, best practices and explore opportunities that exist in the
//         current scenario, that can support & sustain water resources and
//         mitigate scarcity & preservation concerns.
//       </p>
//     </section>
//   );
// };

// export default About;

import React from 'react';

const About = () => {
  return (
    <section className="container mx-auto p-4 mt-4 md:mt-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* About GWECCC */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">ABOUT GWECCC</h2>
          <p className="text-gray-700 leading-relaxed">
            Global Water, Energy and Climate Change Congress is a water & energy centric event
            that will mainly address the concerns that are faced by natural resources due to
            heavy consumption in major industries & the impacts of climate change. It will be
            organized as the ultimate platform for addressing sustainable development & integrated
            management of water & energy resources and promoting regional & international strategy
            related programmes & projects which address the challenges faced by the sector, in
            maintaining and flourishing its resources.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            GWECCC will include a showcase of advanced technologies, innovations and bring
            together global leaders, experts, and policymakers to exchange experiences, best
            practices and explore opportunities that exist in the current scenario, that can
            support & sustain water resources and mitigate scarcity & preservation concerns.
          </p>
        </div>

        {/* Why Attend */}
        <div className="lg:w-1/2 bg-blue-500 text-white p-6 rounded">
          <h2 className="text-2xl font-bold mb-4">WHY ATTEND</h2>
          <ul className="space-y-4">
            <li>
              Uncover Water Projects aligned to Bahrain’s Vision 2030 & other GCC nations
            </li>
            <li>
              An optimum platform for unparalleled networking opportunities to promote
              collaboration and to encourage innovations
            </li>
            <li>
              Enhance your knowledge about how public and private partnerships can further
              accelerate global action against climate change and carbon emissions
            </li>
            <li>
              Explore more from the proven best practices and practical insights from industry
              leaders & experts
            </li>
            <li>
              Stay abreast with latest trends, developments and technologies related to Water,
              Energy and Climate
            </li>
            <li>
              Expand your network with fellow professionals from different companies, countries,
              and associations with the opportunity to see the latest equipment, to exchange
              experiences and knowledge, technologies, and services provided by different
              companies
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

