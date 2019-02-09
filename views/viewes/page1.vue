<template>
    <!--<v-toolbar class="white">-->
      <!--<v-toolbar-title v-text="title"></v-toolbar-title>-->
    <!--</v-toolbar>-->
        <v-carousel style="height:100%">
          <v-carousel-item src="https://www.craftguardinsurance.com/wp-content/uploads/2017/10/Tools-and-Equitment-Insurance.jpg">

            <v-layout
                    column
                    align-center
                    justify-center
            >
              <div>
                <v-layout
                        column
                        align-center
                        justify-center
                        style="color: rgb(66, 66, 66)"
                >
                  <img src="/static/img/logow.png" width="300" srcset="/static/img/logow2x.png 2x"
                       style="margin-left:-20px;" alt="">
                  <div class="subheading mb-3 text-xs-center">RENTITLY</div>

                  <router-link :to="{ name: 'login'}" :style="{textDecoration:'none'}">
                    <v-btn color="white" large>
                      SEARCH
                    </v-btn>
                  </router-link>
                </v-layout>

              </div>
            </v-layout>
          </v-carousel-item>
        </v-carousel>
                <!--src="https://c8.alamy.com/comp/EBN6XR/green-grain-field-in-spring-germany-EBN6XR.jpg"-->
                <!--https://kriscarr.com/wp-content/uploads/2015/04/4gluten.jpg-->



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