import React from 'react';

const ProfileCard = ({ title, text, image }) => {
    return (
        <div className="bg-[#0f0f10] border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300 h-full">
            <img src={image} alt={title} className="w-full h-64 object-cover" />
            <div className="p-6 min-h-[150px]">
                <h3 className="font-bold text-xl mb-2 text-gray-100">{title}</h3>
                <p className="text-gray-400 text-base whitespace-normal">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default ProfileCard;
