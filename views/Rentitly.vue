<template>
  <v-app id="inspire" style="height:100vh">
    <v-content>
      <v-container fluid :class="{'ma-0': $vuetify.breakpoint.smAndDown, 'pa-1': $vuetify.breakpoint.smAndDown }">
        <v-layout justify-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>


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