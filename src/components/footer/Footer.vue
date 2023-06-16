<template>
  <div>
    <v-footer color="black">
      <v-row>
        <v-col cols="4" 
          v-for="(item, index) in items" 
          :key="index"
        >
          <v-list bg-color="black">
            <v-list-item
              v-for="(element, i) in item"
                :key="i"
                :href="element.href"
                target="_blank"
                color="primary"
                variant="plain"
              >
              <v-list-item-title v-text="element.title"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12">
          <v-divider></v-divider>
          <div>©{{ new Date().getFullYear() }} — <strong>Maboke</strong></div>
        </v-col>
      </v-row>
  </v-footer>
  </div>
</template>
<script>
  export default {
    name: 'Footer',
    data () {
      return {
        items: [
          [
            {
              title: 'FAQ',
              href: "/"
            },
            {
              title: 'Strore',
              href: "/"
            },
            {
              title: 'About',
              href: "/"
            },
          ],
          [
            {
              title: 'FAQ',
              href: "/"
            },
            {
              title: 'Help',
              href: "/"
            }
          ],
          [
            {
              title: 'FAQ',
              href: "/"
            },
            {
              title: 'Help',
              href: "/"
            }
          ]
        ]
      }
    },
    methods : {}
  }
</script>
