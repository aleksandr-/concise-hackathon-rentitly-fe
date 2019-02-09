<template>
  <v-flex offset-xs0 :class="{'xs12': $vuetify.breakpoint.smAndDown, 'xs11': $vuetify.breakpoint.mdAndUp}">
    <v-card class="elevation-2">
    <v-layout row xs12 pa-5>
      <v-layout column>
        <v-icon large="true" color="green" left="true" style="font-size: 126px;">done</v-icon>
        <h2 style="text-align:center">Success!</h2>
      </v-layout>
    </v-layout>
    </v-card>
  </v-flex>
</template>
<script>

  export default {
    data: () => ({
      items:["MasterCard", "Visa", "AmericanExpress"]
    }),
    computed: {
      date() {
        let date = this.$store.getters.getDate;
        if (date) {
          return date
        }
        return "2018-05-10"

      },
      dateTo() {
        let date = this.$store.getters.getToDate;
        if (date) {
          return date
        }
          return "2018-05-11"
      },
      item() {
        if (this.$store.getters.getData.length === 0) {
          this.$store.dispatch('loadSearchResults')
        }
        return this.$store.getters.getById(parseInt(this.$route.params.id));
      },
    },
  }
</script>
