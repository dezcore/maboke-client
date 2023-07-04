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
        <template v-slot:prepend>
          <v-app-bar-title>
            <template #text>
              <h2>{{$t(title)}}</h2>
            </template>
          </v-app-bar-title>
        </template>
        <template v-slot:append>
          <v-breadcrumbs
            :items="items"
            divider=""
          >
            <template v-slot:title="{ item }">
              {{$t(item.title)}}
            </template>
          </v-breadcrumbs>
        </template>
      </v-app-bar>
      <v-card 
        color="black"
      >
        <v-card-text>
          <p class="text-left pa-3">{{$t(welcomeText)}}</p>
          <p class="text-left pa-3">{{$t(goalsText)}}</p>
          <p class="text-left pa-3">{{$t(firstGoal)}}</p>
          <p class="text-left pa-3">{{$t(secondGoal)}}</p>
          <p class="text-left pa-3">{{$t(lastGoal)}}</p>
          <p class="text-left pa-3">{{$t(endText)}}</p>
        </v-card-text>
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
  name: 'PrivacyPolicyView',
  components : {
    TopBar,
    Footer
  },
  data: () => ({
    serie : null, 
    title : "about-us-page.title",
    welcomeText: "about-us-page.welcome-text",
    goalsText : "about-us-page.goals-text",
    firstGoal : "about-us-page.first-goal",
    secondGoal : "about-us-page.second-goal",
    lastGoal : "about-us-page.last-goal",
    endText : "about-us-page.end-text",
    items: [
      {
        title: "About",
        disabled: false,
        href: '/about',
      },
      {
        title: "Privacy policy",
        disabled: false,
        href: '/about/privacy',
      },
      {
        title: "Content removal",
        disabled: false,
        href: '/about/removal',
      }
    ], 
  }),
  methods : {}
}
</script>
<style>
</style>