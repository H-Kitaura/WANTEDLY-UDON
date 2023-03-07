import React from 'react';
import styles from '../style';

const TopImage = () => {
  return (
    <div className="ml-32 pt-40 ">
    <div className={`${styles.title}`}>
      <span className='font-bold'>想い</span>で<span className='font-bold '>つながる</span> 
      <p><span className='font-bold'>採用</span>は<span className='font-bold'>強い</span></p>
    </div>
    <div className="sub">
        Wantedlyは、あなたの会社が掲げる｢想い｣への共感を通じて、
        <p> 条件だけでは動かない優秀な人材にアプローチ。</p>
        <div className='text-xl mt-2 text-white font-bold'>条件や知名度、採用予算に左右されない採用を実現します。</div>
    </div>
    <button className='h-14 w-80 rounded-xl bg-gray-700 text-white leading-10 text-base mt-14'>まずは、資料ダウンロード</button>
  </div>
)
}

export default TopImage