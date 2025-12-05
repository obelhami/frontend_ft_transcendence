import logo from "../images/download.svg";
import login from "../images/login_image.png";

export default function Login() {
  return `
  <div class="w-full h-full bg-gradient-to-l   from-[#393E46] to-[#222831] overflow-hidden rounded-[50px] border-[0.1px] border-[#eeeeee2c] flex justify-start overflow-hidden items-center gap-[10px]">
        <div class="w-full h-full flex flex-col justify-start items-center ">
            <div class=" w-full h-[193px] flex justify-start items-center ml-[70px] mt-[20px] flex gap-[30px]">
                <img href="/home" data-link class="w-[50px] h-[56.76px] drop-shadow-[0_5px_5px_rgba(0,0,0,0.9)] "
                  src="${logo}">
                <h1 class="font-jersey text-[80px] text-[#EEEEEEcc]  drop-shadow-[0_5px_5px_rgba(0,0,0,0.9)]">welcome back</h1> 
            </div>
            <form class="flex flex-col w-full h-full ml-[70px] ">
              <label type="text" class="text-[#EEEEEEcc] font-jersey text-[30px]" for="email">Your email :</label>
              <input id="email_login" class=" rounded-[10px] border-[0.4px] pl-[10px]  placeholder-[#EEEEEEcc] border-[#EEEEEEcc] w-[360px] h-[50px] focus:outline-none focus:border-0 focus:ring-2 focus:ring-[#950101] ">
              <label class="text-[#EEEEEEcc] font-jersey text-[30px] mt-[20px] " for="password">Your password :</label>
              <input id="password_login" type="password" class=" rounded-[10px] border-[0.4px] pl-[10px]  border-[#EEEEEEcc] w-[360px] h-[50px] focus:outline-none focus:border-0 focus:ring-2 focus:ring-[#950101] ">
            </form>        
        </div>
        <div class="w-full h-full bg-amber-500 rounded-[50px]"> omar</div>
  </div>
  `
  ;
}
