import React from "react";
import styles from "../style";

const Support = () => {
  return (
    <section>
      <div
        className={`${styles.padding} ${styles.boxWidth} ${styles.flexCenter} shadow-xl`}
      >
        <div className={`${styles.bgTwoGradation}`}>
          <div className="flex flex-col md:flex-row">
            <div className="my-5 mx-10 sm:my-10 sm:mx-20">
              <div className={`${styles.heading1} text-white`}>
                初めての方にも安心サポート
              </div>
              <div className={`${styles.subText} text-white mt-2`}>
                Wantedly運用のコツをつかみ、採用成功につなげるための充実したオンラインセミナーや担当者サポートをご用意しています。{" "}
              </div>
            </div>
            <button className="my-2 text-center h-[50px] min-w-[150px] sm:mt-[70px] mx-10 rounded-3xl bg-white text-gray-700 shadow-md leading-10 text-[16px] hover:bg-gray-200">
              担当に相談
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
