<template>
  <div>
    <v-footer color="black">
      <v-row>
        <v-col 
          cols="12"
          md="3"
          lg="3"
          xl="3"
          xxl="3"
          v-for="(fcol, index) in footerCols" 
          :key="index"
        >
          <h2>
            {{$t(fcol.title)}}
          </h2>
          <div v-if="fcol.showIcons" class="mt-4">
            <a 
              v-for="(social, i) in fcol.items"
              :key="i"
              :aria-label="social.title"
              :href="social.href"
              :title="social.title"
              target="_blank"
            >
              <v-hover
                v-slot="{ isHovering, props }"
              >
                <v-icon
                  :icon="social.icon"
                  :color="isHovering ? '#F40B0C' : 'white'"
                  v-bind="props"
                />
              </v-hover>
            </a>
          </div>
          <v-list bg-color="black" v-else>
            <v-list-item
              v-for="(element, i) in fcol.items"
                :key="i"
                variant="plain"
              >
                <v-btn
                  v-if="element.href" 
                  variant="text" 
                  :to="element.href"
                  :color="(element.noTranslate ? element.title : $t(element.title)).includes($t(page)) ? '#F40B0C' : '#ffffff'"
                >
                  {{element.noTranslate ? element.title : $t(element.title)}}
                </v-btn>
                <v-list-item-title
                  v-else 
                >
                  {{element.noTranslate ? element.title : $t(element.title)}}
                </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12">
          <v-divider></v-divider>
          <div>Copyright  © {{ new Date().getFullYear() }} — <strong>Maboke243</strong></div>
        </v-col>
      </v-row>
  </v-footer>
  </div>
</template>
<script>
  import {useGlobalStore} from '@/store'
  
  export default {
    name: 'Footer',
    data () {
      return {
        footerCols: [
        {
            title : "footer.information",
            items :  [
              {
                title: 'footer.about',
                href: "/about"
              },
              {
                title: "footer.privacy",
                href:  '/privacy',
              },
              {
                title: "footer.removal",
                href: '/removal',
              }
            ],
          },
          {
            title : "footer.help",
            items :  [
              {
                title: 'footer.faq',
                href: "/"
              }
            ],
          },
          {
            title : "footer.contact",
            items : [
              {
                title: 'maboke243info@gmail.com',
                noTranslate : true
              }
            ]
          },
          {
            title : "footer.follow",
            showIcons : true,
            items : [
              {
                icon: 'mdi-facebook',
                href: 'https://www.reddit.com/r/vuetifyjs',
                title: 'reddit'
              },
              {
                icon: 'mdi-instagram',
                href: 'https://github.com/vuetifyjs/vuetify',
                title: 'github'
              },
              {
                icon: 'mdi-twitter',
                href: 'https://twitter.com/vuetifyjs',
                title: 'twitter'
              }
            ]
          }
        ]
      }
    },
    computed : {
      page() {
        const gStore = useGlobalStore()
        let page = gStore.page.toLowerCase()
        let res = 'footer.' + page
        return res
      }
    },
    methods : {}
  }
</script>
