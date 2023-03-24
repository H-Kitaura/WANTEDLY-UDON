{
  /* v---- grid should be used instead of absolute to overlap the element */
}
<div
  className={`grid grid-rows-1 grid-cols-1 items-center px-8 relative ${
    reverse ? "md:order-1" : "md:order-3"
  }`}
>
  {/* v---- have to set relative to use z index */}
  <div className="col-start-1 row-start-1 z-20">
    <div className={`${styles.heading1}`}>広く届くストーリーで</div>
    <div className="">
      募集では伝えきれない自社の魅力を気軽に発信し、候補者のファン化につなげることができます。検索エンジンやSNS経由での流入に強い採用ホームページとしてもお使いいただけます。
    </div>
    <div className="text-sky-400 mb-10">
      採用広報 / 社員インタビュー / ブランディング
    </div>
    <button className={`${styles.btn}`}>会社ページを作る</button>
  </div>
  <div
    className={`col-start-1 row-start-1 z-10 transform rotate-90 ${
      reverse ? "-translate-x-[30%]" : "translate-x-[30%]"
    }`}
  >
    <div className="text-gray-100 text-[150px] font-bold leading-[190px]">
      YOUR
    </div>
    <div className="text-gray-100 text-[150px] font-bold -translate-y-12 leading-[150px]">
      STORIES
    </div>
    {/* <div className="text-gray-100 text-[150px] font-bold translate-y-12">YOUR</div>
      <div className="text-gray-100 text-[150px] font-bold -translate-y-12">STORIES</div> */}
  </div>
</div>;
