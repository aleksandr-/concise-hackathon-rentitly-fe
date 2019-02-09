<template>
  <v-flex offset-xs0 :class="{'xs12': $vuetify.breakpoint.smAndDown, 'xs11': $vuetify.breakpoint.mdAndUp}">
    <v-card class="elevation-2">
    <v-layout row xs12 pa-5>
      <v-layout column>
          <h2>Your booking details</h2>
        <h3>Pickup date</h3>
        <h3>{{date}}</h3>
        <h3>Return date</h3>
        <h3>{{dateTo}}</h3>


        </v-layout>
      <v-layout column>

        <div style="height:300px">
          <img :src="item.imageurl" alt="" style="height:300px">
        </div>
        <v-layout row>
        <h2>Name:</h2> <span style="font-size:24px; font-weight: 100; margin-left: 12px"> {{item.name}}</span>
        </v-layout>
        </v-layout>
    </v-layout>
    </v-card>
  </v-flex>
</template>
<script>

  export default {
    data: () => ({
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