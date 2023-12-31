import React from "react";
import LinkText from "../shared/linkText";
import GreenText from "../shared/greenText";
const index = () => {
  return (
    <div className=" text-xl px-[1.5rem] md:px-[5rem]  justify-center items-center">
      <div className=" justify-center items-center py-12 md:py-16">
        <div className="md:mx-auto md:w-[90%] lg:w-[70%]">
          <div className="flex flex-col justify-between items-center ">
            <p className=" text-[#707070]">AND LET ME TELL YOU THIS</p>
            <p className="text-3xl font-bold leading-14 mt-3 mb-12  text-center break-words">
              The secret is to auto-trade with a robot that is not only
              profitable, but also stable
            </p>
          </div>
          <div className="mt-4">
            <p className="mb-4">
              How many “+50% a month” Expert Advisors have you seen being
              aggressively advertised? How many of those ended up blowing your
              account in a few months?
            </p>
            <p className="mb-4">
              There are lots of EAs that can give juicy returns in the short
              term, but don't be fooled. It is no secret:
              <LinkText text="hundreds of studies" />
              how that in 90 days or less, 94% of retail traders lose all their
              initial investments
            </p>
            <p className="mb-4">
              That means that
              <GreenText text="only the remaining 6%" />
              is able to make money and sustain their profits after a three
              months period
            </p>
            <p className="mb-4">
              When you've been trading the markets for some time, you know for a
              fact that any algo-trading system which doesn't have
              <GreenText text="at least 2 years of track-record results" />
              can not be called "proven"
            </p>
            <p className="mb-4">
              You can find thousands of "holy-grail", "money-making-machines"
              Expert Advisors that promise incredible monthly returns and early
              retirement for anyone who pays the price
            </p>
            <p className="mb-4">
              Here's the thing: If you want to achieve long-term trading success
              like the top performers of the industry, you need trading systems
              that not only have positive results but also can
              <GreenText text="maintain them over time" />
            </p>
            <p className="mb-4">
              That's why in order to keep consistent mid and long-term profits,
              I am constantly optimizing, updating, and applying the
              <GreenText text="latest innovations" />
              to all of my Expert Advisors
            </p>
            <p className="">
              That's why can trust
              <LinkText text="up to 5 years of proven track records" />
              on live accounts as well as hundreds of 5-star reviews from happy
              long-term clients for all of my Expert Advisors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
