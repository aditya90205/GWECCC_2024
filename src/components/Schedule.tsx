// src/components/Schedule.tsx
import React from "react";
import exhibition from "../assets/images/exhibitio.jpg";
import event2 from "../assets/images/event2.jpg";

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="p-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">Event Schedule</h2>
      <div>
        <div className="mb-8">
          <h3 className="text-lg font-semibold">Day 1: Exhibition</h3>
          <p className="text-lg font-medium">Feburary 23, 2025</p>
          <div className="flex flex-col md:flex-row items-center justify-between bg-slate-800 w-[100%] m-auto p-6">
            <div>
              <img src={exhibition} alt="" className=" " />
            </div>
            <div className="w-[70%] text-white">
              <p>
                GWECCC 2023 will provide a strategic opportunity for the
                exhibitors to showcase the innovative and emerging technologies
                and latest solutions that will help in solving the issues and
                challenges in the field of Water, Energy and Environment
                Sectors. The specialized exhibition will be an ideal platform to
                most of the regional & international companies for promoting
                their businesses and positioning their brand as a key player.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-semibold">Day 2: Exhibition</h3>
          <p className="text-lg font-medium">Feburary 24, 2025</p>
          <div className="flex flex-col md:flex-row items-center justify-between bg-slate-800 w-[100%] m-auto p-6">
            <div>
              <img src={exhibition} alt="" className=" " />
            </div>
            <div className="w-[70%] text-white">
              <p>
                GWECCC 2023 will provide a strategic opportunity for the
                exhibitors to showcase the innovative and emerging technologies
                and latest solutions that will help in solving the issues and
                challenges in the field of Water, Energy and Environment
                Sectors. The specialized exhibition will be an ideal platform to
                most of the regional & international companies for promoting
                their businesses and positioning their brand as a key player.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-semibold">Day 3: Networking and Closing Remarks</h3>
          <p className="text-lg font-medium">Feburary 25, 2025</p>
          <div className="flex flex-col md:flex-row items-center justify-between bg-slate-800 w-[100%] m-auto p-6">
            <div>
              <img src={event2} alt="" className="h-[50%]" />
            </div>
            <div className="w-[70%] text-white">
              <p>
                GWECCC 2023 will provide a strategic opportunity for the
                exhibitors to showcase the innovative and emerging technologies
                and latest solutions that will help in solving the issues and
                challenges in the field of Water, Energy and Environment
                Sectors. The specialized exhibition will be an ideal platform to
                most of the regional & international companies for promoting
                their businesses and positioning their brand as a key player.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
