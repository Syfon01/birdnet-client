import React, { useState } from 'react'
import {Link} from "react-router-dom"
import Plusicon from "../../img/plus.svg";
import Minusicon from "../../img/minus-circle.svg";
import AvatarGroup from "../../img/avatar-group.png"

const data = [
  {
    question: "What is Bird?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    question: "What do I need to have a Bird account?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    question: "How can I make a transfer on Bird?",
    answer:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    question: "How secure is the Bird app?",
    answer:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    question: "What are the fees and rates when sending money abroad?",
    answer:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    question: "How do I link a bank account or card on Bird?",
    answer:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
    <div className="md:py-20 py-16">
      <div className="container">
        <div className="lg:w-[60%] mx-auto ">
          <div className="text-center mb-7 md:mb-12">
            <h2 className="font-bold md:text-4xl text-3xl mb-3">
              Frequently asked questions
            </h2>
            <h5 className="text-xl text-[#4A5C6B]">
              Everything you need to know about the product
            </h5>
          </div>

          <div className="accordion ">
            {data.map((item, i) => (
              <div className="acc-item py-2">
                <div className="acc-title pt-2 pb-4" onClick={() => toggle(i)}>
                  <div>
                    <h2 className="font-medium text-xl text-[#101828]">
                      {item.question}
                    </h2>
                  </div>

                  <div className="image-shrink">
                    <img
                      className="w-full"
                      src={selected === i ? Minusicon : Plusicon}
                      alt="acordion"
                    />
                  </div>
                </div>
                <div className={selected === i ? "content show" : "content"}>
                  <div className="py-2 text-[#4A5C6B]">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#F9FAFB] p-10 rounded-[16px] md:mt-16 mt-10 text-center">
          <div className='mb-6 inline-block'>
            <img src={AvatarGroup} alt="" srcset="" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="text-lg text-[#4A5C6B]">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="text-white font-medium border border-transparent rounded-full text-center inline-block px-4 lg:w-36 py-2 bg-primary500 hover:bg-green-700"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ