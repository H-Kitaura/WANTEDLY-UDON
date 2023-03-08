import React from 'react'
import styles from '../style'


const Card02 = () => {
  return (
    <section>
      <div className={`${styles.padding} ${styles.bgColor} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} mx-[64px]`}>
              <div className={`${styles.flexCenter}`}>
                <div className='flex'>
                  <div className="h-[350px] w-[250px] bg-red-200 m-4 shadow-xl">
                    <div className="h-[150px] w-[250px] bg-red-500">img</div>
                    <div className={`${styles.flexStart} p-4`}>スカウト返信率40%。6名の新卒採用</div>
                  </div>
                  <div className="h-[350px] w-[250px] bg-red-200 m-4 shadow-xl">
                    <div className="h-[150px] w-[250px] bg-red-500">img</div>
                    <div className={`${styles.flexStart} p-4`}>スカウト返信率40%。6名の新卒採用</div>
                  </div>
                  <div className="h-[350px] w-[250px] bg-red-200 m-4 shadow-xl">
                    <div className="h-[150px] w-[250px] bg-red-500">img</div>
                    <div className={`${styles.flexStart} p-4`}>スカウト返信率40%。6名の新卒採用</div>
                  </div>
                  <div className="h-[350px] w-[250px] bg-red-200 m-4 shadow-xl">
                    <div className="h-[150px] w-[250px] bg-red-500">img</div>
                    <div className={`${styles.flexStart} p-4`}>スカウト返信率40%。6名の新卒採用</div>
                  </div>
                </div>
              </div>
              <div className= {`${styles.flexCenter} mt-10`}>
              <button className="rounded-3xl w-[192px] bg-gray-200 shadow-md hover:bg-gray-400">全ての事例を見る</button>
              </div>
          </div>
      </div>
    </section>
)
}

export default Card02