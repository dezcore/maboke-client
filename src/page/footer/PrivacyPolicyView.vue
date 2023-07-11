<template>
  <TopBar 
    :showAppBar="true"
  >
    <template #main>
      <v-card>
        <EnPrivacy v-if="locale === 'en'"/>
        <FRPrivacy v-else/>
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
import EnPrivacy from '@/page/md/en/privacy.md' 
import FRPrivacy from '@/page/md/fr/privacy.md'  
import TopBar from "@/components/nav/TopBar.vue"
import Footer from "@/components/footer/Footer.vue"
export default {
  name: 'PrivacyPolicyView',
  components : {
    TopBar,
    Footer,
    FRPrivacy,
    EnPrivacy
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