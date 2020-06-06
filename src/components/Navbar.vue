<template>
    <div>
        <v-navigation-drawer app temporary></v-navigation-drawer>
        <v-app-bar dark color="primary">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Online Store</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn text>Link One</v-btn>
            </v-toolbar-items>
        </v-app-bar>
        <v-content>
            <router-view></router-view>
        </v-content>
    </div>
</template>

<script>
export default {
    
}
</script>