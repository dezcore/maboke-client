<template>
  <TopBar 
    :showAppBar="true"
  >
    <template #main>
      <v-app-bar 
        :elevation="2"
        color="black"  
        density="comfortable"
      > 
        <v-app-bar-title>
          <template #text>
          <h2>About us</h2>
        </template>
        </v-app-bar-title>

      </v-app-bar>
      <v-card 
        theme="dark"
      >
        <v-img
          class="mx-auto"
          height="400"
          max-width="600"
          src="/maboke3.png"
        >
          <template v-slot:error>
            <v-img
              class="mx-auto"
              height="100"
              max-width="500"
              src="/vite.svg"
            ></v-img>
          </template>
        </v-img>
          <v-card-title class="text-h3">
            {{$t(title)}}
          </v-card-title>
          <v-card-subtitle>{{$t(welcomeText)}}</v-card-subtitle>
          <v-card-subtitle>{{$t(goalsText)}}</v-card-subtitle>
          <v-card-subtitle>{{$t(firstGoal)}}</v-card-subtitle>
          <v-card-subtitle>{{$t(secondGoal)}}</v-card-subtitle>
          <v-card-subtitle>{{$t(lastGoal)}}</v-card-subtitle>
          <v-card-subtitle>{{$t(endText)}}</v-card-subtitle>
      </v-card>
    </template>
    <template #footer>
      <Footer>
      </Footer>
    </template>
  </TopBar>
</template>
<script>
import TopBar from "@/components/nav/TopBar.vue"
import Footer from "@/components/footer/Footer.vue"

export default {
  name: 'FaqView',
  components : {
    TopBar,
    Footer
  },
  data: () => ({
    serie : null, 
    title : "faq-page.title",
    welcomeText: "faq-page.welcome-text",
    goalsText : "faq-page.goals-text",
    firstGoal : "faq-page.first-goal",
    secondGoal : "faq-page.second-goal",
    lastGoal : "faq-page.last-goal",
    endText : "faq-page.end-text",
    description : "Listen to your favorite artists and albums whenever and wherever, online and offline."
  }),
  methods : {}
}
</script>
<style>
</style>