import React from 'react'
import styles from '../style'

const Header = () => {
  return (
    <div className={`${styles.headerOutLine}${styles.bgColor}`}>
      <div className="text-start m-2 ml-4">
        Wantedly 
        <span>採用担当者様へ</span>
      </div>   
        <div className={`${styles.flexEnd}`}>
          <ul className={`${styles.flexBetween}${styles.paddingX}`}>
            <li>お役立ち情報</li>
            <li>セミナー</li>
            <li>採用事例</li>
            <li>お問い合わせ</li>
          </ul>
          <div className='m-auto w-px h-8 bg-gray-700 mr-4'></div>
          <div className={`${styles.flexBetween}${styles.paddingX}`}>
            <a href='/'>ログイン</a>
            <button>料金を見る</button>
          </div>
        </div>
   </div>
 )
}

export default Header