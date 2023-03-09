import React from 'react';
import styles from '../style';

const TopImage = () => {
  return (
    <div className={`${styles.boxWidth}`}>
      <div className={`${styles.bg2Gradation}`}>
        <div className="sm:ml-32 sm:pt-40 ">
          <div className={`${styles.title} text-white`}>
            <span className='font-bold'>想い</span><span className=" font-light">で</span><span className='font-bold '>つながる</span> 
            <p><span className='font-bold'>採用</span><span className="font-light">は</span><span className='font-bold'>強い</span></p>
          </div>
          <div className="sub">
              Wantedlyは、あなたの会社が掲げる｢想い｣への共感を通じて、
              <p> 条件だけでは動かない優秀な人材にアプローチ。</p>
              <div className='text-xl mt-2 text-white font-bold'>条件や知名度、採用予算に左右されない採用を実現します。</div>
          </div>
            <button className={`${styles.buttonGrayBig}`}>まずは、資料ダウンロード</button>
        </div>
      </div>
    </div>
)
}

export default TopImage

