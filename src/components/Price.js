import React from "react";
import styles from "../style";

const Price = () => {
  return (
    <section>
      <div className={`${styles.paddingX} ${styles.flexCenter} mb-32`}>
        <div
          className={`${styles.bgTwoGradation} ${styles.boxWidth}relative z-20 flex flex-col md:flex-row`}
        >
          <div className={`${styles.marginY} px-4`}>
            <div className={`${styles.heading1} text-white`}>
              成果報酬なし。
              <p> 採用コストを抑えられます。</p>
            </div>
            <div className="text-white text-sm mt-2 leading-7">
              Wantedlyは、運用の工夫で採用単価が抑えられ、使えば使うほどお客様に採用効果を感じていただけるよう、成果報酬のかからない毎月定額の料金モデルを採用しています。
            </div>
          </div>
          <div className="flex items-center p-10">
            <button className=" h-14 w-[220px] rounded-3xl shadow-md bg-white text-gray-700 leading-10 text-[16px]] hover:bg-gray-200">
              料金表を見る
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
