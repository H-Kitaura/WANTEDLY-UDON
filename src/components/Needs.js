import React from 'react'
import styles from '../style'


const Needs = () => {
  return (
    <section>
      <div className={`${styles.padding} ${styles.bgColor} ${styles.flexCenter} z-20 relative`}>
        <div className="z-10 text-center">
          <div className="text-gray-100 absolute text-[300px] top-[1px] left-[-150px]">OPTIONS</div>
        </div>
          <div className={`${styles.boxWidth} m-[64px] z-20`}>
            <div className={`${styles.title}`}>採用ニーズに合わせてカスタマイズ</div>
              <div className={`${styles.flexCenter}`}>
                <div>
                  <div className="h-[140px] w-[140px] bg-red-200 m-4"></div>
                    <div className={`${styles.flexCenter}`}>ダイレクト</div>
                    <div className={`${styles.flexCenter}`}>スカウト</div>
                </div>
                <div>
                  <div className="h-[140px] w-[140px] bg-red-200 m-4"></div>
                    <div className={`${styles.flexCenter}`}>募集の</div>
                    <div className={`${styles.flexCenter}`}>SNS広告配信</div>
                </div>
                <div>
                  <div className="h-[140px] w-[140px] bg-red-200 m-4 "></div>
                    <div className={`${styles.flexCenter}`}>ライティング</div>
                    <br />
                </div>
                <div>
                  <div className="h-[140px] w-[140px] bg-red-200 m-4"></div>
                    <div className={`${styles.flexCenter}`}>フォトグラファー</div>
                    <div className={`${styles.flexCenter}`}>派遣</div>
                </div>
                <div>
                  <div className="h-[140px] w-[140px] bg-red-200 m-4"></div>
                    <div className={`${styles.flexCenter}`}>プロによる</div>
                    <div className={`${styles.flexCenter}`}>動画撮影</div>
                </div>
              </div>
              <div className= {`${styles.flexCenter} mt-20`}>
              <button className="rounded-3xl w-[192px] bg-gray-200">オプションについて詳しく</button>
              </div>
          </div>
      </div>
    </section>
)
}

export default Needs