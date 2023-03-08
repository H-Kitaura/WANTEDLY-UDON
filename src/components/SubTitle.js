import React from 'react'
import styles from '../style'


const SubTitle = () => {
  return (
    <div className='bg-gray-50 m-auto flex relative'>
    <div className=' h-1/2 w-1/2'></div>
    <div className="">
      <div className="text-gray-100 absolute text-[300px] bottom-[20px] left-[-150px]">OUR</div>
      <div className="text-gray-100 absolute text-[300px] top-20">USER</div>
    </div>
    <div className="message mt-20 mr-16 mb-16 w-2/3 z-10">
      <div className=' text-3xl mb-6 font-bold'>
        350万人の優秀そうが「想い」で通じ合える会社を待っています。
      </div>
      <div className={`${styles.subText}`}>
        求人サイトの条件比較や、第3者による釈行紹介よりも、自分の価値観に照らし合わせて充実した仕事を選びたい.......
        Wantedlyにはそんな意欲に満ちたユーザーが幅広い職種から集まっています。仕事のやりがいや、事業の社会的意義の発信を通じて、自社に本当にマッチする人材と出会を実現しましょう。
      </div>
    </div>
  </div>
)
}

export default SubTitle