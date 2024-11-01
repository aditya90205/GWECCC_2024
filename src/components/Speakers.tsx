import React from 'react';

import speaker1 from '../assets/images/speaker1.jpg';
import speaker2 from '../assets/images/speaker2.jpg';
import speaker3 from '../assets/images/speaker3.jpg';
import speaker4 from '../assets/images/speaker4.jpg';
import speaker5 from '../assets/images/speaker5.jpg';
import speaker6 from '../assets/images/speaker6.jpg';
import speaker7 from '../assets/images/speaker7.jpg';
import speaker8 from '../assets/images/speaker8.jpg';
const speakers = [
    { name: "Abdul Majeid Haddad", title: "Deputy Regional Director", organization: "UNEP", image: `${speaker1}` },
    { name: "Ahmad Al Khowaiter", title: "Executive Vice President, Technology & Innovation", organization: "Aramco", image: `${speaker2}` },
    { name: "Mohammad A. Abunayyan", title: "Founder & Chairman", organization: "ACWA Power", image: `${speaker3}` },
    { name: "Saroj Kumar Jha", title: "Global Director, Water Global Practice", organization: "The World Bank Group", image: `${speaker4}` },
    { name: "Dr. Kala Vairavamoorthy", title: "Executive Director", organization: "Water Association", image: `${speaker5}` },
    { name: "Sarah Cocker", title: "Managing Director Amplify & Former TV Anchor", organization: "CNBC", image: `${speaker6}` },
    { name: "Eng. Abdullah Al Zowaid", title: "Deputy Governor for Production Affairs", organization: "Saline Water Conversion Corporation", image: `${speaker7}` },
    { name: "Mundhir Adai Mohammed Al Battashi", title: "Waste Management Engineer", organization: "PDO", image: `${speaker8}` },
];

const Speakers = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className='text-3xl font-bold mb-4'>Our Speakers</h1>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {speakers.map((speaker, index) => (
                    <div key={index} className="bg-blue-200 p-4 rounded-lg shadow-md flex flex-col items-center">
                        <img
                            src={speaker.image}
                            alt={speaker.name}
                            className="w-24 h-24 rounded-full mb-4 object-cover"
                        />
                        <h3 className="text-lg font-semibold text-center">{speaker.name}</h3>
                        <p className="text-sm text-center">{speaker.title}</p>
                        <p className="text-sm text-center text-gray-600">{speaker.organization}</p>
                    </div>
                ))}
            </div>
            <h1 className='mt-3 font-semibold'>And many more...</h1>
        </div>
    );
};

export default Speakers;
