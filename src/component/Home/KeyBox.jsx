import React from 'react'

const KeyBox = ({ img, title, text, bgKeyCard,dataOs }) => {
  return (
    <div className="">
      <div
        className={`key-shadow text-center px-5 2xl:px-6 py-7 hover:shadow-lg rounded-xl ${bgKeyCard} h-full`}
        data-aos={dataOs}
        data-aos-delay={50}
      >
        <div className="flex justify-center pt-1">
          <img src={img} alt="" />
        </div>
        <p className="mt-4 text-xl font-bold">{title}</p>
        <p className="text-[#344054] mt-2">{text}</p>
      </div>
    </div>
  );
};

export default KeyBox