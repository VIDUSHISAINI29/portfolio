<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

import { useGlobalStore } from "@/stores/global";
const global = useGlobalStore();

function displayMenubar() {
   global.isMenuBarVisible = !global.isMenuBarVisible;
   console.log(global.isMenuBarVisible);
}
function displayMenubarFalse() {
   global.isMenuBarVisible = false;
   console.log(global.isMenuBarVisible);
}

const isHighlighted = ref(false);
const isLogoHovered = ref(false);

function highlight() {
   setInterval(() => {
      isHighlighted.value = !isHighlighted.value;
   }, 1000);
}

function animateLogoMouseOver() {
   isLogoHovered.value = true;
}
function animateLogoMouseOut() {
   isLogoHovered.value = false;
}

highlight();

const frontendSkillsImgArray = [
   "/Images/htm.png",
   "/Images/css.png",
   "/Images/js.png",
   "/Images/bs.png",
   "/Images/tailwind.png",
   "/Images/vuejs.png",
];
const frotendSkillsNamesArray = [
   "HTML",
   "CSS",
   "Javascript",
   "Bootstrap",
   "Tailwind",
   "Vuejs",
];

const backendSkillsImgArray = [
   "/Images/pg.png",
   "/Images/duckdb.png",
   "/Images/python.png",
   "/Images/dbeaver.png",
   "/Images/nodejs.png",
];
const backendSkillsNamesArray = [
   "PgSql",
   "Duckdb",
   "Python",
   "Dbeaver",
   "Nodejs",
];

const form = ref({
   name: "",
   email: "",
   message: "",
});
const statusMessage = ref("");

function sendEmail() {
   emailjs
      .send(
         "service_xkgfmnh",
         "template_yskfgsl",
         {
            from_name: form.value.name,
            from_email: form.value.email,
            message: form.value.message,
         },
         "YqUOTxOFSO_7y80hb",
      )
      .then(
         (response) => {
            console.log("SUCCESS!", response.status, response.text);
            statusMessage.value = "Message sent successfully!";
            form.value.name = "";
            form.value.email = "";
            form.value.message = "";
         },
         (error) => {
            console.error("FAILED...", error);
            statusMessage.value = "Failed to send message. Please try again.";
         },
      );
}
</script>

<template>
   <div>
      <div
         class="tw-flex tw-flex-col  tw-select-none tw-items-center tw-justify-center tw-bg-[#212121]">
         <div class="tw-relative tw-flex tw-w-full tw-flex-col">
            <div
               v-if="global.isMenuBarVisible"
               class="tw-fixed tw-top-0 tw-z-50 tw-flex tw-h-[60%] tw-w-full tw-flex-col tw-gap-4 tw-bg-gradient-to-br tw-from-[#e38007] tw-via-[#e75334] tw-to-[#d11f59] tw-p-2 tw-transition-all">
               <div class="tw-flex tw-justify-end">
                  <i
                     @click="displayMenubar"
                     class="cross ri-close-line tw-h-7 tw-w-7 tw-text-center tw-text-3xl tw-text-white"></i>
               </div>
               <div
                  class="tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center">
                  <span
                     class="tw-w-full tw-border-b-2 tw-border-white tw-p-2 tw-text-center tw-text-lg tw-font-bold tw-leading-none tw-text-white sm:tw-text-xl">
                     Skills
                  </span>
                  <span
                     class="tw-w-full tw-border-b-2 tw-border-white tw-p-2 tw-text-center tw-text-lg tw-font-bold tw-leading-none tw-text-white sm:tw-text-xl">
                     Education
                  </span>
                  <span
                     class="tw-w-full tw-border-b-2 tw-border-white tw-p-2 tw-text-center tw-text-lg tw-font-bold tw-leading-none tw-text-white sm:tw-text-xl">
                     Projects
                  </span>
                  <span
                     class="tw-w-full tw-border-b-2 tw-border-white tw-p-2 tw-text-center tw-text-lg tw-font-bold tw-leading-none tw-text-white sm:tw-text-xl">
                     Contacts
                  </span>

                  <button
                     @click="logout"
                     class="tw-w-full tw-border-b-2 tw-border-white tw-p-2 tw-text-center tw-text-lg tw-font-bold tw-leading-none tw-text-white sm:tw-text-xl">
                     Logout
                  </button>
               </div>
            </div>

            <div
               @click="displayMenubarFalse"
               v-if="global.isMenuBarVisible"
               class="overlay tw-fixed tw-bottom-0 tw-z-10 tw-h-[40%] tw-w-full tw-bg-white tw-bg-opacity-50 tw-transition-transform"></div>
         </div>

         <div
            class="tw-w-[300px ] tw-flex tw-flex-col tw-items-center tw-bg-[#212121] sm:tw-w-[95%] ">
            <!-- # Navbar Begin -->

            <div
               class="tw-relative tw-my-1 tw-px-3 tw-flex tw-w-full tw-items-center tw-justify-between">
               <div
                  @mouseout="animateLogoMouseOut"
                  @mouseover="animateLogoMouseOver"
                  class="tw-group tw-flex tw-flex-col">
                  <span
                     class="tw-cursor-pointer tw-bg-gradient-to-br tw-from-[#e38007] tw-via-[#e75334] tw-to-[#d11f59] tw-bg-clip-text tw-text-xl tw-font-bold tw-leading-none tw-text-transparent sm:tw-text-3xl md:tw-text-4xl">
                     Vidushi
                     <span
                        class="md:tw-text-3 xl tw-text-lg tw-font-bold tw-text-white">
                        .
                     </span>
                  </span>
                  <span
                     class="tw-absolute tw-bottom-0 tw-left-0 tw-h-[2px] tw-w-0 tw-bg-white tw-transition-all tw-duration-500 tw-ease-in-out group-hover:tw-w-20 md:group-hover:tw-w-36"></span>
               </div>
               <div
                  class="tw-hidden md:tw-w-[50%] md:tw-gap-6   lg:tw-w-[50%] tw-items-center  lg:tw-gap-10 tw-text-lg tw-font-semibold tw-text-white md:tw-flex tw-justify-between">
               <div class="tw-hidden md:tw-w-[60%] md:tw-gap-6   lg:tw-w-[50%] tw-items-center  lg:tw-gap-10 tw-text-lg tw-font-semibold tw-text-white md:tw-flex">
                  <div class="tw-flex tw-flex-col tw-relative tw-group tw-cursor-pointer">
                  <span class="hover:tw-text-[#e38007] tw-transition-all tw-duration-500">Skills</span>
                  <span
                  class="tw-absolute tw-bottom-0 tw-left-0 tw-h-[2px] tw-w-0 tw-bg-[#e38007] tw-transition-all tw-duration-500 tw-ease-in-out group-hover:tw-w-20 md:group-hover:tw-w-12"></span>
                 </div>
                 <div class="tw-flex tw-flex-col tw-relative tw-group tw-cursor-pointer">
                  <span class="hover:tw-text-[#e38007] tw-transition-all tw-duration-500">Education</span>
                  <span
                  class="tw-absolute tw-bottom-0 tw-left-0 tw-h-[2px] tw-w-0 tw-bg-[#e38007] tw-transition-all tw-duration-500 tw-ease-in-out group-hover:tw-w-20 md:group-hover:tw-w-[84px]"></span>
                 </div>
                 <div class="tw-flex tw-flex-col tw-relative tw-group tw-cursor-pointer">
                  <span class="hover:tw-text-[#e38007] tw-transition-all tw-duration-500">Projects</span>
                  <span
                  class="tw-absolute tw-bottom-0 tw-left-0 tw-h-[2px] tw-w-0 tw-bg-[#e38007] tw-transition-all tw-duration-500 tw-ease-in-out group-hover:tw-w-20 md:group-hover:tw-w-[68px]"></span>
                 </div>
                 <div class="tw-flex tw-flex-col tw-relative tw-group tw-cursor-pointer">
                  <span class="hover:tw-text-[#e38007] tw-transition-all tw-duration-500">Contacts</span>
                  <span
                  class="tw-absolute tw-bottom-0 tw-left-0 tw-h-[2px] tw-w-0 tw-bg-[#e38007] tw-transition-all tw-duration-500 tw-ease-in-out group-hover:tw-w-20 md:group-hover:tw-w-[76px]"></span>
                 </div>
               </div>
                 <div class="">
                  
                  <span class=" tw-cursor-pointer tw-bg-gradient-to-br tw-from-[#e38007] tw-via-[#e75334] tw-to-[#d11f59] tw-text-white tw-py-2 tw-px-3 tw-rounded-md">Logout</span>
                 </div>

               </div>
               <div
                  @click="displayMenubar"
                  class="tw-text-2xl tw-text-white sm:tw-text-3xl md:tw-hidden">
                  <i class="ri-menu-3-line"></i>
               </div>
            </div>

            <!-- # Navbar Ended -->

            <!-- # Hero section with image and about headings Begin -->

            <div
               class="hero1 tw-m-10 tw-flex tw-w-full tw-flex-col tw-items-center tw-p-2 sm:tw-flex-row sm:tw-gap-20">
               <div
                  class="tw-flex tw-w-[240px] tw-items-center tw-justify-center tw-rounded-2xl tw-bg-white tw-bg-opacity-10 tw-p-1 sm:tw-w-full sm:tw-py-12">
                  <div
                     :class="[
                        'image-container tw-flex tw-h-[220px] tw-w-[220px] tw-items-center tw-justify-center tw-rounded-[50%] tw-p-2 tw-py-2 tw-transition tw-duration-500',
                        isHighlighted ? 'tw-bg-[#e38007]' : '',
                     ]">
                     <img
                        class="tw-h-52 tw-w-52 tw-rounded-[50%]"
                        src="/Images/_VIDUSHI_SAINI.jpg"
                        alt="" />
                  </div>
               </div>
               <div
                  class="tw-mt-6 tw-flex tw-w-[240px] tw-flex-col sm:tw-w-full">
                  <span class="tw-flex tw-text-gray-300 sm:tw-text-lg">
                     Hey! I am
                     <span
                        class="tw-ml-1 tw-hidden tw-bg-gradient-to-br tw-from-[#e38007] tw-via-[#e75334] tw-to-[#d11f59] tw-bg-clip-text tw-text-4xl tw-font-bold tw-leading-none tw-text-transparent md:tw-flex md:tw-text-2xl">
                        VIDUSHI
                     </span>
                     <span class="md:tw-hidden">Vidushi,</span>
                  </span>
                  <span
                     class="tw-bg-gradient-to-br tw-from-[#e38007] tw-via-[#e75334] tw-to-[#d11f59] tw-bg-clip-text tw-text-4xl tw-font-bold tw-leading-none tw-text-transparent md:tw-text-5xl lg:tw-text-6xl">
                     Fullstack Web Developer,
                  </span>
                  <span class="tw-flex tw-text-gray-300 sm:tw-text-lg">
                     I blend creativity with code, crafting seamless
                     interactions and powerful backend solutions to bring ideas
                     into life.
                  </span>
               </div>
            </div>

            <!-- # Hero section with image and about headings Ended -->

            <!-- # Skills section  Begin -->

            <div
               class="tw-flex tw-w-4/5 tw-flex-col tw-items-center sm:tw-w-full">
               <div
                  class="tw-group tw-relative tw-flex  tw-w-11/12 tw-rounded-lg tw-bg-white tw-bg-opacity-10 tw-p-1 tw-text-2xl tw-font-semibold tw-text-[#e75334] sm:tw-w-full md:tw-py-3 md:tw-text-4xl">
                  <span class="tw-ml-3 tw-cursor-pointer">Skills</span>
                  <span
                     class="tw-absolute tw-bottom-0 tw-left-0 tw-mb-1 tw-ml-[17px] tw-h-[2px] tw-w-0 tw-bg-[#e38007] tw-transition-all tw-duration-500 tw-ease-in-out group-hover:tw-w-14 md:group-hover:tw-w-20"></span>
               </div>

               <!-- #Frontend Skills -->

               <span
                  class="tw-mt-2 tw-text-base tw-font-semibold tw-text-gray-400 md:tw-my-10 md:tw-text-2xl">
                  Fronted Skills
               </span>
               <div
                  class="tw-mx-1 tw-my-4 tw-flex tw-w-4/5 tw-flex-wrap tw-justify-center tw-gap-12 md:tw-w-[700px] md:tw-justify-around md:tw-gap-20">
                  <div
                     v-for="(link, index) in frontendSkillsImgArray"
                     :key="inded"
                     class="tw-relative tw-flex tw-h-[65px] tw-w-[65px] tw-cursor-pointer tw-flex-col tw-items-center tw-justify-center md:tw-h-32 md:tw-w-32">
                     <div
                        class="tw-absolute tw-h-full tw-w-full tw-border tw-border-[#e38007] tw-transition-transform tw-duration-500 tw-ease-in-out hover:tw-rotate-45"></div>
                     <img
                        class="tw-h-9 tw-w-9 tw-p-[2px] md:tw-h-[70px] md:tw-w-[70px] md:tw-p-1"
                        @mouseover=""
                        :src="link"
                        alt="" />
                     <span class="tw-text-[10px] tw-text-white md:tw-text-lg">
                        {{ frotendSkillsNamesArray[index] }}
                     </span>
                  </div>
               </div>

               <!-- #Backend Skills -->

               <span
                  class="m tw-m-3 tw-text-base tw-font-semibold tw-text-gray-400 md:tw-my-10 md:tw-text-2xl">
                  Backend Skills
               </span>
               <div
                  class="tw-mx-1 tw-my-4 tw-flex tw-w-4/5 tw-flex-wrap tw-justify-center tw-gap-12 md:tw-w-[700px] md:tw-justify-around md:tw-gap-20">
                  <div
                     v-for="(link, index) in backendSkillsImgArray"
                     :key="inded"
                     class="tw-relative tw-flex tw-h-[65px] tw-w-[65px] tw-cursor-pointer tw-flex-col tw-items-center tw-justify-center md:tw-h-32 md:tw-w-32">
                     <div
                        class="tw-absolute tw-h-full tw-w-full tw-border tw-border-[#e38007] tw-transition-transform tw-duration-500 tw-ease-in-out hover:tw-rotate-45"></div>
                     <img
                        class="tw-h-9 tw-w-9 tw-p-[2px] md:tw-h-[70px] md:tw-w-[70px] md:tw-p-1"
                        @mouseover=""
                        :src="link"
                        alt="" />
                     <span class="tw-text-[10px] tw-text-white md:tw-text-lg">
                        {{ backendSkillsNamesArray[index] }}
                     </span>
                  </div>
               </div>
            </div>

            <!--# Skills Section Ended -->

            <!--# Educations Section Begin -->

            <div
               class="tw-mt-12 tw-flex tw-w-4/5 tw-flex-col tw-items-center sm:tw-w-full">
               <div
                  class="tw-group tw-relative tw-mb-6 tw-flex  tw-w-11/12 tw-rounded-lg tw-bg-white tw-bg-opacity-10 tw-p-1 tw-text-2xl tw-font-semibold tw-text-[#e38007] sm:tw-w-full md:tw-py-3 md:tw-text-4xl">
                  <span class="tw-ml-3 tw-cursor-pointer">Educations</span>
                  <span
                     class="tw-absolute tw-bottom-0 tw-left-0 tw-mb-1 tw-ml-[17px] tw-h-[2px] tw-w-0 tw-bg-[#e75334] tw-transition-all tw-duration-500 tw-ease-in-out group-hover:tw-w-[118px] md:group-hover:tw-w-44"></span>
               </div>

               <ul
                  class="tw-flex tw-w-4/5 tw-list-disc tw-flex-col tw-gap-5 tw-text-gray-300">
                  <div>
                     <li class="tw-text-lg tw-font-semibold md:tw-text-2xl">
                        BCA
                     </li>
                     <span class="tw-text-[12px] md:tw-text-lg">
                        Currently Pursuing (IITM Murthal, Sonipat, Haryana)
                     </span>
                  </div>

                  <div>
                     <li class="tw-text-lg tw-font-semibold md:tw-text-2xl">
                        12th Science (Maths)
                     </li>
                     <span class="tw-text-[12px] md:tw-text-lg">
                        J.N.V Saharanpur (2023-24)
                        <br />
                        Score: 92.67%
                     </span>
                  </div>

                  <div>
                     <li class="tw-text-lg tw-font-semibold md:tw-text-2xl">
                        10th
                     </li>
                     <span class="tw-text-[12px] md:tw-text-lg">
                        J.N.V Saharanpur (2021-22)
                        <br />
                        Score: 95.67%
                     </span>
                  </div>
               </ul>
            </div>

            <!--# Educations Section Ended -->

            <!--# Projects Section Begin -->

            <div
               class="tw-m-4 tw-mt-8 tw-flex tw-w-4/5 tw-flex-col tw-items-center sm:tw-w-full">
               <div
                  class="tw-group tw-relative tw-m-2 tw-flex  tw-w-11/12 tw-rounded-lg tw-bg-white tw-bg-opacity-10 tw-p-1 tw-text-2xl tw-font-semibold tw-text-[#e38007] sm:tw-w-full md:tw-py-3 md:tw-text-4xl">
                  <span class="tw-ml-3 tw-cursor-pointer">Projects</span>
                  <span
                     class="tw-absolute tw-bottom-0 tw-left-0 tw-mb-1 tw-ml-[17px] tw-h-[2px] tw-w-0 tw-bg-[#e75334] tw-transition-all tw-duration-500 tw-ease-in-out group-hover:tw-w-[118px] md:group-hover:tw-w-32"></span>
               </div>
            </div>

            <!--# Contact Section Begin -->

            <div
               class="tw-m-4 tw-mt-8 tw-flex tw-w-4/5 tw-flex-col tw-items-center sm:tw-w-full">
               <div
                  class="tw-group tw-relative tw-m-2 tw-flex tw-w-11/12 tw-rounded-lg tw-bg-white tw-bg-opacity-10 tw-p-1 tw-text-2xl tw-font-semibold tw-text-[#e38007] sm:tw-w-full md:tw-py-3 md:tw-text-4xl">
                  <span class="tw-ml-3 tw-cursor-pointer">Contact Us</span>
                  <span
                     class="tw-absolute tw-bottom-0 tw-left-0 tw-mb-1 tw-ml-[17px] tw-h-[2px] tw-w-0 tw-bg-[#e75334] tw-transition-all tw-duration-500 tw-ease-in-out group-hover:tw-w-[118px] md:group-hover:tw-w-44"></span>
               </div>


                  
               <div
                  class="tw-flex tw-w-4/5 md:tw-w-4/5 tw-flex-col tw-my-8 md:tw-my-16 tw-justify-center md:tw-items-start tw-gap-10 md:tw-gap-28 md:tw-flex md:tw-flex-row ">
                  
                  <form
                     class="tw-flex tw-w-[200px] tw-flex-col tw-items-center  tw-gap-5 tw-p-2 sm:tw-w-80"
                     @submit.prevent="sendEmail"
                     id="contactForm">
                     <input
                        class="tw-w-full tw-rounded-sm tw-border tw-border-[#e38007] tw-bg-[#212121] tw-p-1 tw-text-[#e38007] tw-outline-none"
                        type="text"
                        v-model="form.name"
                        placeholder="Your Name"
                        required />
                     <input
                        class="tw-w-full tw-rounded-sm tw-border tw-border-[#e38007] tw-bg-[#212121] tw-p-1 tw-text-[#e38007] tw-outline-none"
                        type="email"
                        v-model="form.email"
                        placeholder="Your Email"
                        required />
                     <textarea
                        class="tw-w-full tw-rounded-sm tw-border tw-border-[#e38007] tw-bg-[#212121] tw-p-1 tw-text-[#e38007] tw-outline-none"
                        v-model="form.message"
                        placeholder="Your Message"
                        required></textarea>
                     <button
                        class="tw-w-32 tw-rounded-lg tw-border-[#e38007] tw-bg-white tw-bg-opacity-10 tw-p-1 tw-text-[#e38007] tw-outline-none tw-transition-all tw-duration-500 hover:tw-bg-[#e38007] hover:tw-text-white"
                        type="submit">
                        Send Message
                     </button>
                  </form>
                  <div
                     class="tw-my-1 tw-flex tw-w-1/2 tw-flex-col  tw-gap-1 tw-text-sm md:tw-text-base">
                     <div
                        class="tw-flex tw-cursor-pointer tw-border-b tw-border-[#e38007]  tw-w-[230px] tw-items-center tw-gap-1 tw-text-gray-100 hover:tw-text-[#e38007]">
                        <a href="https://github.com/VIDUSHISAINI29">
                           <i
                              class="ri-github-fill tw-text-xl tw-transition-all tw-duration-300 md:tw-text-3xl"></i>
                        </a>

                        <a
                           class="tw-font-semibold tw-transition-all tw-duration-300"
                           href="https://github.com/VIDUSHISAINI29">
                           Github
                        </a>
                     </div>
                     <div
                        class="tw-flex tw-cursor-pointer tw-border-b tw-border-[#e38007]  tw-w-[230px] tw-items-center tw-gap-1 tw-text-gray-100 hover:tw-text-[#e38007]">
                        <a
                           href="https://www.linkedin.com/in/vidushi-saini-436053204/">
                           <i
                              class="ri-linkedin-box-fill tw-text-xl tw-transition-all tw-duration-300 md:tw-text-3xl"></i>
                        </a>

                        <a
                           class="tw-font-semibold tw-transition-all tw-duration-300"
                           href="https://www.linkedin.com/in/vidushi-saini-436053204/">
                           Linkedin
                        </a>
                     </div>
                     <div
                        class="tw-flex tw-cursor-pointer tw-border-b tw-border-[#e38007]  tw-w-[230px]  tw-items-center tw-gap-1 tw-text-gray-100 hover:tw-text-[#e38007]">
                        <i
                           class="ri-phone-fill tw-text-lg tw-transition-all tw-duration-300 md:tw-text-2xl"></i>

                        <span
                           class="tw-font-semibold tw-transition-all tw-duration-300">
                           90849-89020
                        </span>
                     </div>
                     <div
                        class="tw-flex tw-cursor-pointer tw-border-b tw-border-[#e38007] tw-w-[230px]  tw-items-center tw-gap-1 tw-text-gray-100 hover:tw-text-[#e38007]">
                        <i
                           class="ri-mail-fill tw-text-lg tw-transition-all tw-duration-300 md:tw-text-2xl"></i>

                        <span
                           class="tw-font-semibold tw-transition-all tw-duration-300">
                           work.vidushi.s@gmail.com
                        </span>
                     </div>
                  </div>


               </div>

               <span class="tw-text-white">{{ statusMessage }}</span>
            </div>

            <!--# Contact Section Ended -->
         </div>
      </div>
      <div class="tw-h-10 tw-bg-[#212121]"></div>
   </div>
</template>

<style scoped>
/* .image-container {
  transition: background-color 0.5s ease-in-out; 
} */

/* .highlighted {
  background-color: #e38007;
} */

/* .image-container {
  position: relative;
}

.image-container::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  width: 240px;
  height: 240px;
  border: 5px solid transparent;
  border-top-color: #e38007;
  border-radius: 50%;
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
} */

/* 
.image-container {
  position: relative;
}

.image-container::before,
.image-container::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #e38007;
  border-radius: 50%;
}

.image-container::before {
  animation: rotateBefore 2s linear infinite;
}

.image-container::after {
  animation: rotateAfter 2s linear infinite;
}

@keyframes rotateBefore {
  0% { transform: rotate(0deg) translate(100px); }
  100% { transform: rotate(360deg) translate(100px); }
}

@keyframes rotateAfter {
  0% { transform: rotate(180deg) translate(100px); }
  100% { transform: rotate(540deg) translate(100px); }
} */
</style>
