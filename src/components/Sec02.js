import React from 'react';
import styles from '../style';


const Sec02 = ({ reverse = false }) => {
  return (
    <section>
      <div className={`${styles.padding} ${styles.bgColor} ${styles.flexCenter} my-16`}>
        <div className={`${styles.boxWidth}`}>
          <div className="flex flex-col md:flex-row overflow-hidden">
            {/* ---------> only edit from here */}
            <div className="h-[500px] md:min-w-[700px] bg-red-500 text-white z-20 md:order-2 flex items-center justify-center">
              <p>dammy image</p>
            </div>
            {/* v---- grid should be used instead of absolute to overlap the element */}
            <div className={`grid grid-rows-1 grid-cols-1 items-center px-8 relative ${reverse ? "md:order-1" : "md:order-3"}`}>
              {/* v---- have to set relative to use z index */}
              <div className="col-start-1 row-start-1 z-20">
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
              <div className={`col-start-1 row-start-1 z-10 transform rotate-90 ${reverse ? "-translate-x-[30%]" : "translate-x-[30%]"}`}>
                <div className="text-gray-100 text-[150px] font-bold leading-[190px]">YOUR</div>
                <div className="text-gray-100 text-[150px] font-bold -translate-y-12 leading-[150px]">STORIES</div>
                {/* <div className="text-gray-100 text-[150px] font-bold translate-y-12">YOUR</div>
                  <div className="text-gray-100 text-[150px] font-bold -translate-y-12">STORIES</div> */}
              </div>
            </div>
            {/* <--------- only edit until here */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec02