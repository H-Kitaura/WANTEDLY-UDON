import React from "react";
import styles from "../style";

const Needs = () => {
  return (
    <section>
      <div
        className={`${styles.padding} ${styles.bgColor} ${styles.flexCenter} mb-32`}
      >
        {/* <div className="text-center z-10 text-gray-100 text-[300px] left-[-150px] absolute">
          OPTIONS
        </div> */}
        <div className={`${styles.boxWidth}`}>
          <div
            className={`${styles.title} flex flex-col sm:flex-row m-[32px] z-20 relative`}
          >
            採用ニーズに合わせてカスタマイズ
          </div>
          <div className={`${styles.flexCenter}overflow-hidden sm:space-x-6`}>
            <div className="text-center">
              <div className="h-[140px] w-[140px] bg-red-200"></div>
              <div>ダイレクト</div>
              <div>スカウト</div>
            </div>
            <div className="text-center">
              <div className="h-[140px] w-[140px] bg-red-200"></div>
              <div>募集の</div>
              <div>SNS広告配信</div>
            </div>
            <div className="text-center">
              <div className="h-[140px] w-[140px] bg-red-200"></div>
              <div>ライティング</div>
              <br />
            </div>
            <div className="text-center">
              <div className="h-[140px] w-[140px] bg-red-200"></div>
              <div>フォトグラファー</div>
              <div>派遣</div>
            </div>
            <div className="text-center">
              <div className="h-[140px] w-[140px] bg-red-200"></div>
              <div>プロによる</div>
              <div>動画撮影</div>
            </div>
          </div>
          <div className={`${styles.flexCenter} mt-10 sm:mt-20`}>
            <button className="rounded-3xl w-[192px] shadow-md bg-gray-200 hover:bg-gray-400">
              オプションについて詳しく
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Needs;
