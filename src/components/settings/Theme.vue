<template>
  <div>
  </div>
</template>
<script>
  import apiMixin from "@/mixins/apiMixin"
  
  export default {
    name: 'Theme',
    data: () => ({
      items : [
        {
          text: 'light',
          icon: 'mdi-white-balance-sunny',
        },
        {
          text: 'dark',
          icon: 'mdi-weather-night',
        },
        {
          text: 'system',
          icon: 'mdi-desktop-tower-monitor',
        },
        {
          text: 'mixed',
          icon: 'mdi-theme-light-dark',
        }
      ]
    }),
    mixins : [
      apiMixin
    ],
    mounted() {
    },
    methods : {s
    }
  }
</script>