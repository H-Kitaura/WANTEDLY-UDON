import React from 'react';
import styles from '../style';


const Sec02 = () => {
  return (
    <section>
      <div className={`${styles.padding} ${styles.bgColor} ${styles.flexCenter}`}>
      <div className="h-[500px] w-[800px] bg-red-500"></div>
        <div className={`${styles.boxWidth} ${styles.marginRightText}`}>
          <div className={`${styles.heading1}`}>
            広く届くストーリーで
          </div>
          <div className="sub">
            募集では伝えきれない自社の魅力を気軽に発信し、候補者のファン化につなげることができます。検索エンジンやSNS経由での流入に強い採用ホームページとしてもお使いいただけます。
          </div>
          <div className="text-sky-400 mb-10">
            採用広報 / 社員インタビュー / ブランディング
          </div>
          <button className={`${styles.btn}`}>
            会社ページを作る
          </button>
        </div>
      </div>
    </section>
  )
}

export default Sec02