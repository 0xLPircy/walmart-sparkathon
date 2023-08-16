"use client";
import { useState } from "react";

const Faq = () => {
  const [symbol1, setSymbol1] = useState("+");
  const [symbol2, setSymbol2] = useState("+");
  const [symbol3, setSymbol3] = useState("+");
  const [symbol4, setSymbol4] = useState("+");
  const [symbol5, setSymbol5] = useState("+");
  const [symbol6, setSymbol6] = useState("+");
  const [ansclass1, setAnsclass1] = useState("hidden");
  const [ansclass2, setAnsclass2] = useState("hidden");
  const [ansclass3, setAnsclass3] = useState("hidden");
  const [ansclass4, setAnsclass4] = useState("hidden");
  const [ansclass5, setAnsclass5] = useState("hidden");
  const [ansclass6, setAnsclass6] = useState("hidden");

  return (
    <div className="faq grid grid-flow-row justify-center">
      <h1 className="justify-self-center text-4xl text-[#dcdcdc] pt-40 italic">
        Frequently Asked Questions
      </h1>
      <div className="w-[50vw] h-fit">
        <div className="bg-slate-300 rounded-md grid grid-flow-col px-3 py-3 mt-3">
          {" "}
          <h2 className="justify-self-start">
            Q: How do I sign up for Wanderlust Journeys?
          </h2>
          <div
            className="justify-self-end"
            onClick={() => {
              if (symbol1 === "+") {
                setSymbol1("-");
                setAnsclass1("");
              } else {
                setSymbol1("+");
                setAnsclass1("hidden");
              }
            }}
          >
            {symbol1}
          </div>
        </div>
        <div className={ansclass1}>
          <h2 className="bg-slate-300 rounded-md grid grid-flow-col px-3 py-3 mt-1">
            A: You can sign up with your Metamask wallet. Click "Connect Wallet"
            on the top-right corner, follow the instructions, and start your
            travel journey!
          </h2>
        </div>

        <div className="bg-slate-300 rounded-md grid grid-flow-col px-3 py-3 mt-3">
          {" "}
          <h2 className="justify-self-start">Q: Are the tasks challenging? </h2>
          <div
            className="justify-self-end"
            onClick={() => {
              if (symbol2 === "+") {
                setSymbol2("-");
                setAnsclass2("");
              } else {
                setSymbol2("+");
                setAnsclass2("hidden");
              }
            }}
          >
            {symbol2}
          </div>
        </div>
        <div className={ansclass2}>
          <h2 className="bg-slate-300 rounded-md grid grid-flow-col px-3 py-3 mt-1">
            A: Our tasks cater to a wide range of travelers. Whether you're an
            adventurer or prefer a relaxed pace, our tasks offer enjoyable
            experiences suitable for all.
          </h2>
        </div>

        <div className="bg-slate-300 rounded-md grid grid-flow-col px-3 py-3 mt-3">
          {" "}
          <h2 className="justify-self-start">
            Q: Are there age restrictions to join trips?{" "}
          </h2>
          <div
            className="justify-self-end"
            onClick={() => {
              if (symbol3 === "+") {
                setSymbol3("-");
                setAnsclass3("");
              } else {
                setSymbol3("+");
                setAnsclass3("hidden");
              }
            }}
          >
            {symbol3}
          </div>
        </div>
        <div className={ansclass3}>
          <h2 className="bg-slate-300 rounded-md grid grid-flow-col px-3 py-3 mt-1">
            A: While our platform is open to users aged 16 and above, some trips
            might have specific age requirements. Check trip details for more
            information.
          </h2>
        </div>

        <div className="bg-slate-300 rounded-md grid grid-flow-col px-3 py-3 mt-3">
          {" "}
          <h2 className="justify-self-start">
            Q: How can I track my progress and rewards?{" "}
          </h2>
          <div
            className="justify-self-end"
            onClick={() => {
              if (symbol4 === "+") {
                setSymbol4("-");
                setAnsclass4("");
              } else {
                setSymbol4("+");
                setAnsclass4("hidden");
              }
            }}
          >
            {symbol4}
          </div>
        </div>
        <div className={ansclass4}>
          <h2 className="bg-slate-300 rounded-md grid grid-flow-col px-3 py-3 mt-1">
            A: Once you sign up and start a trip, you'll have access to your
            personalized dashboard, where you can track your progress, rewards,
            and achievements.
          </h2>
        </div>

        <div className="bg-slate-300 rounded-md grid grid-flow-col px-3 py-3 mt-3">
          {" "}
          <h2 className="justify-self-start">
            Q: Can I sell or trade my earned NFTs?{" "}
          </h2>
          <div
            className="justify-self-end"
            onClick={() => {
              if (symbol5 === "+") {
                setSymbol5("-");
                setAnsclass5("");
              } else {
                setSymbol5("+");
                setAnsclass5("hidden");
              }
            }}
          >
            {symbol5}
          </div>
        </div>
        <div className={ansclass5}>
          <h2 className="bg-slate-300 rounded-md grid grid-flow-col px-3 py-3 mt-1">
            A: Yes, your earned NFTs are entirely yours to keep, trade, or sell
            in the marketplace. Embrace the world of NFT ownership and showcase
            your unique travel experiences!
          </h2>
        </div>

        <div className="bg-slate-300 rounded-md grid grid-flow-col px-3 py-3 mt-3">
          {" "}
          <h2 className="justify-self-start">
            Q: How do I sign up for Wanderlust Journeys?
          </h2>
          <div
            className="justify-self-end"
            onClick={() => {
              if (symbol === "+") {
                setSymbol6("-");
                setAnsclass6("");
              } else {
                setSymbol6("+");
                setAnsclass6("hidden");
              }
            }}
          >
            {symbol6}
          </div>
        </div>
        <div className={ansclass6}>
          <h2 className="bg-slate-300 rounded-md grid grid-flow-col px-3 py-3 mt-1">
            A: You can sign up with your Metamask wallet. Click "Connect Wallet"
            on the top-right corner, follow the instructions, and start your
            travel journey!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Faq;
