import React, { useState, useEffect } from "react";
import NFWLogo from "../assets/NFW_Logo.png";
import { Link } from "react-router-dom";
import { MessageCircleQuestionMark } from "lucide-react";

function Nav() {
  const FAQ = [
    {
      id: 1,
      question: "What is No Food Waste? 🤔",
      answer:
        "No Food Waste is a Non-Profit Initiative that collects surplus food from weddings, parties, and events, and redistributes it to those in need — ensuring that good food never goes to waste.",
    },
    {
      id: 2,
      question: "How does the food collection process work?",
      answer:
        "When someone reports excess food through our website or helpline, our nearest volunteer team verifies and collects it in safe, food-grade containers and delivers it to those in need.",
    },
    {
      id: 3,
      question: "Is the food safe for consumption?",
      answer:
        "Yes, we strictly follow food safety standards. Our team checks the food quality, temperature, and freshness before redistribution.",
    },
    {
      id: 4,
      question: "Can I volunteer with No Food Waste?",
      answer:
        "Absolutely! We’re always looking for passionate volunteers. You can join us by filling out the volunteer form on our website.",
    },
    {
      id: 5,
      question: "What types of food do you accept?",
      answer:
        "We accept cooked food that’s safe, fresh, and not expired — such as rice, curry, bread, and snacks.",
    },
    {
      id: 6,
      question: "How can I donate excess food?",
      answer:
        "You can donate through our website or WhatsApp by sharing your location and food details. Our local team will contact you shortly.",
    },
    {
      id: 7,
      question: "Do you operate in all cities?",
      answer:
        "We are currently active in multiple cities and continuously expanding based on volunteer availability.",
    },
    {
      id: 8,
      question: "Can organizations partner with No Food Waste?",
      answer:
        "Yes! We actively collaborate with restaurants, NGOs, and corporate canteens to reduce food waste together.",
    },
    {
      id: 9,
      question: "Do you provide receipts for donations?",
      answer:
        "Currently, we focus on food donations and do not issue tax receipts, but we provide acknowledgment upon request.",
    },
    {
      id: 10,
      question: "How can I reach the team?",
      answer:
        "You can reach us via the Contact Us page or email. Our volunteers respond as soon as possible.",
    },
    {
      id: 11,
      question: "How do you ensure food reaches safely?",
      answer:
        "We have trained volunteers who follow strict hygiene protocols and distribute food within safe time limits.",
    },
  ];

  // 🔹 State to handle responsive FAQ limit
  const [faqLimit, setFaqLimit] = useState(6);

  // 🔹 Detect screen size and set limit dynamically
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setFaqLimit(10); // mobile
      } else {
        setFaqLimit(6); // desktop
      }
    };
    handleResize(); // Run on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="flex flex-col bg-white md:flex-row items-center justify-between md:px-8 mt-10 md:mt-4">
        <Link to="/">
          <div className="flex items-center gap-2">
            <div className="w-15 h-15 rounded-full flex items-center justify-center">
              <img src={NFWLogo} alt="" />
            </div>
            <span className="text-2xl font-bold text-black">No Food Waste</span>
          </div>
        </Link>

        <div className="flex items-center gap-8 mt-6 md:mt-0">

          <Link
            to="/"
            className="text-xs md:text-md flex justify-center items-center gap-1 text-gray-700 hover:text-black"
          >
            <span>Home</span>
          </Link>

          <Link
            to="/IndianCityCards"
            className="hidden md:block text-xs md:text-md flex justify-center items-center gap-1 text-gray-700 hover:text-black"
          >
            <span>Cities</span>
            <span className="badge badge-dash badge-primary text-[10px] mx-1 px-2 py-0.5">
              Beta
            </span>
          </Link>

          <Link to={'/AboutUs'} className="text-xs md:text-md text-gray-700 hover:text-black">
            About Us
          </Link>

          <label
            className="text-xs md:text-md text-gray-700 hover:text-black drawer-button cursor-pointer"
            htmlFor="my-drawer-1"
          >
            FAQ
          </label>

          <Link to={'/ContactPage'}>
          <button className="text-xs px-6 py-2 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition">
            Contact Us
          </button>
          </Link>
        </div>
      </nav>






{/* -----------FAQ Drawer Section----------- */}





      {/* Drawer for FAQ */}
      <div className="drawer dark:bg-white">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side w-full md:w-1/2 dark:bg-white">
          <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>

          <ul className="menu bg-base-200 min-h-full w-full p-4 dark:bg-white">
            {/* Header */}
            <div className="flex justify-start items-center relative">
              <h2 className="text-2xl font-bold mt-20 md:mt-7 my-7 mx-4 md:flex">
                Learn More About How We Operate...
                <MessageCircleQuestionMark className="hidden md:block ml-2 inline" />
              </h2>

              {/* Close Button */}
              <label
                htmlFor="my-drawer-1"
                className="btn btn-sm btn-circle absolute right-4 top-4 z-50"
              >
                ✕
              </label>
            </div>

            {/* Accordion FAQ — limit & first open */}
            {FAQ.slice(0, faqLimit).map((faq, index) => (
              <div
                key={faq.id}
                className="collapse collapse-arrow bg-base-100 border border-base-300 dark:bg-white "
              >
                <input
                  type="radio"
                  name="my-accordion-2"
                  defaultChecked={index === 0} // ✅ first one open
                />
                <div className="collapse-title font-semibold">{faq.question}</div>
                <div className="collapse-content text-sm">{faq.answer}</div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
