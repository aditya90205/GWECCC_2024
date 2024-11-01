// src/components/Schedule.tsx
import React from 'react';

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="p-10 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-4">Event Schedule</h2>
      <ul className="space-y-2">
        <li className="text-lg">Day 1: Climate Change Keynote</li>
        <li className="text-lg">Day 2: Renewable Energy Workshops</li>
        <li className="text-lg">Day 3: Water Conservation Panels</li>
        <li className="text-lg">Day 4: Networking and Closing Remarks</li>
      </ul>
    </section>
  );
};

export default Schedule;
