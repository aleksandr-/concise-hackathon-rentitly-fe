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
                <h2>Total price:</h2>
                <strong style="font-size:24px">
                  {{item.price}} €
                </strong>

                <h2>Rating:</h2>
                <v-rating
                        v-model="item.rating"
                        background-color="green lighten-3"
                        color="green"
                        large
                ></v-rating>

                <h2>Location:</h2>
                {{item.location}}

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

                <v-text-field v-model="count" type="number" label="Amount to rent" append-outer-icon="add" @click:append-outer="" prepend-icon="remove" @click:prepend=""></v-text-field>

                <h2>Rent also:</h2>
                <div v-for="(rec, index) in item.recommendations">
                  <v-layout row style="margin-top:20px">
                    <v-flex style="width:70px" xs3>
                      <img :src="rec.imageurl" alt="" style="max-width:70px" width="70">
                    </v-flex>
                    <v-flex xs9>
                      <v-layout column style="margin-left:20px;">


                      <strong>{{rec.name}} - <v-icon>star</v-icon>{{rec.rating}}</strong>
                      <span>Price: {{rec.price}}€</span>
                      <span>
                        <v-checkbox color="primary" v-model="checkbox[index]" :label="`Rent also`"></v-checkbox>
                      </span>
                      </v-layout>

                    </v-flex>

                    <v-flex>

                    </v-flex>
                  </v-layout>

                </div>


                <router-link :to="{ name: 'page4', params: {id: item.id}}" :style="{textDecoration:'none'}">
                  <v-btn color="primary">ORDER NOW</v-btn>
                </router-link>
              </v-layout>
            </v-flex>
          </v-layout>
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
            model: null,
            count: 1,
            picker: null,
            pickerTo: null,
            checkbox: [],
        }),
        computed: {
            date() {
                return this.$store.getters.getDate
            },
            dateTo() {
                return this.$store.getters.getToDate
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