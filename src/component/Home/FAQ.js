import React, { useState } from 'react'
import Plusicon from "../../img/plus.svg";
import Minusicon from "../../img/minus-circle.svg";
import AvatarGroup from "../../img/avatar-group.png"

const data = [
  {
    question: "What is Bird?",
    answer:
      "Bird allows you to open a US checking account in dollars, a wealth building account, make cross-border and P2P transfers in various currencies, manage multiple accounts from a single app, pay bills and provides a checkout solution for apps and websites.",
  },
  {
    question: "What do I need to have a Bird account?",
    answer:
      "For Nigerian users, phone number and Bank Verification Number (BVN) are required, whereas only a phone number is required for US users.",
  },
  {
    question: "How do I send money to a Bird user?",
    answer: (
      <ol>
        <li>
          1. Click on “Send Money” on the dashboard or “Transfer” on the menu
          below the screen.
        </li>
        <li>2. Click on “Send to your Contact.</li>
        <li>3. Search by name.</li>
        <li>4. Enter amount.</li>
        <li>5. Add a note.</li>
        <li>6. Click on “SEND NOW”.</li>
      </ol>
    ),
  },
  {
    question: "How do I transfer money to a bank account?",
    answer: (
      <ol>
        <li>
          1. Click on “Send Money” on the dashboard or “Transfer” on the menu
          below the screen.
        </li>
        <li>2. Click on “Send to your Bank Account”.</li>
        <li>3. Select recipient currency.</li>
        <li>4. Select Bank.</li>
        <li>5. Enter recipient account number.</li>
        <li>6. Click on “Next”.</li>
        <li>7. Enter amount.</li>
        <li>8. Add a note.</li>
        <li>9. Click on “SEND NOW”.</li>
      </ol>
    ),
  },
  {
    question: "How do I link a bank account or card on Bird?",
    answer: (
      <ol>
        <li>1. Click on “Cards”.</li>
        <li>2. Click on “Link your debit card”</li>
        <li>3. Click on “Continue”.</li>
      </ol>
    ),
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
    <div className="py-16 md:py-20">
      <div className="container">
        <div className="lg:w-[60%] mx-auto ">
          <div className="text-center mb-7 md:mb-12">
            <h2 className="mb-3 text-3xl font-bold md:text-5xl">
              Frequently asked questions
            </h2>
            <h5 className="text-xl md:text-2xl text-[#4A5C6B]">
              Everything you need to know about the product
            </h5>
          </div>

          <div className="accordion ">
            {data.map((item, i) => (
              <div className="py-2 acc-item">
                <div className="pt-2 pb-4 acc-title" onClick={() => toggle(i)}>
                  <div>
                    <h2 className="font-medium text-xl md:text-2xl text-[#101828]">
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
                  <div className="py-2 text-[#4A5C6B] md:text-lg">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#F9FAFB] p-10 rounded-[16px] md:mt-16 mt-10 text-center">
          <div className="inline-block mb-6">
            <img src={AvatarGroup} alt="" srcset="" />
          </div>
          <h3 className="mb-2 text-2xl font-bold md:text-3xl">Still have questions?</h3>
          <p className="text-lg md:text-xl text-[#4A5C6B]">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <div className="mt-6">
            <a
              href="mailto:help@birdnet.io"
              target="_blank"
              rel='noreferrer'
              className="inline-block px-4 py-2 font-medium text-center text-white border border-transparent rounded-full lg:w-36 bg-primary500 hover:bg-green-700"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ