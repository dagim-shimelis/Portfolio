<template>
  <div class="">
    <div class="about-space"></div>
    <div
      class="relative w-screen md:h-screen md:grid md:grid-cols-2 min-h-[60vh] md:pl-16 block bg-contain"
    >
      <img
        class="plant-cutout"
        src="@/assets/image/plant-cutout.png"
        alt="plant"
      />
      <img class="macwall-cutout" src="@/assets/image/mac-wall2.jpg" alt="" />
      <div class="services-list-box !mt-5">
        <div class="services-list-sbox">
          <!--        list #1-->
          <div class="service-list slist1">
            <div class="slist-header" @click="choose('1')">
              <div class="slist-icon">
                <span class="iconify" data-icon="iconoir:info-empty"></span>
              </div>
              <div class="slist-title">Basic Information</div>
              <div class="slist-btn  !self-center">
                <button class="s-btn ">
                  <i class="fa fa-arrow-alt-circle-right"></i>
                </button>
              </div>
            </div>
          </div>

          <!--        list #2-->
          <div class="service-list slist2">
            <div class="slist-header" @click="choose('2')">
              <div class="slist-icon">
                <span class="iconify" data-icon="iconoir:book"></span>
              </div>
              <div class="slist-title">Education</div>
              <div class="slist-btn  !self-center">
                <button class="s-btn">
                  <i class="fa fa-arrow-alt-circle-right"></i>
                </button>
              </div>
            </div>
          </div>

          <!--        list #3-->
          <div class="service-list slist3">
            <div class="slist-header" @click="choose('3')">
              <div class="slist-icon">
                <span
                  class="iconify"
                  data-icon="iconoir:code-brackets-square"
                ></span>
              </div>
              <div class="slist-title">Programing Skills</div>
              <div class="slist-btn  !self-center">
                <button class="s-btn">
                  <i class="fa fa-arrow-alt-circle-right"></i>
                </button>
              </div>
            </div>
          </div>

          <!--        list #4-->
          <div class="service-list slist4">
            <div class="slist-header" @click="choose('4')">
              <div class="slist-icon">
                <span class="iconify" data-icon="iconoir:puzzle"></span>
              </div>
              <div class="slist-title">Tools</div>
              <div class="slist-btn  !self-center">
                <button class="s-btn">
                  <i class="fa fa-arrow-alt-circle-right"></i>
                </button>
              </div>
            </div>
          </div>

          <!--        list #5-->
          <div class="service-list slist5">
            <div class="slist-header" @click="choose('5')">
              <div class="slist-icon">
                <span class="iconify" data-icon="iconoir:heart"></span>
              </div>
              <div class="slist-title">Favorites</div>
              <div class="slist-btn  !self-center">
                <button class="s-btn">
                  <i class="fa fa-arrow-alt-circle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sevices-side-post">
        <div
          class="side-content scontent1"
          :class="chosenBox == 1 ? '!right-[10vw]' : '!-right-[60vw]'"
        >
          <div class="">
            <div class="slist-small-icon">
              <span
                class="iconify self-center"
                data-icon="iconoir:info-empty"
              ></span>
              <span class="self-center">Basic Information</span>
            </div>
            <div class="about__detail__header-underline"></div>
            <table id="about__detail__table">
              <tr class="about__detail__table__row">
                <th
                  class="about__detail__table__row_th border-r-2 pr-5 !font-light"
                >
                  Full Name
                </th>
                <td class="about__detail__table__row_td pl-5">
                  Dagim Shimelis Kifle
                </td>
              </tr>
              <tr class="about__detail__table__row">
                <th
                  class="about__detail__table__row_th border-r-2 pr-5 !font-light"
                >
                  Birth Date
                </th>
                <td class="about__detail__table__row_td pl-5">
                  Monday, Sep 5, 1999
                </td>
              </tr>
              <tr class="about__detail__table__row">
                <th
                  class="about__detail__table__row_th border-r-2 pr-5 !font-light"
                >
                  Birth Place
                </th>
                <td class="about__detail__table__row_td pl-5">
                  A/A, Ethiopia
                </td>
              </tr>
              <tr class="about__detail__table__row">
                <th
                  class="about__detail__table__row_th border-r-2 pr-5 !font-light"
                >
                  Nationality
                </th>
                <td class="about__detail__table__row_td pl-5">Ethiopian</td>
              </tr>
              <tr class="about__detail__table__row">
                <th
                  class="about__detail__table__row_th border-r-2 pr-5 !font-light"
                >
                  Live in
                </th>
                <td class="about__detail__table__row_td pl-5">A/A, Ethiopia</td>
              </tr>
              <tr class="about__detail__table__row">
                <th
                  class="about__detail__table__row_th border-r-2 pr-5 !font-light"
                >
                  Human Languages
                </th>
                <td class="about__detail__table__row_td pl-5">
                  Amharic, English
                </td>
              </tr>
              <tr class="about__detail__table__row">
                <th
                  class="about__detail__table__row_th border-r-2 pr-5 !font-light"
                >
                  Job Status
                </th>
                <td class="about__detail__table__row_td pl-5">Available</td>
              </tr>
            </table>
          </div>
        </div>
        <div
          class="side-content scontent2 md:-mt-8"
          :class="chosenBox == 2 ? '!right-[10vw]' : '!-right-[60vw]'"
        >
          <div class="">
            <div class="slist-small-icon">
              <span class="iconify self-center" data-icon="iconoir:book"></span>
              <span class="self-center">Education</span>
            </div>
            <div class="about__detail__header-underline"></div>
            <div class="about__detail__text">
              <h4 class="text-xl">Official</h4>
              <p class="about__detail__text__description">
                Graduated with a degree in software engineering from Addis Ababa
                Science & Technology University (AASTU).
              </p>
              <h4 class="text-xl">Self-Learning</h4>
              <p class="about__detail__text__description">
                I also picked up various tools, techniques, different programing
                languages, skills and practices by my self during the years in
                university.
              </p>
            </div>
          </div>
        </div>

        <div
          class="side-content scontent3"
          :class="chosenBox == 3 ? '!right-[10vw]' : '!-right-[60vw]'"
        >
          <div class="">
            <div class="slist-small-icon">
              <span
                class="iconify self-center"
                data-icon="iconoir:code-brackets-square"
              ></span>
              <span class="self-center">Programing Skills</span>
            </div>
            <div class="about__detail__header-underline"></div>
            <div class="about__detail__text">
              <h4>Good At</h4>
              <P class="about__detail__text__description">
                <span class="sep">|</span>
                Web (HTML & CSS)
                <br />
                <span class="sep">|</span>
                JavaScript
                <br />
                <span class="sep">|</span>
                VueJs
                <br />
                <span class="sep">|</span>
                NodeJs, Express
                <br />
                <span class="sep">|</span>
                MongoDB, Mongoose
                <br />
              </P>
              <h4>Working Knowledge</h4>
              <P class="about__detail__text__description">
                <span class="sep">|</span>
                Electron
                <br />
                <span class="sep">|</span>
                Java
                <br />
                <span class="sep">|</span>
                PHP
                <br />
                <span class="sep">|</span>
                C++
                <br />
              </P>
            </div>
          </div>
        </div>

        <div
          class="side-content scontent4"
          :class="chosenBox == 4 ? '!right-[10vw]' : '!-right-[60vw]'"
        >
          <div class="">
            <div class="slist-small-icon">
              <span
                class="iconify self-center"
                data-icon="iconoir:puzzle"
              ></span>
              <span class="self-center">Tools</span>
            </div>
            <div class="about__detail__header-underline"></div>
            <div class="about__detail__text">
              <h4>Good At</h4>
              <P class="about__detail__text__description">
                <span class="sep">|</span>
                Git, GitHub
                <br />
                <span class="sep">|</span>
                VsCode
                <br />
                <span class="sep">|</span>
                Figma, Adobe XD, Adobe PhotoShop
                <br />
                <span class="sep">|</span>
                Postman
                <br />
                <span class="sep">|</span>
                Heroku
                <br />
                <span class="sep">|</span>
                ClickUp
                <br />
              </P>
              <h4>Working Knowledge</h4>
              <P class="about__detail__text__description">
                <span class="sep">|</span>
                Adobe Illustrator
                <br />
                <span class="sep">|</span>
                GitLens
                <br />
              </P>
            </div>
          </div>
        </div>

        <div
          class="side-content scontent5"
          :class="chosenBox == 5 ? '!right-[10vw]' : '!-right-[60vw]'"
        >
          <div class="">
            <div class="slist-small-icon">
              <span
                class="iconify self-center"
                data-icon="iconoir:heart"
              ></span>
              <span class="self-center">Favorite</span>
            </div>
            <div class="about__detail__header-underline"></div>
            <div class="about__detail__text">
              <h4>Programing Language</h4>
              <P class="about__detail__text__description">
                <span class="sep">|</span>
                JavaScript
              </P>
              <h4>Area of Development</h4>
              <P class="about__detail__text__description">
                <span class="sep">|</span>
                API Development
              </P>
              <h4>Project</h4>
              <P class="about__detail__text__description">
                <span class="sep">|</span>
                ZENA News-Network
              </P>
              <h4>Entertainment</h4>
              <P class="about__detail__text__description">
                <span class="sep">|</span>
                Music
              </P>
            </div>
          </div>
        </div>
      </div>
      <!--------------------########################---FOR MOBILE VIEW---------------------------------  -->
    
      <div class="service-content-phone">
        <!--        list #1-->
        <button @click="show('0')" class="accordion slist-header slist1">
          <div class="slist-icon-phone">
            <span class="iconify" data-icon="iconoir:info-empty"></span>
          </div>
          <div class="slist-title">Basic Information</div>
          <div class="slist-btn  !self-center">
            <div class="s-btn">
              <i class="fa fa-arrow-alt-circle-right"></i>
            </div>
          </div>
        </button>
        <div :class="shownBox[0] ? 'show' : ''" class="panel">
          <div class="side-content-p">
            <div class="">
              <div class="slist-small-icon">
                <span
                  class="iconify self-center"
                  data-icon="iconoir:info-empty"
                ></span>
                <span class="self-center">Basic Information</span>
              </div>
              <div class="about__detail__header-underline"></div>
              <table id="about__detail__table">
                <tr class="about__detail__table__row">
                  <th
                    class="about__detail__table__row_th border-r-2 pr-5 !font-light"
                  >
                    Full Name
                  </th>
                  <td class="about__detail__table__row_td pl-5">
                    Dagim Shimelis Kifle
                  </td>
                </tr>
                <tr class="about__detail__table__row">
                  <th
                    class="about__detail__table__row_th border-r-2 pr-5 !font-light"
                  >
                    Birth Date
                  </th>
                  <td class="about__detail__table__row_td pl-5">
                    Monday, Sep 5, 1999
                  </td>
                </tr>
                <tr class="about__detail__table__row">
                  <th
                    class="about__detail__table__row_th border-r-2 pr-5 !font-light"
                  >
                    Birth Place
                  </th>
                  <td class="about__detail__table__row_td pl-5">
                    A/A, Ethiopian
                  </td>
                </tr>
                <tr class="about__detail__table__row">
                  <th
                    class="about__detail__table__row_th border-r-2 pr-5 !font-light"
                  >
                    Nationality
                  </th>
                  <td class="about__detail__table__row_td pl-5">Ethiopian</td>
                </tr>
                <tr class="about__detail__table__row">
                  <th
                    class="about__detail__table__row_th border-r-2 pr-5 !font-light"
                  >
                    Live in
                  </th>
                  <td class="about__detail__table__row_td pl-5">
                    A/A, Ethiopia
                  </td>
                </tr>
                <tr class="about__detail__table__row">
                  <th
                    class="about__detail__table__row_th border-r-2 pr-5 !font-light"
                  >
                    Human Languages
                  </th>
                  <td class="about__detail__table__row_td pl-5">
                    Amharic, English
                  </td>
                </tr>
                <tr class="about__detail__table__row">
                  <th
                    class="about__detail__table__row_th border-r-2 pr-5 !font-light"
                  >
                    Job Status
                  </th>
                  <td class="about__detail__table__row_td pl-5">Available</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <!--        list #2-->
        <button @click="show('1')" class="accordion slist-header slist2">
          <div class="slist-icon-phone">
            <span class="iconify" data-icon="iconoir:book"></span>
          </div>
          <div class="slist-title">Education</div>
          <div class="slist-btn  !self-center">
            <div class="s-btn">
              <i class="fa fa-arrow-alt-circle-right"></i>
            </div>
          </div>
        </button>
        <div :class="shownBox[1] ? 'show' : ''" class="panel">
          <div class="side-content-p">
            <div class="">
              <div class="slist-small-icon">
                <span
                  class="iconify self-center"
                  data-icon="iconoir:book"
                ></span>
                <span class="self-center">Education</span>
              </div>
              <div class="about__detail__header-underline"></div>
              <div class="about__detail__text">
                <h4 class="text-xl">Official</h4>
                <p class="about__detail__text__description">
                  Graduated with a degree in software engineering from Addis
                  Ababa Science & Technology University (AASTU).
                </p>
                <h4 class="text-xl">Self-Learning</h4>
                <p class="about__detail__text__description">
                  I also picked up various tools, techniques, different
                  programing languages, skills and practices by my self during
                  the years in university.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--        list #3-->
        <button @click="show('2')" class="accordion slist-header slist3">
          <div class="slist-icon-phone">
            <span
              class="iconify"
              data-icon="iconoir:code-brackets-square"
            ></span>
          </div>
          <div class="slist-title">Programing Skills</div>
          <div class="slist-btn  !self-center">
            <div class="s-btn">
              <i class="fa fa-arrow-alt-circle-right"></i>
            </div>
          </div>
        </button>
        <div :class="shownBox[2] ? 'show' : ''" class="panel">
          <div class="side-content-p">
            <div class="">
              <div class="slist-small-icon">
                <span
                  class="iconify self-center"
                  data-icon="iconoir:code-brackets-square"
                ></span>
                <span class="self-center">Programing Skills</span>
              </div>
              <div class="about__detail__header-underline"></div>
              <div class="about__detail__text">
                <h4>Good At</h4>
                <P class="about__detail__text__description">
                  <span class="sep">|</span>
                  Web (HTML & CSS)
                  <br />
                  <span class="sep">|</span>
                  JavaScript
                  <br />
                  <span class="sep">|</span>
                  VueJs
                  <br />
                  <span class="sep">|</span>
                  NodeJs, Express
                  <br />
                  <span class="sep">|</span>
                  MongoDB, Mongoose
                  <br />
                </P>
                <h4>Working Knowledge</h4>
                <P class="about__detail__text__description">
                  <span class="sep">|</span>
                  Electron
                  <br />
                  <span class="sep">|</span>
                  Java
                  <br />
                  <span class="sep">|</span>
                  PHP
                  <br />
                  <span class="sep">|</span>
                  C++
                  <br />
                </P>
              </div>
            </div>
          </div>
        </div>
        <!--        list #4-->
        <button @click="show('3')" class="accordion slist-header slist4">
          <div class="slist-icon-phone">
            <span class="iconify" data-icon="iconoir:puzzle"></span>
          </div>
          <div class="slist-title">Tools</div>
          <div class="slist-btn  !self-center">
            <div class="s-btn">
              <i class="fa fa-arrow-alt-circle-right"></i>
            </div>
          </div>
        </button>
        <div :class="shownBox[3] ? 'show' : ''" class="panel">
          <div class="side-content-p">
            <div class="">
              <div class="slist-small-icon">
                <span
                  class="iconify self-center"
                  data-icon="iconoir:puzzle"
                ></span>
                <span class="self-center">Tools</span>
              </div>
              <div class="about__detail__header-underline"></div>
              <div class="about__detail__text">
                <h4>Good At</h4>
                <P class="about__detail__text__description">
                  <span class="sep">|</span>
                  Git, GitHub
                  <br />
                  <span class="sep">|</span>
                  VsCode
                  <br />
                  <span class="sep">|</span>
                  Figma, Adobe XD, Adobe PhotoShop
                  <br />
                  <span class="sep">|</span>
                  Postman
                  <br />
                  <span class="sep">|</span>
                  Heroku
                  <br />
                  <span class="sep">|</span>
                  ClickUp
                  <br />
                </P>
                <h4>Working Knowledge</h4>
                <P class="about__detail__text__description">
                  <span class="sep">|</span>
                  Adobe Illustrator
                  <br />
                  <span class="sep">|</span>
                  GitLens
                  <br />
                </P>
              </div>
            </div>
          </div>
        </div>
        <!--        list #5-->
        <button @click="show('4')" class="accordion slist5-fack">
          <div class="slist-icon-phone">
            <span class="iconify" data-icon="iconoir:heart"></span>
          </div>
          <div class="slist-title">Favorites</div>
          <div class="slist-btn  !self-center">
            <div class="s-btn">
              <i class="fa fa-arrow-alt-circle-right"></i>
            </div>
          </div>
        </button>

        <button @click="show('4')" class="accordion slist5">
          <div class="slist-icon-phone"></div>
          <div class="slist-title">digital marketing</div>
          <div class="slist-btn  !self-center"></div>
        </button>
        <div :class="shownBox[4] ? 'show' : ''" class="panel last-panel">
          <div class="side-content-p">
            <div class="">
              <div class="slist-small-icon">
                <span
                  class="iconify self-center"
                  data-icon="iconoir:heart"
                ></span>
                <span class="self-center">Favorite</span>
              </div>
              <div class="about__detail__header-underline"></div>
              <div class="about__detail__text">
                <h4>Programing Language</h4>
                <P class="about__detail__text__description">
                  <span class="sep">|</span>
                  JavaScript
                </P>
                <h4>Area of Development</h4>
                <P class="about__detail__text__description">
                  <span class="sep">|</span>
                  API Development
                </P>
                <h4>Entertainment</h4>
                <P class="about__detail__text__description">
                  <span class="sep">|</span>
                  Music
                </P>
              </div>
            </div>
          </div>
        </div>
        <!--                                this last list is hiddne for margine perpeses-->
        <button
          @click="show('4')"
          class="accordion slist-header slist4 hidden-slist"
        >
          <div class="slist-icon-phone"></div>
          <div class="slist-title">web design &amp; development</div>
          <div class="slist-btn  !self-center">
            <div class="s-btn">
              <i class="fa fa-arrow-alt-circle-right"></i>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const chosenBox = ref(1);

const shownBox = ref([false, false, false, false, false]);

const choose = (num) => {
  chosenBox.value = num;
  console.log("CLICKED ", num);
  console.log("SAT ", chosenBox.value);
};

const show = (num) => {
  shownBox.value[num] = shownBox.value[num] ? false : true;
  console.log("CLICKED ", num);
  console.log("SHOW ", shownBox.value[num]);
};
</script>
