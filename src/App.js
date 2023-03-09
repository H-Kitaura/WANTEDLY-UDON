import './App.css';
import Header from './components/Header';
import Sec01 from './components/Sec01';
import Sec02 from './components/Sec02';
import Sec03 from './components/Sec03new';
import TopImage from './components/TopImage';
import SubTitle from './components/SubTitle';
import Slider from './components/Slider';
import Price from './components/Price';
import Needs from './components/Needs';
import Card from './components/Card';
import Support from './components/Support';
import GetStart from './components/GetStart';
import Footer from './components/Footer';
import Card02 from './components/Card02';
import User from './components/User';
import SectionImageAndText from './components/SectionImageAndText';


function App() {
  return (
    <main>
      <Header />
      <TopImage />
      <User />
      <Slider />
      <SubTitle />
      <SectionImageAndText
        reverse={false}
        title="掲載し放題の募集で"
        description="中途からインターンまで、公開本数の限りなくあらゆる職種で応募を集めることができます。誰でも簡単に会社の想いを伝えることができるフォーマットを提供しています。"
        attribute="新卒・インターン / 中途・副業採用 / 全職種対応"
        buttonText="募集を開始"
        bgText1="JOB"
        bgText2="POSTING" />
      <SectionImageAndText
        reverse={true}
        title="広く届くストーリーで"
        description="募集では伝えきれない自社の魅力を気軽に発信し、候補者のファン化につなげることができます。検索エンジンやSNS経由での流入に強い採用ホームページとしてもお使いいただけます。"
        attribute="採用広報 / 社員インタビュー / ブランディング"
        buttonText="会社ページを作る"
        bgText1="YOUR"
        bgText2="STORIES" />
      <SectionImageAndText
        reverse={false}
        title="高返信率のスカウトで"
        description="Wantedly上のプロフィールからスキルや経歴、この先やってみたいことなどを直接検索した上で、会いたい候補者へ直接メッセージを送信できます。応募を待たずに攻めの採用アクションにつなげられます。"
        attribute="返信率20% / 柔軟な検索設定 / 自由なフォーマット"
        buttonText="候補者を見る"
        bgText1="DIRECT"
        bgText2="SCOUT" />
      <Price />
      <Needs />
      <Card />
      <Card02 />
      <Support />
      <GetStart />
      <Footer />
    </main>




  );
}

export default App;
