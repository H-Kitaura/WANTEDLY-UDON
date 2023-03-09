/** BASIC STRUCTURE

  <main>
      <section>
          <div className={`${styles.padding} ${styles.bgColor} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <div> ................. </div>
              </div>
          </div>
      </section>
      <section>
          <div className={`${styles.padding} ${styles.bgColor} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <div> ................. </div>
              </div>
          </div>
      </section>
  </main>
 */



const styles = {

  //frame
  outLine: "mx-auto p-0 min-h-full font-sans min-w-[980px]",
  headerOutLine: "flex justify-between mx-auto fixed top-0 w-full min-w-980px h-16 font-semibold leading-8 z-10",


  // colors
  bgColor: "bg-white dark:bg-my-black",
  bgSubColor: "bg-gray-100 dark:bg-neutral-900",
  bgCardColor: "bg-stone-100 dark:bg-neutral-800",
  bgGradientColor: "bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-neutral-800 dark:to-black",
  bg2Gradation: "bg-gradient-to-bl from-[#618feb] to-[#32bdd9] ",
  textColor: "text-black dark:text-white",
  textMenuColor: "text-my-brown dark:text-white",
  textHeadingColor: "text-my-gray dark:text-white",
  textAttributeColor: "text-gray-500 dark:text-gray-400",

  // spacing
  boxWidth: "xl:max-w-[1280px] w-full",


  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexEnd: "sm:flex items-end",
  flexBetween: "flex space-x-4 fixed",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 sm:py-12",
  padding1: "sm:px-16 px-6 sm:py-12 py-4",


  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  marginRightText: "mt-[128px] mr-[64px] ml-[98px] mb-0",
  marginLeftText: "mt-[128px] mr-[98px] ml-[64px] mb-0",


  absoluteCenter: "absolute top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%]",
  // absoluteCenter: "absolute top-[50%] right-[50%]"

  // text font and sizes
  title: "text-6xl mb-4 font-bold",
  subTitle: "",
  heading1: "font-poppins font-bold xs:text-[48px] text-[40px] ",
  heading2: "font-poppins font-bold sm:text-[28px] text-[24px] ",
  heading3: "font-bold sm:text-[21px] text-[21px] ",
  heading4: "font-bold sm:text-[16px] text-[16px] ",
  heading5: "font-bold sm:text-[12px] text-[12px] ",
  paragraph: "font-poppins text-[16px] leading-[20px]",
  attribute: "font-poppings text-[12px]",
  text: "text-4xl",
  subText: "text-[15px] font-semibold mb-2 leading-8",

  // elements
  buttonRedBig: "rounded-lg border-[3px] border-my-red text-my-red py-2 px-4 text-normal font-bold ",
  buttonBlueBig: "rounded-lg border-[3px] border-my-blue text-my-blue py-2 px-4 text-normal font-bold ",
  btn: "bg-gray-800 text-white rounded-xl w-[160px] h-[36px] leading-9 shadow-md ",
  buttonGrayBig: "h-14 w-80 rounded-xl bg-gray-700 text-white leading-10 text-base mt-14 mb-14 shadow-md hover:bg-gray-600",

  // form
  formElementMarginBottom: "mb-3",
  formLabel: "text-sky-300 text-left block mb-1 font-bold",
  formLabelDark: "text-my-gray dark:text-neutral-300 text-left block mb-1 font-bold",
  formInput: "w-full bg-gray-400 appearance-none border-2 border-sky-600 rounded-sm py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-400 focus:border-sky-500",
  formInputDark: "px-2 w-full rounded-sm h-8 bg-neutral-100 dark:bg-neutral-800 border border-neutral-400 dark:border-neutral-600 text-black dark:text-gray-100 focus:outline outline-2 focus:outline-blue-300 dark:focus:outline-blue-300",
  formTextareaDark: "px-2 py-1 w-full rounded-sm bg-neutral-100 dark:bg-neutral-800 border border-neutral-400 dark:border-neutral-600 text-black dark:text-gray-100 focus:outline outline-2 focus:outline-blue-300 dark:focus:outline-blue-300",
  formErrorMessage: "text-red-400 text-xs italic",

};

export const layouts = {
  section: `flex md:flex-row flex-col`,

  sectionReverse: `flex sm:flex-row flex-col-reverse ${styles.paddingY}`,
  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;