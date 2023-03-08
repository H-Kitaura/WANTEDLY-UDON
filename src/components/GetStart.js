import React from 'react'
import styles from '../style'


const GetStart = () => {
  return (
    <div className="bg-gradient-to-bl from-gray-900 to-gray-600 z-20 relative">
      <div className={`${styles.title}z-10 absolute left-[-20px]`}>
        <div className="text-gray-900 text-[300px]">GET</div>
        <p className="text-gray-900 text-[300px]">STAND</p>
      </div>
      <div className="ml-32 pt-[120px] pb-[120px] z-20 relative">
        <div className={`${styles.title} text-white`}>
          あなたも、
          <span className=" text-[#21bddb]">新しい採用戦略</span>
          をはじめよう。
        </div>
        <div className={`${styles.flexCenter} mt-20 relative`}>
                <div>
                  <div className="h-[150px] w-[250px] bg-white m-4"></div>
                  <div className={`${styles.flexCenter} text-gray-400`}>まずは1ヶ月無料のトライアルにて</div>
                    <div className={`${styles.flexCenter} text-gray-400`}>お試しください</div>
                </div>
                <div>
                  <div className="h-[150px] w-[250px] bg-white m-4"></div>
                    <div className={`${styles.flexCenter} text-gray-400`}>募集の</div>
                    <div className={`${styles.flexCenter} text-gray-400`}>SNS広告配信</div>
                </div>
                <div>
                  <div className="h-[150px] w-[250px] bg-white m-4"></div>
                    <div className={`${styles.flexCenter} text-gray-400`}>プロによる</div>
                    <div className={`${styles.flexCenter} text-gray-400`}>動画撮影</div>
                </div>
          </div>
      </div>
    </div>
  )
}

export default GetStart