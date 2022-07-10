<template>
  <div class="landing-page">
    <nav class="w-screen z-50 px-2 sm:px-4 py-2.5 bg-gray-800">
      <div
        class="container flex flex-wrap justify-between items-center mx-auto"
      >
        <a href="#" class="flex items-center">
          <img
            src="@/assets/image/logo.png"
            class="mr-3 h-6 sm:h-9"
            alt="Logo"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap text-white"
            >Dagim Shimelis</span
          >
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden "
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <!-- <span class="sr-only">Open main menu</span> -->
          <svg
            @click="toggleShow"
            class="w-6 h-6"
            :class="!hidden ? 'hidden' : ''"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            @click="toggleShow"
            class="w-6 h-6"
            :class="hidden ? 'hidden' : ''"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          class="w-full md:block md:w-auto"
          :class="hidden ? 'hidden' : ''"
          id="mobile-menu"
        >
          <ul
            class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
          >
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 border-t md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                aria-current="page"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#about"
                class="block py-2 pr-4 pl-3 border-t md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >About</a
              >
            </li>
            <li>
              <a
                href="#projects"
                class="block py-2 pr-4 pl-3 border-t md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >Projects</a
              >
            </li>
            <li>
              <a
                href="#tools"
                class="block py-2 pr-4 pl-3 border-t md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >Tools</a
              >
            </li>
            <li>
              <a
                href="#contact"
                class="block py-2 pr-4 pl-3 border-t md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <header class="w-screen">
      <!--        hero pic and content -->
      <div
        class="hero w-screen h-[auto] min-h-screen md:h-[100vh] grid grid-rows-2 md:grid-cols-2 md:mt-[20vh] -mt-[10vh] md:ml-24"
        id="hero"
      >
        <div
          class="row-span-1 row-start-2 row-end-2 md:row-start-auto md:row-end-auto"
        >
          <div
            class="relative sm:-top-[10vh] md:-top-[40vh] overflow-y-visible z-10"
          >
            <img
              class="relative left-0 top-0"
              src="@/assets/image/mac-box.jpg"
              alt="mac-pc"
              width="100%"
              height="100%"
            />
            <img
              class="absolute left-0 top-0 ease-in-out duration-1000 overflow-hidden cutout1"
              src="@/assets/image/binary-cutout.png"
              alt="mac-pc-screen"
              width="100%"
              height="100%"
            />
            <img
              class="absolute left-0 top-0 ease-in-out duration-1000 overflow-hidden cutout2"
              src="@/assets/image/code-cutout.png"
              alt="mac-pc-screen"
              width="100%"
              height="100%"
            />
            <img
              class="absolute left-0 top-0 ease-in-out duration-1000 overflow-hidden cutout3"
              src="@/assets/image/project-cutout.png"
              alt="mac-pc-screen"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div class="mx-auto z-30 mt-52 md:mt-24 md:ml-28 2xl:ml-40">
          <div class="">
            <div
              class="hero-title-nbr text-primaryTextWhite md:text-2xl ease duration-1000 text-xl font-md self-center overflow-hidden"
            ></div>
            <h1
              class="hero-title w-[60vw] text-primaryTextWhite text-7xl text-left my-6"
            >
              Dagim Shimelis
            </h1>
          </div>

          <div
            class="text-left md:ml-0 text-primaryTextWhite text-2xl flex flex-col align-center self-center w-fit h-[5vh]"
          >
            I provide services in
            <spam
              class="mt-2 hero-services whitespace-pre text-transparent relative block h-[7vh] overflow-visible uppercase"
              >______________________</spam
            >
          </div>
          <a href="https://mailxto.com/47ayns" target="_blank">
            <button
              class="hero-btn ml-20 md:ml-0 uppercase cursor-pointer outline-none border-2 border-primaryTextTheme px-6 rounded-md text-xl text-primaryTextTheme border-solid mt-12 hover:text-primaryTextBlack hover:bg-primaryTextTheme"
            >
              Let's Talk
            </button></a
          >
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from "vue";

const hidden = ref(true);

const toggleShow = () => {
  hidden.value = hidden.value ? false : true;
};
</script>
