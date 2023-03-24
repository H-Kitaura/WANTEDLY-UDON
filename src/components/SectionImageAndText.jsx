import React from "react";
import styles from "../style";

const SectionImageAndText = ({
  reverse = false,
  title,
  description,
  attribute,
  buttonText,
  bgText1,
  bgText2,
}) => {
  return (
    <section>
      <div
        className={`${styles.padding} ${styles.bgColor} ${styles.flexCenter} mb-28`}
      >
        <div className={`${styles.boxWidth}`}>
          <div className="flex flex-col md:flex-row overflow-hidden">
            {/* ---------> only edit from here */}
            <div className="h-[500px] md:min-w-[700px] bg-red-500 text-white z-20 md:order-2 flex items-center justify-center">
              <p>dammy image</p>
            </div>
            {/* v---- grid should be used instead of absolute to overlap the element */}
            <div
              className={`grid grid-rows-1 grid-cols-1 items-center px-8 relative ${
                reverse ? "md:order-3" : "md:order-1"
              }`}
            >
              {/* v---- have to set relative to use z index */}
              <div className="col-start-1 row-start-1 z-20">
                <div className={`${styles.heading1}`}>{title}</div>
                <div className="">{description}</div>
                <div className="text-sky-400 mb-10">{attribute}</div>
                <button className={`${styles.btn}`}>{buttonText}</button>
              </div>
              <div
                className={`col-start-1 row-start-1 z-10 transform rotate-90 ${
                  reverse ? "translate-x-[30%]" : "-translate-x-[30%]"
                }`}
              >
                <div className="text-gray-100 text-[150px] font-bold leading-[190px]">
                  {bgText1}
                </div>
                <div className="text-gray-100 text-[150px] font-bold -translate-y-12 leading-[150px]">
                  {bgText2}
                </div>
              </div>
            </div>
            {/* <--------- only edit until here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionImageAndText;
