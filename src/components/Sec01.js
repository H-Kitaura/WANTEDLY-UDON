import React from 'react';
import styles from '../style';

const Sec01 = () => {
  return (
  <section>
    <div className={`${styles.padding}${styles.flexCenter} mb-32`}>
      <div className={`${styles.boxWidth}`}>
          <div className={`${styles.title} ${styles.flexCenter} relative`}>
            会社の｢想い｣が、見える、伝わる。
          </div>
          <div className='mt-6 text-center'>
            会社の目指す未来や、メンバーの作る文化…… あなたの会社だけの魅力を伝える豊富な手段が揃っています。
          </div>
          <div className="flex m-auto">
            <div className={`${styles.marginLeftText} relative`}>
              <div className="absolute top-[-100px] left-[100px]">
                <div className="text-gray-100 absolute text-[150px] transform rotate-90">JOB</div>
                <div className="text-gray-100 absolute text-[150px] transform rotate-90 left-[-300px] top-[180px]">POSTING</div>
              </div>
              <div className={`${styles.heading1} relative`}>
                掲載し放題の募集で
              </div>
              <div className={`${styles.subText} relative`}>
                中途からインターンまで、公開本数の限りなくあらゆる職種で応募を集めることができます。誰でも簡単に会社の想いを伝えることができるフォーマットを提供しています。
              </div>
              <div className='text-sky-400 mb-10 relative'>
                新卒・インターン / 中途・副業採用 / 全職種対応
              </div> 
              <button className={`${styles.btn} relative hover:bg-gray-600`}>
                募集を開始
              </button>
            </div>
            <div className="h-[500px] w-[800px] bg-red-500"></div>
          </div>
      </div>
    </div>
  </section>
  )
}

export default Sec01