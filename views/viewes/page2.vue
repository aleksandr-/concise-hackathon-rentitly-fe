<template>

    <v-container fluid fill-height>

        <v-layout column wrap align-space-between justify-space-between row fill-height>
                <v-layout row align-left justify-left>
                    <v-layout column>

                        <v-card class="elevation-12">
                            <v-list dense>
                                <v-list-tile @click="">
                                    <v-list-tile-content>
                                        <v-text-field
                                                v-model="date"
                                                label="What to rent?"
                                                prepend-icon="search"
                                                readonly
                                        ></v-text-field>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                    <v-list-tile-content>
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
                                            <v-date-picker v-model="date" @input="picker = false"></v-date-picker>
                                        </v-menu>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                    <v-list-tile-content>
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
                                                    label="... until"
                                                    prepend-icon="event"
                                                    readonly
                                            ></v-text-field>
                                            <v-date-picker v-model="date" @input="picker = false"
                                            ></v-date-picker>
                                        </v-menu>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                    <v-list-tile-content>
                                            <v-text-field
                                                    v-model="date"
                                                    label="Location"
                                                    prepend-icon="location_on"
                                                    readonly
                                            ></v-text-field>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>

                        </v-card>

                        <v-card class="elevation-12">
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

                            <v-list dense>
                                <v-subheader>RATING</v-subheader>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-checkbox></v-checkbox>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <h3 class="title font-weight-light display-2"> >= 1 star</h3>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-checkbox></v-checkbox>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <h3 class="title font-weight-light display-2"> >= 2 star</h3>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-checkbox></v-checkbox>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <h3 class="title font-weight-light display-2"> >= 3 star</h3>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-checkbox></v-checkbox>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <h3 class="title font-weight-light display-2"> >= 4 star</h3>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-checkbox></v-checkbox>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <h3 class="title font-weight-light display-2"> 5 star</h3>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>

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
                                            <v-card color="cyan darken-2" style="padding-top: 30px;" class="white--text" :to="{ name: 'page3', params: {id: item.id}}" @click="">
                                                <v-layout>
                                                    <v-flex xs5>
                                                        <v-img
                                                                :src="item.imageurl"
                                                                height="125px"
                                                                contain
                                                        ></v-img>
                                                    </v-flex>
                                                    <v-flex xs7>
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
                date: null,
                picker: null,
                pickerTo: null,
                location: null,

                filterPrice1 : false,
                filterPrice2 : false,
                filterPrice3 : false,
                filterPrice4 : false,

                filterRating1 : false,
                filterRating2 : false,
                filterRating3 : false,
                filterRating4 : false,
            }
        },

        computed: {
            items() {
                return this.$store.getters.getData;
            },
        },

        created() {
            this.$store.dispatch('loadSearchResults');

        }
    }


</script>
