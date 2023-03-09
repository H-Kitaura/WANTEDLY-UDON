import React from 'react';
import styles from '../style';


const Sec03 = () => {
  return (
    <section>
      <div className={`${styles.padding} ${styles.bgColor} ${styles.flexCenter} mb-32 z-20`}>
        <div className={`${styles.boxWidth}${styles.marginLeftText}`}>
          <div className="z-10 space-x-6">
            <div className="text-gray-100 absolute text-[150px] transform rotate-90">DIRECT</div>
            <div className="text-gray-100 absolute text-[150px] transform rotate-90 left-[-50px]">SCOUT</div>
          </div>
          <div className={`${styles.heading1} relative`}>
            高返信率のスカウトで
          </div>
          <div className="relative">
            Wantedly上のプロフィールからスキルや経歴、この先やってみたいことなどを直接検索した上で、会いたい候補者へ直接メッセージを送信できます。応募を待たずに攻めの採用アクションにつなげられます。
          </div>
          <div className="text-sky-400 mb-10 relative">
            返信率20% / 柔軟な検索設定 / 自由なフォーマット
          </div>
          <button className={`${styles.btn} relative hover:bg-gray-600`}>
            候補者を見る
          </button>
        </div>
        <div className="h-[500px] w-[800px] bg-red-500"></div>
      </div>
    </section>
  )
}

export default Sec03