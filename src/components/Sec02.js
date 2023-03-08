import React from 'react';
import styles from '../style';


const Sec02 = () => {
  return (
    <section>
      <div className={`${styles.padding} ${styles.bgColor} ${styles.flexCenter} mb-32`}>
        <div className="h-[500px] w-[800px] bg-red-500"></div>
        <div className="z-10 space-x-6">
          <div className="text-gray-100 absolute text-[150px] transform rotate-90">YOUR</div>
          <div className="text-gray-100 absolute text-[150px] transform rotate-90">STORIES</div>
        </div>
        <div className={`${styles.boxWidth} ${styles.marginRightText} relative z-20`}>
          <div className={`${styles.heading1} relative`}>
            広く届くストーリーで
          </div>
          <div className=" relative">
            募集では伝えきれない自社の魅力を気軽に発信し、候補者のファン化につなげることができます。検索エンジンやSNS経由での流入に強い採用ホームページとしてもお使いいただけます。
          </div>
          <div className="text-sky-400 mb-10 relative">
            採用広報 / 社員インタビュー / ブランディング
          </div>
          <button className={`${styles.btn} relative`}>
            会社ページを作る
          </button>
        </div>
      </div>
    </section>
  )
}

export default Sec02