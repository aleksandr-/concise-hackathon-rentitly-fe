<template>

    <v-container fluid fill-height>

        <v-layout column wrap align-space-between row fill-height>
                <v-layout row align-left justify-left>
                    <v-layout column>

                        <v-card class="elevation-12">
                            <v-list dense>
                                <v-list-tile @click="">
                                    <v-list-tile-content>
                                        <v-autocomplete
                                                class="mr-3"
                                                v-model="searchItemsModel"
                                                :items="searchItems"
                                                color="black"
                                                hide-no-data
                                                hide-selected
                                                label="What to rent?"
                                                prepend-icon="search"
                                        ></v-autocomplete>
                                    </v-list-tile-content>
                                </v-list-tile>
                                    <v-layout column>
                                        <v-menu
                                                class="mr-3 ml-3"
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
                                                class="mr-3 ml-3"
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
                                    </v-layout>

                            </v-list>

                            <v-list dense>
                                <v-subheader>PRICE</v-subheader>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-checkbox v-model="filterPrice1"></v-checkbox>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <h3 class="title font-weight-light display-2">€ 0 - 20</h3>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-checkbox v-model="filterPrice2"></v-checkbox>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <h3 class="title font-weight-light display-2">€ 20 - 40</h3>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-checkbox v-model="filterPrice3"></v-checkbox>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <h3 class="title font-weight-light display-2">€ 40 - 60</h3>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-checkbox v-model="filterPrice4"></v-checkbox>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <h3 class="title font-weight-light display-2">€ 60+</h3>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>

                                <v-subheader>RATING</v-subheader>
                                <v-radio-group v-model="ratingFilter" column style="margin-top:-5px; margin-left:15px">
                                    <v-radio label=" >= 1 star" value="1"></v-radio>
                                    <v-radio label=" >= 2 star" value="2"></v-radio>
                                    <v-radio label=" >= 3 star" value="3"></v-radio>
                                    <v-radio label=" >= 4 star" value="4"></v-radio>
                                    <v-radio label=" = 5 star" value="5"></v-radio>
                                    <v-radio label=" all" value="0"></v-radio>
                                </v-radio-group>

                        </v-card>
                    </v-layout>

                    <v-flex xs12>

                        <v-card>
                            <v-container
                                    fluid
                                    grid-list-lg
                            >
                                <v-layout column wrap>

                                    <template v-for="(item, index) in items">
                                        <v-flex xs12>
                                            <v-card style="padding-top: 20px;padding-left: 20px;" :to="{ name: 'page3', params: {id: item.id}}" @click="">
                                                <v-layout>
                                                    <v-flex xs3>
                                                        <v-img
                                                                :src="item.imageurl"
                                                                width="125px"
                                                                contain
                                                        ></v-img>
                                                    </v-flex>
                                                    <v-flex xs9>
                                                        <v-card-title primary-title>
                                                            <div>
                                                                <div class="headline">{{item.name}}</div>
                                                                <div>{{item.location}}</div>
                                                                <div>{{item.price}} €</div>
                                                            </div>
                                                        </v-card-title>
                                                    </v-flex>
                                                </v-layout>
                                                <v-divider light></v-divider>
                                                <v-card-actions class="pa-3">
                                                    <v-spacer></v-spacer>
                                                    <v-rating
                                                            v-model="item.rating"
                                                            background-color="green lighten-3"
                                                            color="green"
                                                            large
                                                    ></v-rating>
                                                </v-card-actions>
                                            </v-card>
                                        </v-flex>
                                    </template>

                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-flex>

                </v-layout>


        </v-layout>
    </v-container>
</template>


<script>


    export default {
        data() {
            return {
                searchItems: ["Abacus", "Stones","Sacks","Saddle","Safe","Starship","Statue","Steamer","Stool","Strainer", "Stroller"],
                picker: null,
                pickerTo: null,
                location: null,
                searchItemsModel: null,

                filterItem: null,
                filterDateFrom: null,
                filterDateTo: null,

                filterPrice1 : false,
                filterPrice2 : false,
                filterPrice3 : false,
                filterPrice4 : false,

                ratingFilter : "0",
            }
        },

        computed: {
            items() {
                var data = this.$store.getters.getData;
                data = _.filter(data, item => item.rating >= parseInt(this.ratingFilter));

                if(this.filterPrice1){
                    data = _.filter(data, item => item.price >= 0 && item.price < 20);
                }

                if(this.filterPrice2){
                    data = _.filter(data, item => item.price >= 20 && item.price < 40);
                }

                if(this.filterPrice3){
                    data = _.filter(data, item => item.price >= 40 && item.price < 60);
                }

                if(this.filterPrice4){
                    data = _.filter(data, item => item.price >= 60);
                }

                return data;
            },
            date() {
                return this.$store.getters.getDate
            },
            dateTo() {
                return this.$store.getters.getToDate
            },
        },

        created() {
            this.$store.dispatch('loadSearchResults');

        },

        methods : {
            refresh () {
                this.$store.dispatch('loadSearchResultsFilterSort', { filter : {location : 'loc' }, sort : {asc : 'ss'}});
            }
        }
    }


</script>
