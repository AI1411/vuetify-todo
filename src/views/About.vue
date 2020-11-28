<template>
  <div class="mt-3">
    <v-card
        max-width="375"
        class="mx-auto"
    >
      <v-img
          src="kiai.jpeg"
          height="300px"
          dark
      >
        <v-row class="fill-height">
          <v-card-title class="white--text pl-12 pt-12">
            <div class="display-1" style="padding-top: 200px;padding-left: 80px">
              Akira Ishii
            </div>
          </v-card-title>
        </v-row>
      </v-img>

      <v-list two-line>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">
              mdi-email
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>goethe0719@gmail.com</v-list-item-title>
          </v-list-item-content>

        </v-list-item>


        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">
              mdi-map-marker
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Tokyo Mitaka</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">
              mdi-github
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title><a href="https://github.com/AI1411/vuetify-todo" target="_blank">AI1411</a></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>