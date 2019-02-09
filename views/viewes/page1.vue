<template>
    <!--<v-toolbar class="white">-->
    <!--<v-toolbar-title v-text="title"></v-toolbar-title>-->
    <!--</v-toolbar>-->

    <v-content class="bgimg-1">
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs6>
                    <div class="front-page-title mb-3 text-xs-center">rentitly</div>
                    <v-card class="elevation-12">

                        <v-card-text style="margin-top:-40px" xs12>
                            <v-layout row align-center justify-center style="color: rgb(66, 66, 66)">
                                <v-autocomplete
                                        class="mr-3"
                                        v-model="model"
                                        :items="items"
                                        color="black"
                                        hide-no-data
                                        hide-selected
                                        label="What to rent?"
                                        prepend-icon="search"
                                ></v-autocomplete>

                            </v-layout>
                            <v-layout row align-center xs12 justify-center style="color: rgb(66, 66, 66)">

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
                                            label="Starting from"
                                            prepend-icon="event"
                                            readonly
                                    ></v-text-field>
                                    <v-date-picker v-model="date" @input="picker = false"
                                                   ></v-date-picker>
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
                                            label="...until"
                                            prepend-icon="event"
                                            readonly
                                    ></v-text-field>
                                    <v-date-picker v-model="dateTo" @input="pickerTo = false"></v-date-picker>
                                </v-menu>

                            </v-layout>
                            <v-layout row align-center justify-center style="color: rgb(66, 66, 66)">
                                <v-autocomplete
                                        class="mr-3"
                                        v-model="model"
                                        :items="locations"
                                        color="black"
                                        hide-no-data
                                        hide-selected
                                        label="From where to rent?"
                                        prepend-icon="location_on"
                                ></v-autocomplete>

                            </v-layout>
                            <v-layout row align-center justify-center style="color: rgb(66, 66, 66)">

                                <router-link :to="{ name: 'page2'}" :style="{textDecoration:'none'}">
                                    <v-btn color="primary" large>
                                        SEARCH
                                    </v-btn>
                                </router-link>
                            </v-layout>

                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>

</template>

<script>
    import {calculatePrice} from "../utils/priceUtils.js"

    export default {
        //Variables
        data: () => ({
            email: '',
            password: '',
            date: null,
            dateTo: null,
            items: ["Abacus", "Stones","Sacks","Saddle","Safe","Starship","Statue","Steamer","Stool","Strainer", "Stroller"],
            locations: ["Estonia: Tallinn", "Sweden: Stockholm", "Beijing: China", "Spain",
    "Guyana: Georgetown",
    "Haiti: Port-au-Prince",
    "Honduras: Tegucigalpa",
    "Hungary: Budapest",
    "Iceland: Reykjavik",
    "India: New Delhi",
    "Indonesia: Jakarta",
    "Iran: Tehran",
    "Iraq: Baghdad",
    "Ireland: Dublin",
    "Israel: Jerusalem*",
    "Italy: Rome",
    "East Timor (Timor-Leste): Dili",
    "Ecuador: Quito",
    "Egypt: Cairo",
    "El Salvador: San Salvador",
    "Equatorial Guinea: Malabo",
    "Eritrea: Asmara",
    "Iraq: Baghdad",
    "Ireland: Dublin",
    "Israel: Jerusalem*",
    "Italy: Rome",
    "Jamaica: Kingston",
    "Japan: Tokyo",
    "Jordan: Amman",
    "Kazakhstan: Astana",
    "Kenya: Nairobi",
    "Kiribati: Tarawa Atoll",
    "Korea, North: Pyongyang",
    "Korea, South: Seoul",
    "Kosovo: Pristina",
    "Kuwait: Kuwait City"
            ],
            model: null,
            picker: null,
            pickerTo: null,
        }),
        computed: {
            actualAreaLimit: {
                get: function () {
                    if (this.areaLimit > 240) {
                        return this.areaLimit * 100 - 23000
                    }
                    if (this.areaLimit > 50) {
                        return this.areaLimit * 5 - 200
                    }
                    return this.areaLimit ? this.areaLimit : "";
                },
                set: function (val) {
                    let computedSliderValue = val;
                    if (val > 1000) {
                        computedSliderValue = val / 100 + 230
                    } else if (val > 50) {
                        computedSliderValue = val / 5 + 40
                    }
                    if (this.areaLimit !== computedSliderValue) {
                        this.areaLimit = computedSliderValue;
                    }
                }
            },
        },
        watch: {
            dateTo: function (date) {
                this.$store.dispatch('setToDate', date)
            },
            date: function (date) {
                this.$store.dispatch('setDate', date)

            }
        },
        methods: {}
    };
</script>