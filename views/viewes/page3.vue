<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center class="detailedPage">
      <v-flex xs12 v-if="item">
        <v-card class="elevation-2">
          <v-layout row xs12 pa-5>
            <v-flex xs8 pr-5>
              <v-layout column>
                <div style="height:300px">
                  <img :src="item.imageurl" alt="" style="height:300px">
                </div>
                <h2>Name:</h2>
                <span style="font-size:24px; font-weight: 100">
                  {{item.name}}
                </span>
                <h2>Description:</h2>
                {{item.description}}
              </v-layout>

            </v-flex>
            <v-flex xs4>
              <v-layout column>
                <h2>Rating:</h2>
                <v-rating
                        v-model="item.rating"
                        background-color="green lighten-3"
                        color="green"
                        large
                ></v-rating>

                <h2>Dates:</h2>

                <v-menu
                        class="mr-3"
                        v-model="picker"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                >
                  <v-text-field
                          slot="activator"
                          v-model="date"
                          label="From"
                          prepend-icon="event"
                          readonly
                  ></v-text-field>
                  <v-date-picker v-model="date" @input="picker = false"
                                 :landscape="true"></v-date-picker>
                </v-menu>
                <v-menu
                        v-model="pickerTo"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                >
                  <v-text-field
                          slot="activator"
                          v-model="dateTo"
                          label="To"
                          prepend-icon="event"
                          readonly
                  ></v-text-field>
                  <v-date-picker v-model="dateTo" @input="pickerTo = false"
                                 :landscape="true"></v-date-picker>
                </v-menu>

                <h2>Dates:</h2>
                <v-text-field v-model="foo" type="number" label="Number" append-outer-icon="add" @click:append-outer="increment" prepend-icon="remove" @click:prepend="decrement"></v-text-field>

                <h2>Dates:</h2>
                <v-btn color="primary">RESERVE NOW</v-btn>
              </v-layout>
            </v-flex>
          </v-layout>

          {{item}}
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>

    export default {
        props: {
            itemId: Number,
        },
        data: () => ({
            email: '',
            password: '',
            date: null,
            dateTo: null,
            model: null,
            picker: null,
            pickerTo: null,
        }),
        computed: {
            date() {
                return this.$store.getters.getDate()
            },
            dateTo() {
                return this.$store.getters.getToDate()
            },
            item() {
                this.$store.dispatch('loadSearchResults')
                return this.$store.getters.getById(parseInt(this.$route.params.id));
            },
        },
    }
</script>