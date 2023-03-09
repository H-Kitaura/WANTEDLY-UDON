import React from 'react'
import styles from '../style'


const SubTitle = () => {
  return (
    <section>
      <div className={`${styles.padding} ${styles.bgSubColor} ${styles.flexCenter} mb-32`}>
        <div className={`${styles.boxWidth}`}>
          <div className="flex flex-col md:flex-row overflow-hidden">
            <div className="min-h-[400px] md:min-w-[400px] bg-red-500 z-20"></div>
            <div className={`flex items-center px-8 relative`}>
              {/* v---- have to set relative to use z index */}
              <div className="relative z-20">
                <div className={`${styles.heading1} text-center py-4`}>
                350万人の優秀そうが「想い」で通じ合える会社を待っています。
                </div>
                <div className={`${styles.subText} py-4`}>
                  求人サイトの条件比較や、第3者による釈行紹介よりも、自分の価値観に照らし合わせて充実した仕事を選びたい.......
                  Wantedlyにはそんな意欲に満ちたユーザーが幅広い職種から集まっています。仕事のやりがいや、事業の社会的意義の発信を通じて、自社に本当にマッチする人材と出会を実現しましょう。
                </div>
              </div>
            </div>
              {/* <div className=" absolute -top-9 -left-10 z-10">
                <div className="text-gray-100 text-[250px] font-bold ">OUR</div>
                <div className="text-gray-100 text-[250px] font-bold left-[200px] absolute leading-3">USER</div>
              </div> */}
          </div>
        </div>
      </div>
  </section>
  )
}

export default SubTitle