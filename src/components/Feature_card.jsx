import React from 'react';


const Feature_card = ({ feature, position }) => {
  let hoverClasses = '';
  switch (position) {
    case 'bottom-right':
      hoverClasses = ' hover:border-b-2 hover:border-r-2';
      break;
    case 'bottom-left':
      hoverClasses = ' hover:border-b-2 hover:border-l-2';
      break;
    case 'top-right':
      hoverClasses = ' hover:border-t-2 hover:border-r-2';
      break;
    case 'top-left':
      hoverClasses = ' hover:border-t-2 hover:border-l-2';
      break;
    default:
      hoverClasses = '';
  }
  return (
    <div
      className={`relative ${hoverClasses} flex flex-col p-5 hover:bg-white/10 hover:bg-[#ffffff33] rounded-md`}

    >
      <div className="absolute inset-0 z-0 rounded-lg"></div>
      <div className="relative z-10 flex gap-10">
        <img
          className="mb-4 h-10 w-10 rounded-full"
          src={feature.icon}
          alt={feature.text}
        />
        <h5 className="text-xl">{feature.text}</h5>
      </div>
      <p className="text-md ml-16 mt-5 text-justify  text-white">
        {feature.description}
      </p>
    </div>
  );
};

export default Feature_card;
