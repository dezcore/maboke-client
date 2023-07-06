<template>
  <TopBar 
    :showAppBar="true"
  >
    <template #main>
      <v-card>
        <EnAbout/>
      </v-card>
    </template>
    <template #footer>
      <Footer>
      </Footer>
    </template>
  </TopBar>
</template>
<script>

import EnAbout from '@/page/md/en/about.md'   
import TopBar from "@/components/nav/TopBar.vue"
import Footer from "@/components/footer/Footer.vue"

export default {
  name: 'About',
  components : {
    TopBar,
    Footer,
    EnAbout
  },
  data: () => ({
    serie : null, 
    title : "about-us-page.title",
    welcomeText: "about-us-page.welcome-text",
    goalsText : "about-us-page.goals-text",
    firstGoal : "about-us-page.first-goal",
    secondGoal : "about-us-page.second-goal",
    lastGoal : "about-us-page.last-goal",
    endText : "about-us-page.end-text" 
  }),
  methods : {}
}
</script>
<style>
</style>