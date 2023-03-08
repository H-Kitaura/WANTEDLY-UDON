import React from 'react'
import styles from '../style'


const Card02 = () => {
  return (
    <section>
      <div className={`${styles.padding} ${styles.bgColor} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} m-[64px]`}>
              <div className={`${styles.flexCenter}`}>
                <div className='flex'>
                  <div className="h-[350px] w-[250px] bg-red-200 m-4">
                    <div className="h-[150px] w-[250px] bg-red-500">img</div>
                    <div className={`${styles.flexStart} p-4`}>スカウト返信率40%。6名の新卒採用</div>
                  </div>
                  <div className="h-[350px] w-[250px] bg-red-200 m-4">
                    <div className="h-[150px] w-[250px] bg-red-500">img</div>
                    <div className={`${styles.flexStart} p-4`}>スカウト返信率40%。6名の新卒採用</div>
                  </div>
                  <div className="h-[350px] w-[250px] bg-red-200 m-4">
                    <div className="h-[150px] w-[250px] bg-red-500">img</div>
                    <div className={`${styles.flexStart} p-4`}>スカウト返信率40%。6名の新卒採用</div>
                  </div>
                  <div className="h-[350px] w-[250px] bg-red-200 m-4">
                    <div className="h-[150px] w-[250px] bg-red-500">img</div>
                    <div className={`${styles.flexStart} p-4`}>スカウト返信率40%。6名の新卒採用</div>
                  </div>
                </div>
              </div>
              <div className= {`${styles.flexCenter} mt-20`}>
              <button className={`${styles.boxWidth} rounded-3xl w-[192px] bg-gray-200`}>オプションについて詳しく</button>
              </div>
          </div>
      </div>
    </section>
)
}

export default Card02