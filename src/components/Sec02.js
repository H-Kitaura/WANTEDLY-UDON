import React from 'react';
import styles from '../style';


const Sec02 = () => {
  return (
    <section>
      <div className={`${styles.padding} ${styles.bgColor} ${styles.flexCenter} mb-32`}>
        <div className={`${styles.boxWidth}`}>
          <div className="flex flex-col md:flex-row overflow-hidden">
            <div className="h-[500px] md:min-w-[700px] bg-red-500"></div>
            <div className={`flex items-center px-8 relative`}>
              {/* v---- have to set relative to use z index */}
              <div className="relative z-20">
                <div className={`${styles.heading1}`}>
                  広く届くストーリーで
                </div>
                <div className="">
                  募集では伝えきれない自社の魅力を気軽に発信し、候補者のファン化につなげることができます。検索エンジンやSNS経由での流入に強い採用ホームページとしてもお使いいただけます。
                </div>
                <div className="text-sky-400 mb-10">
                  採用広報 / 社員インタビュー / ブランディング
                </div>
                <button className={`${styles.btn}`}>
                  会社ページを作る
                </button>
              </div>
              <div className=" absolute -top-9 left-0 z-10">
                <div className="text-gray-100 text-[150px] font-bold transform rotate-90">YOUR</div>
                <div className="text-gray-100 text-[150px] font-bold transform rotate-90 absolute left-12">STORIES</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec02