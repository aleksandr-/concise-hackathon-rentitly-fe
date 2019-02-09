<template>
  <v-app id="inspire" style="height:100vh">
    <v-content>
      <v-toolbar color="#FFFFFF" fixed app height="60px">
        <v-toolbar-title><div class="text-xs-center" style="font-weight: 100; font-size: 32px; margin-left: 20px;" :to="{ name: 'page1'}">
          rentitly
          <span style="position:absolute; top:25px; margin-left:10px; font-size:12px">Like buying, but better</span>
        </div>
        </v-toolbar-title>
      </v-toolbar>
      <v-container fluid :class="{'ma-0': $vuetify.breakpoint.smAndDown, 'pa-1': $vuetify.breakpoint.smAndDown }">
        <v-layout justify-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer dark height="auto"  width="100%" syle="margin-top:130px"
    >
      <v-card
              flat
              tile
              style="width:100%; margin-top:70px"
              class="grey darken-4 white--text text-xs-center"
      >
        <v-card-text>
          <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  class="mx-3 white--text"
                  icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>


        <v-divider></v-divider>

        <v-card-text class="white--text">
          &copy;2019 — <strong>rentitly</strong>
        </v-card-text>
      </v-card>
    </v-footer>

  </v-app>
</template>

<script>

    export default {
        data: () => ({
            showContactMessageModal: false,
            demoWarningClosed: false,
            newAccountWelcome: true,
            loadingFieldsCompleted: false,
            clipped: null,
            dialog: false,
            drawer: null,
            items: [
                { icon: 'ballot', text: 'Haldus', routeName: 'management'},
                { icon: 'account_circle', text: 'Konto', routeName: 'account'},
            ],
            icons: [
                'fab fa-facebook',
                'fab fa-twitter',
                'fab fa-google-plus',
                'fab fa-linkedin',
                'fab fa-instagram'
            ]
        }),
        props: {
            source: String
        },
        computed: {
            messageBar() {
                return this.$store.getters.hasSystemMessage;
            },
            messageBarText() {
                return this.$store.getters.getSystemMessageText;
            },
            messageBarIcon() {
                return this.$store.getters.getSystemMessageType === "ERROR" ? 'error_outline' : 'check_circle';
            },
            currentYear() {
                let currentFullYear = this.$store.getters.getCurrentFullYear;
                if (currentFullYear) {
                    return {year: currentFullYear};
                } else {
                    return {year: (new Date()).getFullYear()}
                }
            }
        },
        methods: {
            asd() {
                this.$store.dispatch('logout').then(() => {
                    this.$store.dispatch('demoModeOff');
                    this.$router.push({name: 'registration'})
                })
            },
        },
        created () {
            //this.$store.dispatch('loadSomeInitialData');
        },
    }
</script>
