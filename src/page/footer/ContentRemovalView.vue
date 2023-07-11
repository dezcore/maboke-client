<template>
  <TopBar 
    :showAppBar="true"
  >
    <template #main>
      <v-card>
        <EnRemoval/>
        <FrRemoval/>
      </v-card>
    </template>
    <template #footer>
      <Footer>
      </Footer>
    </template>
  </TopBar>
</template>
<script>
import {useLocaleStore} from '@/store'
import EnRemoval from '@/page/md/en/removal.md'
import FrRemoval from '@/page/md/fr/removal.md'    
import TopBar from "@/components/nav/TopBar.vue"
import Footer from "@/components/footer/Footer.vue"
export default {
  name: 'RemovalView',
  components : {
    TopBar,
    Footer,
    FrRemoval,
    EnRemoval
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
  methods : {},
  computed : {
    locale() {
      const localeStore = useLocaleStore()
      return localeStore.locale
    }
  }
}
</script>
<style>
</style>