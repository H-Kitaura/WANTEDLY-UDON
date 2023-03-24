import React from 'react';
import styles from '../style';

const Sec01 = () => {
  return (
  <section>
    <div className={`${styles.padding} ${styles.bgColor} ${styles.flexCenter} my-16`}>
      <div className={`${styles.boxWidth}`}>
        {/* Title */}
        <div className="relative z-20 mb-10">
          <div className={`${styles.flexCenter} ${styles.title}`}>
            会社の｢想い｣が、見える、伝わる。
          </div>
          <div className='mt-6 text-center'>
            会社の目指す未来や、メンバーの作る文化…… あなたの会社だけの魅力を伝える豊富な手段が揃っています。
          </div>
        </div>
        {/* Title */}
        {/* Main */}
          <div className="flex flex-col md:flex-row overflow-hidden">
            <div className="py-10 items-center justify-center relative z-20">
              <div className={`${styles.heading1}`}>
                掲載し放題の募集で
              </div>
              <div className={`${styles.subText}`}>
                中途からインターンまで、公開本数の限りなくあらゆる職種で応募を集めることができます。誰でも簡単に会社の想いを伝えることができるフォーマットを提供しています。
              </div>
              <div className='text-sky-400 mb-10'>
                新卒・インターン / 中途・副業採用 / 全職種対応
              </div> 
              <button className={`${styles.btn} relative hover:bg-gray-600`}>
                募集を開始
              </button>            
            </div>
            <div className="h-[500px] md:min-w-[700px] bg-red-500 z-20"></div>
            <div className="absolute">
              <div className="text-gray-100 absolute text-[150px] transform rotate-90">JOB</div>
              <div className="text-gray-100 absolute text-[150px] transform rotate-90 left-4 top-4">POSTING</div>
            </div>
          </div>
        {/* Main */}
      </div>
    </div>
  </section>
  )
}

export default Sec01