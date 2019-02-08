<template>
  <v-app id="inspire">
    <v-navigation-drawer
            fixed
            app
            v-model="drawer"
            :clipped="clipped"
            persistent
    >
      <div class="pa-3 text-xs-center">
        <div class="display-2 py-2">
          <img src="/static/img/logoInternal.png" width="250" style="opacity:0.7" srcset="/static/img/logoInternal2x.png 2x" />
        </div>
        <!--<span style="font-size:10px; line-height: 12px;">versioon 1.2</span>-->
        <!--font-size: 10px;-->
        <!--line-height: 12px;-->
        <!--/* position: absolute; */-->
        <!--display: block;-->
        <!--margin-top: -30px;-->
        <!--margin-bottom: 6px;-->
        <!--margin-right: 10px;-->
        <!--text-align: right;-->
      </div>
      <v-divider></v-divider>
      <v-list>
        <template v-for="item in items">
          <v-layout
                  row
                  v-if="item.heading"
                  align-center
                  :key="item.heading"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
          </v-layout>
          <v-list-group
                  v-else-if="item.children"
                  v-model="item.model"
                  :key="item.text"
                  :prepend-icon="item.model ? item.icon : item['icon-alt']"
                  append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
                    v-for="(child, i) in item.children"
                    :key="i"
                    @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="" :key="item.text" :to="{ name: item.routeName, params: currentYear}" :exact="item.exact">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <!--<v-badge color="red">-->
                <!--<span slot="badge">!</span>-->
                <v-list-tile-title>
                  {{ item.text }}
                  <!--<router-link v-bind:to="item.path">a {{ item.text }}</router-link>-->
                  <!--<router-link :to="{ name: item.routeName, params: { id: 'foo' } }">{{ item.text }}</router-link>-->
                  <!--<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>-->
                </v-list-tile-title>
              <!--</v-badge>-->

            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
            color="secondary"
            dark
            app
            fixed
            :clipped="clipped"
            persistent
    >
      <v-toolbar-title style="width: 400px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <!--<span class="hidden-sm-and-down">Põlluraamatu ABIMASIN</span>-->
        <!--<span>{{pageTitle}}</span>-->
        <v-breadcrumbs>
          <v-icon slot="divider">chevron_right</v-icon>
          <v-breadcrumbs-item
                  v-for="item in pageTitle"
                  :key="item.text"
                  :to="item.to"
                  :disabled="item.disabled"
          >
            {{ item.text }}
          </v-breadcrumbs-item>
        </v-breadcrumbs>
        <!--<breadcrumbs/>-->
      </v-toolbar-title>

      <v-spacer></v-spacer>


    </v-toolbar>
    <v-content>
      <v-container fluid :class="{'ma-0': $vuetify.breakpoint.smAndDown, 'pa-1': $vuetify.breakpoint.smAndDown }">
        <v-layout justify-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>

    <v-snackbar v-model="messageBar" top :timeout="0">
      <span>
        <v-icon color="white" left>{{messageBarIcon}}</v-icon>
        {{ messageBarText }}
      </span>
    </v-snackbar>


  </v-app>
</template>

<script>

    export default {
        data: () => ({
            showContactMessageModal: false,
            demoWarningClosed: false,
            newAccountWelcome: true,
            loadingFieldsCompleted: false,
            clipped: null,
            dialog: false,
            drawer: null,
            items: [
                { icon: 'ballot', text: 'Haldus', routeName: 'management'},
                { icon: 'account_circle', text: 'Konto', routeName: 'account'},
            ]
        }),
        props: {
            source: String
        },
        computed: {
            pageTitle() {
                return this.$route.meta.title(this.$route.params) || ""
            },
            messageBar() {
                return this.$store.getters.hasSystemMessage;
            },
            messageBarText() {
                return this.$store.getters.getSystemMessageText;
            },
            messageBarIcon() {
                return this.$store.getters.getSystemMessageType === "ERROR" ? 'error_outline' : 'check_circle';
            },
            currentYear() {
                let currentFullYear = this.$store.getters.getCurrentFullYear;
                if (currentFullYear) {
                    return {year: currentFullYear};
                } else {
                    return {year: (new Date()).getFullYear()}
                }
            }
        },
        methods: {
            asd() {
                this.$store.dispatch('logout').then(() => {
                    this.$store.dispatch('demoModeOff');
                    this.$router.push({name: 'registration'})
                })
            },
        },
        beforeCreate () {
            this.$store.dispatch('loadSomeInitialData');
            this.$store.dispatch('loadStatus');
        },
    }
</script>