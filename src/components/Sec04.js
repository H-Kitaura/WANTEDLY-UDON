import React from 'react';
import styles from '../style';


const Sec04 = () => {
  return (
    <section>
      <div className={`${styles.padding} ${styles.bgColor} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}${styles.marginLeftText}`}>
          <div className="relative">
            <div className="absolute transform rotate-90 top-10 left-10 text-lg bg-yellow-300 p-10 ">TEST</div>
            <div className={` ${styles.heading1} z-10 `}>
              高返信率のスカウトで
            </div>

          </div>
          <div className="main">
            Wantedly上のプロフィールからスキルや経歴、この先やってみたいことなどを直接検索した上で、会いたい候補者へ直接メッセージを送信できます。応募を待たずに攻めの採用アクションにつなげられます。
          </div>
          <div className="text-sky-400 mb-10">
            返信率20% / 柔軟な検索設定 / 自由なフォーマット
          </div>
          <button className={`${styles.btn}`}>
            候補者を見る
          </button>
        </div>
        <div className="h-[500px] w-[800px] bg-red-500"></div>
      </div>
    </section>
  )
}

export default Sec04