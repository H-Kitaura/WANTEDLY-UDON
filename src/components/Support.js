import React from 'react'
import styles from '../style'


const Support = () => {
  return (
    <section>
      <div className={`m-24 p-[40px] mx-auto ${styles.boxWidth} ${styles.bg2Gradation} mx-auto relative shadow-xl flex`}>
          <div className="w-[600px]">
              <div className={`${styles.heading1} text-white`}>
                初めての方にも安心サポート
              </div>
              <div className="text-white text-sm mt-2 leading-7">
              Wantedly運用のコツをつかみ、採用成功につなげるための充実したオンラインセミナーや担当者サポートをご用意しています。              </div>
          </div>
        <button className="absolute h-14 w-[220px] rounded-3xl bg-white text-gray-700 shadow-md leading-10 text-[16px] mt-14 right-[120px] hover:bg-gray-200">担当に相談</button>
      </div>
  </section>
  )
}

export default Support