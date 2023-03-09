import React from 'react';
import styles from '../style';


const Sec02 = () => {
  return (
    <section>
      <div className={`${styles.padding} ${styles.bgColor} ${styles.flexCenter} mb-32`}>
        <div className={`${styles.boxWidth}`}>
          <div className="flex flex-col md:flex-row overflow-hidden">
            {/* ---------> only edit from here */}
            <div className="h-[500px] md:min-w-[700px] bg-red-500 text-white z-20 md:order-1 flex items-center justify-center">
              <p>dammy image</p>
            </div>
            <div className={`flex items-center px-8 relative md:order-2`}>
              {/* v---- have to set relative to use z index */}
              <div className="relative z-20">
                <div className={`${styles.heading1}`}>
                  高返信率のスカウトで
                </div>
                <div className="">
                  Wantedly上のプロフィールからスキルや経歴、この先やってみたいことなどを直接検索した上で、会いたい候補者へ直接メッセージを送信できます。応募を待たずに攻めの採用アクションにつなげられます。
                </div>
                <div className="text-sky-400 mb-10">
                  返信率20% / 柔軟な検索設定 / 自由なフォーマット
                </div>
                <button className={`${styles.btn}`}>
                  候補者を見る
                </button>
              </div>
              <div className=" absolute -top-9 left-0 z-10">
                <div className="text-gray-100 text-[150px] font-bold transform rotate-90">DIRECT</div>
                <div className="text-gray-100 text-[150px] font-bold transform rotate-90 absolute left-12">SCOUT</div>
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