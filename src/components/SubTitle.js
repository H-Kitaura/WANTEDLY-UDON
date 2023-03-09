import React from 'react'
import styles from '../style'


const SubTitle = () => {
  return (
    <div className={` ${styles.bgColor} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <div className={`${styles.bgSubColor} ${styles.textColor} flex relative`}>
          <div className=' h-1/2 w-full px-2 z-20'></div>
          <div className={`${styles.paddingY} ${styles.paddingX} z-20`}>
            <div className=' text-3xl mb-6 font-bold'>
              350万人の優秀そうが「想い」で通じ合える会社を待っています。
            </div>
            <div className={`${styles.subText}`}>
              求人サイトの条件比較や、第3者による釈行紹介よりも、自分の価値観に照らし合わせて充実した仕事を選びたい.......
              Wantedlyにはそんな意欲に満ちたユーザーが幅広い職種から集まっています。仕事のやりがいや、事業の社会的意義の発信を通じて、自社に本当にマッチする人材と出会を実現しましょう。
            </div>
          </div>
          <div className=" absolute z-10">
            <div className="text-gray-100 text-[200px] ">OUR</div>
            <div className="text-gray-100 text-[200px] ">USER</div>
          </div>
        </div>
      </div>
    </div>
)
}

export default SubTitle