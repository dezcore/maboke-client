<template>
  <div>
    <v-container class="d-flex" :style="{ minHeight: '100%' }">
      <v-row justify="center">
        <v-col cols="auto">
          <h1 class="text-h3 text-primary">
            Whoops, 404
          </h1>
          <p>The page you were looking for does not exist</p>
          <p>
            <v-btn
              to="/"
              color="primary"
              variant="outlined"
            >
              Get me out of here!
            </v-btn>
          </p>
          <p>
            <app-link href="/">Looking for Maboke243?</app-link>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
  import apiMixin from "@/mixins/apiMixin"
  
  export default {
    name: '404',
    data: () => ({
      
    }),
    mixins : [
      apiMixin
    ],
    mounted() {
    },
    methods : {
    }
  }
</script>