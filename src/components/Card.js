import React from "react";
import styles from "../style";

const Card = () => {
  return (
    <div className={`${styles.padding} ${styles.bgColor} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <div className=" bg-slate-700 min-h-[500px] p-4">
          <div className="sm:ml-16 sm:pt-20 text-white">
            <div className={`${styles.heading2} font-bold`}>
              知名度がほとんどない状況から
              <p>年間30～40名の新卒採用に成功</p>
            </div>
            <div className="mt-4 text-[16px]">
              コストを抑えてベンチャーマインドのある人材にアプローチ。学生からの
              <p>
                知名度がゼロの状況から、年間30〜40名の新卒を採用できるまでに至った
              </p>
              <p>手法とは？</p>
              <div className="text-xl mt-8 text-white font-bold">
                株式会社マネーフォワード / ITサービス
              </div>
            </div>
            <button className="rounded-3xl bg-white text-gray-700 leading-10 text-base mt-7 hover:bg-gray-300">
              まずは、資料ダウンロード
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
