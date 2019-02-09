<template>


    <v-container fluid fill-height>
        <v-layout column align-center justify-center>

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


    </v-container>
</template>


<script>


    export default {
        data() {
            return {
                items: [

                    {
                        id: 1,
                        name: 'Name 1',
                        rating: 5,
                        location: 'Italy',
                        price: 23.0
                    },

                    {
                        id: 2,
                        name: 'Name 2',
                        rating: 4,
                        location: 'Italy',
                        price: 123.0
                    },

                    {
                        id: 3,
                        name: 'Name 3',
                        rating: 5,
                        location: 'Italy',
                        price: 78.50
                    },


                ]
            }
        }
    }


</script>
