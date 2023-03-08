import React from 'react'
import styles from '../style'

const User = () => {
  return (
    <section>
      <div className={`sm:px-6 sm:py-3 ${styles.bgColor} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} flex gap-x-4 mt-4 ml-[98px] text-gray-400 z-20 relative`}>
            <div className="gap-2 space-x-2 relative">
            ユーザ数<span className={`${styles.heading1}text-gray-800`}>350</span>万人
            </div>
            <div className="gap-2 space-x-2 relative">
            スカウト返信率<span className="">平均</span><span className={`${styles.heading1} text-gray-800`}>20</span>%
            </div>
            <div className="gap-2 space-x-2 relative">
            月間応募数<span className="">約</span><span className={`${styles.heading1}text-gray-800`}>25</span>件/社
            </div>
          </div>
          <div className="absolute z-10 text-[70px] text-gray-100 left-2">OUR CLIENTS</div>
      </div>
    </section>
)
}

export default User