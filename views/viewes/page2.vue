<template>

    <v-container fluid fill-height>

        <v-layout column wrap align-space-between justify-space-between row fill-height>

            <v-flex xs12 sm8 md4>

                <v-card class="elevation-12">
                    <v-card-text>
                        <v-form>
                            <v-layout row>
                                <v-text-field id="text" prepend-icon="search" name="query" label="Text" type="text"></v-text-field>
                                <v-text-field id="category" prepend-icon="list" name="category" label="Category" type="text"></v-text-field>
                                <v-text-field id="location" prepend-icon="location-on" name="location" label="Location" type="text"></v-text-field>
                            </v-layout>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary">Search</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

                <v-layout row align-left justify-left>

                    <v-layout column align-center justify-center>

                        <v-card class="elevation-12">
                            <v-list dense>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-icon>search</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-text-field id="text" name="query" label="Search" type="text"></v-text-field>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-icon>event</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-text-field id="text" name="from" label="Starting from" type="text"></v-text-field>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-icon>event</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-text-field id="text" name="until" label="Until" type="text"></v-text-field>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-icon>location-on</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-text-field id="text" name="location" label="Location" type="text"></v-text-field>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                        </v-card>

                        <v-card class="elevation-12">
                            <v-list dense>
                                <v-subheader>PRICE</v-subheader>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-checkbox v-model="selected"></v-checkbox>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <h3 class="title font-weight-light display-2">€ 0 - 20</h3>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-checkbox v-model="selected"></v-checkbox>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <h3 class="title font-weight-light display-2">€ 20 - 40</h3>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-checkbox v-model="selected"></v-checkbox>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <h3 class="title font-weight-light display-2">€ 40 - 60</h3>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-checkbox v-model="selected"></v-checkbox>
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
                                        <v-checkbox v-model="selected"></v-checkbox>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <h3 class="title font-weight-light display-2"> >= 1 star</h3>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-checkbox v-model="selected"></v-checkbox>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <h3 class="title font-weight-light display-2"> >= 2 star</h3>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-checkbox v-model="selected"></v-checkbox>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <h3 class="title font-weight-light display-2"> >= 3 star</h3>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-checkbox v-model="selected"></v-checkbox>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <h3 class="title font-weight-light display-2"> >= 4 star</h3>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-checkbox v-model="selected"></v-checkbox>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <h3 class="title font-weight-light display-2"> 5 star</h3>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>

                        </v-card>
                    </v-layout>

                    <v-flex xs12 sm8 md4 style="margin-top: 25px;">

                        <v-card>
                            <v-container
                                    fluid
                                    grid-list-lg
                            >
                                <v-layout column wrap>

                                    <template v-for="(item, index) in items">

                                        <v-flex xs12>
                                            <v-card color="cyan darken-2" class="white--text">
                                                <v-layout>
                                                    <v-flex xs5>
                                                        <v-img
                                                                src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
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

                                                    <template v-for="(star, index) in [1,2,3,4,5]">
                                                        <v-icon v-if="item.rating < star">
                                                            star_border
                                                        </v-icon>
                                                        <v-icon v-else>
                                                            star
                                                        </v-icon>
                                                    </template>
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
            return {}
        },
        computed: {
            items() {
                return this.$store.getters.getData;
            },
        },
        created() {
            this.$store.dispatch('loadSearchResults');
            //this.$store.dispatch('setSystemMessage', {text: "Midagi head juhtus!"});
        }
    }


</script>
