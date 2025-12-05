import homeImage from "../images/home_image.png";


export default function Home() {

  return `
  <div class="w-full h-full bg-gradient-to-l from-[#222831] to-[#393E46] rounded-[50px] border-[0.1px] border-[#eeeeee2c] overflow-hidden flex justify-start items-center gap-[10px]">
  
  <img class="w-[535PX] H-[546PX] ml-[30px] drop-shadow-[0_20px_10px_rgba(0,0,0,0.5)]"
  src="${homeImage}"> 
  <div class="flex flex-col justify-start items-start h-full w-full mr-[30px]">
        <nav class="gap-[20px] flex w-full justify-end items-center h-[150px]">
            <button id="login_button" href="/login" data-link class="font-jersey border-[0.2px] 
                  border-[#EEEEEEcc] rounded-[50px] w-[80px] h-[54px] bg-[#950101cc] 
                  text-[#EEEEEEcc] hover:bg-[#95010182] active:bg-[#95010137] shadow-[0_5px_5px_rgba(0,0,0,0.5)] 
                    transition-all duration-200">login
            </button>
            <button href="/sign_up" data-link class=" font-jersey border-[0.2px] border-[#EEEEEEcc] shadow-[0_5px_5px_rgba(0,0,0,0.5)] 
                  text-[#EEEEEEcc] rounded-[50px]  hover:bg-[#950101cc] hover:border-[]
                    w-[100px] h-[54px] transition-all duration-150 ">sign up
            </button>
        </nav>
        <div class="flex flex-col gap-[10px]">
            <h1 class=" font-jersey text-[124px] text-shadow-[0_5px_5px_rgba(0,0,0,0.5)] 
                  text-[#EEEEEE] leading-none">ping pong game
            </h1>
            <p class="font-jersey text-[26px] text-shadow-[0_5px_5px_rgba(0,0,0,0.5)] text-[#EEEEEE] leading-none">
                    Step up to the table and dive into fast,
                    exciting ping-pong action. Sharpen your skills, face new challenges
                    , and enjoy every thrilling bounce on your path to victory.
            </p>
        </div>
        <div class="mt-[30px] gap-[10px] flex flex-col">
          <button  href="/about" data-link class="font-jersey text-[24px] border-[0.5px]
                     border-[#EEEEEEcc] w-[288px] h-[64px] rounded-[10px] 
                     text-[#EEEEEE] hover:bg-[#eeeeee44] active:bg-[#eeeeee16] transition-all duration-800">About game
          </button>
          <button  href="/sign_up" data-link class="font-jersey text-[24px] border-[0.5px] 
                      px-6 py-3 bg-gradient-to-r from-[#950101] via-[#222831] via-[#222831] to-[#950101] bg-[length:200%_100%]  bg-left hover:bg-right transition-[background-position] duration-500 ease-in-out text-white border-[#EEEEEEcc] 
                        w-[288px] h-[64px] rounded-[10px] text-[#EEEEEE] ">Get started
          </button>
        </div> 
  <div/>

  </div>
  `;
}
