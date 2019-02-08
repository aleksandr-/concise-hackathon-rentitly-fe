<template>
  <div>
    <!--<v-toolbar class="white">-->
      <!--<v-toolbar-title v-text="title"></v-toolbar-title>-->
    <!--</v-toolbar>-->
    <v-content class="welcome">
      <section>
                <!--src="https://c8.alamy.com/comp/EBN6XR/green-grain-field-in-spring-germany-EBN6XR.jpg"-->
                <!--https://kriscarr.com/wp-content/uploads/2015/04/4gluten.jpg-->
                <!--http://img.daimg.com/uploads/allimg/160601/3-160601160631.jpg-->
        <v-parallax
                :src="$vuetify.breakpoint.smAndDown? '/static/img/bg_small.jpg' : 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2761385/630/420/m2/fpc/wm0/bi2sf3si76hitklsqf1gswp2scf5jmahow17fkh08lfdv0x3n2o0lknetlojbnoi-.jpg?1496000779&s=819acc4e01675ce55c074f34f07a0fac'"
                height="600">
          <v-layout
                  column
                  align-center
                  justify-center
          >
            <div class="header">
              <v-layout
                      column
                      align-center
                      justify-center
                      style="color: rgb(66, 66, 66)"
              >
              <img src="/static/img/logow.png" width="300" srcset="/static/img/logow2x.png 2x"
                   style="margin-left:-20px;" alt="">
              <div class="subheading mb-3 text-xs-center">LASD</div>

              <router-link :to="{ name: 'login'}" :style="{textDecoration:'none'}">
                <v-btn color="white" large>
                  SEARCH
                </v-btn>
              </router-link>
              </v-layout>

            </div>
          </v-layout>
        </v-parallax>
      </section>


      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-0"  mb-5>
            <v-flex xs12 sm12 md6 pt-5>
            </v-flex>
            <v-flex xs12 sm12 md5 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Võtke ühendust</div>
                </v-card-title>
                <v-card-text>
                  Tekkis mõni küsimus või saame kuidagi abiks olla?
                </v-card-text>
                <v-list class="transparent">

                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>asd@asd.ee</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>+372 asdasdasd2</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">business</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>OÜ asd</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

    </v-content>
  </div>
</template>

<script>
    import {calculatePrice} from "../utils/priceUtils.js"
    import {YouTubePlayer} from 'vue-youtube-embed'

export default {
  //Variables
    data: () => ({
        email: '',
        password: '',
        checkbox: false,
        areaLimit: 50
    }),
    components: {
        youtube: YouTubePlayer,
    },
    computed: {
        actualAreaLimit: {
            get: function () {
                if (this.areaLimit > 240) {
                    return this.areaLimit * 100 - 23000
                }
                if (this.areaLimit > 50) {
                    return this.areaLimit * 5 - 200
                }
                return this.areaLimit ? this.areaLimit : "";
            },
            set: function (val) {
                let computedSliderValue = val;
                if (val > 1000) {
                    computedSliderValue = val / 100 + 230
                } else if (val > 50) {
                    computedSliderValue = val / 5 + 40
                }
                if (this.areaLimit !== computedSliderValue) {
                    this.areaLimit = computedSliderValue;
                }
            }
        },
        calculatedPrice() {
            return calculatePrice(this.actualAreaLimit)
        }
    },

    methods: {
    }
};
</script>