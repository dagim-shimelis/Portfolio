<template>
  <div class="tool-list-title title" id="tools"></div>
  <div class="tools-page">
    <div class="tools-pic">
      <img
        class="t-pic"
        src="@/assets/image/pic2.jpg"
        alt="tools"
        width="100%"
        height="100%"
      />
    </div>
    <div class="tool-list-box">
      <div class="tool-list p-3 md:p-[3rem]">
        <p class="tool-list-desc">
          &emsp; This is some of the tools and programing languages I use to
          provide cutting edge products that fit the standards of any
          platform.
        </p>
        <!--        list of tools       -->
        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">HTML</div>
          <span
            class="iconify text-2xl col-span-2 md:col-span-1"
            data-icon="vscode-icons:file-type-html"
          ></span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 97%"
            ></div>
          </div>
        </div>
        <!-- ------- -->

        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">CSS</div>
          <span
            class="iconify text-2xl col-span-2 md:col-span-1"
            data-icon="vscode-icons:file-type-css"
          ></span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 95%"
            ></div>
          </div>
        </div>
        <!-- ------- -->
        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">JavaScript</div>
          <span
            class="iconify text-2xl col-span-2 md:col-span-1"
            data-icon="vscode-icons:file-type-js"
          ></span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 95%"
            ></div>
          </div>
        </div>
        <!-- ------- -->
        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">VueJs</div>
          <span
            class="iconify text-2xl col-span-2 md:col-span-1"
            data-icon="vscode-icons:file-type-vue"
          ></span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 90%"
            ></div>
          </div>
        </div>
        <!-- ------- -->
        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">Tailwind</div>
          <span
            class="iconify text-2xl col-span-2 md:col-span-1"
            data-icon="vscode-icons:file-type-tailwind"
          ></span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 95%"
            ></div>
          </div>
        </div>
        <!-- ------- -->
        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">NodeJs</div>
          <span
            class="iconify text-2xl col-span-2 md:col-span-1"
            data-icon="logos:nodejs-icon"
          ></span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 87%"
            ></div>
          </div>
        </div>
        <!-- ------- -->
        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">Express</div>
          <span
            class="iconify text-xs self-center stroke-white col-span-2 md:col-span-1"
            data-icon="logos:express"
          ></span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 90%"
            ></div>
          </div>
        </div>
        <!-- ------- -->
        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">MongoDB</div>
          <span
            class="iconify text-2xl col-span-2 md:col-span-1"
            data-icon="vscode-icons:file-type-mongo"
          ></span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 85%"
            ></div>
          </div>
        </div>

        <!-- ------- -->
        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">Mongoose</div>
          <span class="text-2xl text-red-400 col-span-2 md:col-span-1 self-center">m.</span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 90%"
            ></div>
          </div>
        </div>

        <!-- ------- -->
        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">Electron</div>
          <span
            class="iconify text-lg col-span-2 md:col-span-1 self-center"
            data-icon="logos:electron"
          ></span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 80%"
            ></div>
          </div>
        </div>

        <!-- ------- -->
        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">C++</div>
          <span
            class="iconify text-2xl col-span-2 md:col-span-1 self-center"
            data-icon="logos:c-plusplus"
          ></span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 45%"
            ></div>
          </div>
        </div>
        <!-- ------- -->
        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">Java</div>
          <span
            class="iconify text-2xl col-span-2 md:col-span-1 self-center"
            data-icon="logos:java"
          ></span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 75%"
            ></div>
          </div>
        </div>
        <!-- ------- -->
        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">PHP</div>
          <span
            class="iconify text-lg col-span-2 md:col-span-1 self-center"
            data-icon="logos:php"
          ></span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 60%"
            ></div>
          </div>
        </div>

        <!-- ------- -->
        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">Git</div>
          <span
            class="iconify text-xl col-span-2 md:col-span-1 self-center"
            data-icon="logos:git-icon"
          ></span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 90%"
            ></div>
          </div>
        </div>

        <!-- ------- -->
        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">GitHub</div>
          <span
            class="iconify text-2xl col-span-2 md:col-span-1 fill-white self-center"
            data-icon="uil:github"
          ></span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 97%"
            ></div>
          </div>
        </div>
        <!-- ------- -->
        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">VsCode</div>
          <span
            class="iconify text-2xl col-span-2 md:col-span-1 fill-white self-center"
            data-icon="vscode-icons:file-type-vscode"
          ></span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 99%"
            ></div>
          </div>
        </div>
        <!-- ------- -->
        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">Postman</div>
          <span
            class="iconify text-2xl col-span-2 md:col-span-1 fill-white self-center"
            data-icon="logos:postman-icon"
          ></span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 90%"
            ></div>
          </div>
        </div>
        <!-- ------- -->
        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">Heroku</div>
          <span
            class="iconify text-2xl col-span-2 md:col-span-1 fill-white self-center"
            data-icon="cib:heroku"
          ></span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 88%"
            ></div>
          </div>
        </div>

        <!-- ------- -->
        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">Figma</div>
          <span
            class="iconify text-2xl col-span-2 md:col-span-1 fill-white self-center"
            data-icon="logos:figma"
          ></span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 88%"
            ></div>
          </div>
        </div>

        <!-- ------- -->
        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">Adobe Xd</div>
          <span
            class="iconify text-2xl col-span-2 md:col-span-1 fill-white self-center"
            data-icon="cib:adobe-xd"
          ></span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 88%"
            ></div>
          </div>
        </div>
        <!-- ------- -->
        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">
            Adobe Ps
          </div>
          <span
            class="iconify text-2xl col-span-2 md:col-span-1 fill-white self-center"
            data-icon="vscode-icons:file-type-photoshop"
          ></span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 88%"
            ></div>
          </div>
        </div>
        <!-- ------- -->
        <div class="grid grid-cols-12 gap-4 mt-3">
          <div class="mb-1 text-base font-medium col-span-3 md:col-span-2">
            Adobe Ai
          </div>
          <span
            class="iconify text-2xl col-span-2 md:col-span-1 self-center fill-white"
            data-icon="cib:adobe-illustrator"
          ></span>
          <div
            class="self-center w-full bg-gray-200 rounded-full h-2.5 col-span-7 md:col-span-9"
          >
            <div
              class="bg-primaryTextTheme h-2.5 rounded-full"
              style="width: 68%"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
