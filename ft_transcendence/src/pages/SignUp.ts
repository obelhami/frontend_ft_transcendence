import logo from "../images/download.svg";
import signup from "../images/signup_image.png";



export default function SignUp() {
  return `
    <div class="w-full h-full bg-gradient-to-l from-[#222831] to-[#393E46] rounded-[50px] border-[0.1px] border-[#eeeeee2c] flex justify-start items-center gap-[10px]">
        <img class="w-[566px] H-[547px] ml-[30px]"
          src="${signup}"> 
        <div class="w-full h-full flex flex-col justify-start items-center ">
            <div class=" w-full h-[193px] flex justify-start items-center  flex gap-[30px]">
                <img href="/home" data-link class="w-[50px] h-[56.76px] drop-shadow-[0_5px_5px_rgba(0,0,0,0.9)] "
                  src="${logo}">
                <h1 class="font-jersey text-[80px] text-[#EEEEEEcc]  drop-shadow-[0_5px_5px_rgba(0,0,0,0.9)]">Sign up</h1> 
            </div>
            <form class="w-full flex flex-col mt-[-40px]">
            
              <!-- First Name -->
              <div class="flex gap-[30px]">
              <div class="flex flex-col ">
                <label class="text-[#EEEEEEcc]  font-jersey text-[30px]" for="firstName">First Name :</label>
                <input id="firstName" type="text" name="firstName"
                  class="h-[50px] w-[220px] rounded-[10px] border-[0.4px] border-[#EEEEEE60] text-[#EEEEEEcc] placeholder-[#EEEEEEcc] focus:outline-none focus:border-0 focus:ring-2 focus:ring-[#950101] pl-[10px] ">
              </div>
            
              <!-- Last Name -->
              <div class="flex flex-col ">
                <label class="text-[#EEEEEEcc] font-jersey text-[30px]" for="lastName">Last Name :</label>
                <input id="lastName" type="text" name="lastName"
                  class="h-[50px] w-[220px] rounded-[10px] border-[0.4px] border-[#EEEEEE60] text-[#EEEEEEcc] placeholder-[#EEEEEEcc] focus:outline-none focus:border-0 focus:ring-2 focus:ring-[#950101] pl-[10px]  ">
              </div>
              </div>
              <!-- Email -->
              <div class="flex flex-col ">
                <label class="text-[#EEEEEEcc] mt-[10px] font-jersey text-[30px]" for="email">Email :</label>
                <input id="email" type="email" name="email"
                  class="h-[50px] w-[470px] rounded-[10px] border-[0.4px] border-[#EEEEEE60] text-[#EEEEEEcc] placeholder-[#EEEEEEcc] focus:outline-none focus:border-0 focus:ring-2 focus:ring-[#950101] pl-[10px] ">
              </div>
            
              <!-- Password -->
              <div class="flex flex-col ">
                <label class="text-[#EEEEEEcc] mt-[10px] font-jersey text-[30px]" for="password">Password :</label>
                <input id="password" type="password" name="password"
                  class="h-[50px] w-[470px] rounded-[10px] border-[0.4px] border-[#EEEEEE60] text-[#EEEEEEcc] placeholder-[#EEEEEEcc] focus:outline-none focus:border-0 focus:ring-2 focus:ring-[#950101] pl-[10px] ">
              </div>
            
              <!-- Confirm Password -->
              <div class="flex flex-col ">
                <label class="text-[#EEEEEEcc] mt-[10px] font-jersey text-[30px]" for="confirmPassword">Confirm Password :</label>
                <input id="confirmPassword" type="password" name="confirmPassword"
                  class="h-[50px] w-[470px] rounded-[10px] border-[0.4px] border-[#EEEEEE60] text-[#EEEEEEcc] placeholder-[#EEEEEEcc] focus:outline-none focus:border-0 focus:ring-2 focus:ring-[#950101] pl-[10px] ">
              </div>
            
              <!-- Submit Button -->
              <button type="submit"
                      class="font-jersey text-[24px] border-[0.5px] flex justify-center items-center 
                      px-6 py-3 bg-gradient-to-r from-[#950101] via-[#222831] via-[#222831] to-[#950101] bg-[length:200%_100%]  
                      bg-left hover:bg-right transition-[background-position] duration-500 ease-in-out 
                      w-[470px] h-[50px] rounded-[10px] text-[#EEEEEEcc] border-[0.5px] border-[#EEEEEE60] mt-[30px] ">          
                    Sign Up
              </button>
            </form>
            <p class="flex items-start justify-start w-full mt-[5px] font-jersey text-[20px] text-[#EEEEEEcc]">Already have an account?  <a href="/login" data-link class="underline hover:text-[#950101] transition-all duration-300 "> Login</a></p>
        </div>
    </div>
  `;
}
