<template>
  <v-flex offset-xs0 :class="{'xs12': $vuetify.breakpoint.smAndDown, 'xs11': $vuetify.breakpoint.mdAndUp}">
    <v-layout row>
      <v-flex class="text-xs-left" xs11 mb-3 :class="{'ml-2': $vuetify.breakpoint.smAndDown}">
        <h1>{{field.name}}
        </h1>
        Põllumassiivi nr: <strong>{{ field.code }}</strong> |
        Pindala: <strong>{{ field.area }} ha</strong> |
        Aasta: <strong>{{ year }}</strong>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex>
        <v-btn v-if="$vuetify.breakpoint.smAndUp" right dark color="secondaryButton" style="right:0;top:20px" :href="pdfLink()" target="_blank">
          <v-icon left>print</v-icon>prindi
        </v-btn>
      </v-flex>
    </v-layout>
  </v-flex>


</template>
<script>

    export default {
        data() {
            return {
            showAddOrEditModal: false,
            addDialog: false,
            dialog: false,
            jobEventToEdit: null,
        }},
        computed: {
            headers() {
                if (this.$vuetify.breakpoint.smAndUp) {

                    return [
                        {
                            text: 'Kuupäev',
                            align: 'left',
                            sortable: true,
                            value: 'date'
                        },{
                            text: 'Kirjeldus',
                            align: 'left',
                            sortable: true,
                            value: 'job'
                        },
                        { text: 'Tarvik', value: 'requisite' },
                        { text: 'Pindala (ha)', value: 'area' },
                        { text: 'Toimingud', sortable: false }
                    ]
                } else {
                    return [
                        {
                            text: 'Kuupäev',
                            align: 'left',
                            sortable: true,
                            value: 'date'
                        },{
                            text: 'Kirjeldus',
                            align: 'left',
                            sortable: true,
                            value: 'job'
                        }
                    ]
                }
            },
            computedDateFormatted() {
                return this.formatDate(this.date)
            },
            field() {
                let existingField = this.$store.getters.field(this.$route.params.id);
                if (existingField) {
                    // this.$route.meta.title = existingField.name;
                    return existingField;
                } else {
                    return {
                        name: '',
                        code: '',
                        area: ''
                    };
                }
            },
            year() {
                return this.$route.params.year;
            }
        },

        watch: {
            dialog (val) {
                val || this.close()
            },
            date (val) {
                this.dateFormatted = this.formatDate(this.date)
            }
        },

        created () {
            this.initialize()
        },

        methods: {
            initialize() {
                this.$store.dispatch('loadJobEvents', {fieldId: this.$route.params.id, year: this.$route.params.year})
            },
            addItem() {
                this.jobEventToEdit = null;
                this.showAddOrEditModal = true;
            },
            editItem(jobEvent) {
                this.jobEventToEdit = jobEvent;
                this.showAddOrEditModal = true;
            },
            deleteItem(item) {
                const $this = this;
                this.$confirm('Olete kindel, et soovite kirje <strong>jäädavalt kustutada</strong>? <br/>Seda sammu ei saa tagasi võtta!', {title:'Kirje kustutamine ', buttonTrueText: 'Jah, kustuta!'})
                    .then((result) => {
                        if (result) {
                            $this.$store.dispatch('removeJobEvent', item._id)
                        }
                    });
            },
            formatDate(date) {
                if (!date) return null;

                const [year, month, day] = date.split('T')[0].split('-');
                return `${day}.${month}.${year}`
            },
            pdfLink() {
                if (this.$store.getters.isDemoMode) {
                    return 'api/fields/demoPdf/field'
                } else {
                    return 'api/fields/' + this.$route.params.id + "/" + this.year + "/pdf"
                }
            },
            description(event) {
                let description = "";
                if (event.requisite !== null &&
                    event.requisite !== undefined &&
                    event.requisite.inspections !== null &&
                    event.requisite.inspections !== undefined &&
                    event.requisite.inspections.length > 0) {
                    description += "Seire: " + event.requisite.inspections.join(", ") + ". ";
                }
                description += event.job;
                if (event.notes !== null &&
                    event.notes !== undefined) {
                    if (event.jobCategory !== 'Muu') {
                        description += ": " + event.notes
                    } else {
                        description = event.notes
                    }
                }
                if (event.worker) {
                    description += ". Teostas: " + event.worker +"."
                }

                return description;
            },
            requisites(event) {
                if (event.requisite && event.requisite.name) { // Has material and maybe amount defined
                    return event.requisite.name + (event.requisite.amount ? " (" + event.requisite.amount + " " + event.requisite.unit + ")" : "");
                } else {
                    return "";
                }
            },
            area(element) {
                return element.area.toLocaleString('et')
            },
            close() {
                this.showAddOrEditModal = false
            }
        }
    }
</script>