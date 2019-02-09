<template>
    <div id="app">
        <v-app id="inspire">
            <router-view></router-view>
            <v-snackbar v-model="messageBar" top :timeout="0">
          <span>
            <v-icon color="white" left>{{messageBarIcon}}</v-icon>
            {{ messageBarText }}
          </span>
            </v-snackbar>
        </v-app>
    </div>
</template>

<script>
    export default {
        data: () => ({}),
        beforeCreate() {
        },
        computed: {
            messageBar() {
                return this.$store.getters.hasSystemMessage;
            },
            messageBarText() {
                return this.$store.getters.getSystemMessageText;
            },
            messageBarIcon() {
                return this.$store.getters.getSystemMessageType === "ERROR" ? 'error_outline' : 'check_circle';
            },
        }
    }
</script>