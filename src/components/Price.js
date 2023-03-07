import React from 'react'
import styles from '../style'

const Price = () => {
  return (
    <section>
    <div className="m-[100] relative">
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.heading1} text-white ${styles.bg2Gradation}`}>成果報酬なし。
              <p> 採用コストを抑えられます。</p>
          </div>
          <div className="">
            Wantedlyは、運用の工夫で採用単価が抑えられ、使えば使うほどお客様に採用効果を感じていただけるよう、成果報酬のかからない毎月定額の料金モデルを採用しています。
          </div>
          <button className="h-14 w-80 rounded-xl bg-gray-700 text-white leading-10 text-base mt-14">料金表を見る</button>
        </div>
    </div>
</section>
)
}

export default Price