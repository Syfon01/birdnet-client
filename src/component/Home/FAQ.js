import React, { useState } from 'react'
import Plusicon from "../../img/plus.svg";
import Minusicon from "../../img/minus-circle.svg";


const data = [
  {
    question: "Question 1",
    answer: "lorem",
  },
  {
    question: "Question 2",
    answer: "lorem",
  },
];

const FAQ = () => {
  const [selected , setSelected] = useState(null);

  const toggle = (i) => { 
    if (i === selected) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className="wrapper py-5">
      
      <div className="accordion ">
        {data.map((item, i) => (
          <div className="item py-4">
            <div className="title" onClick={() => toggle(i)}>
              <h2 className="font-medium text-xl text-[#101828]">
                {item.question}
              </h2>
              <span className="">
              <img src={selected === i ? Minusicon : Plusicon}/>
              </span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ