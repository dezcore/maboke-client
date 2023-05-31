<template>
    <v-card>
        <slot name="player"></slot>
        <v-overlay
            v-if="show"
            :model-value="true"
            scrim="#036358"
            contained
            persistent
        >
            <v-card>
                test
            </v-card>
        </v-overlay>
    </v-card>
</template>

<script>

export default { 
    name: 'PlayerOverlay',
    components : {},
    props : {
        showPlayerOverlay : {
            type : Boolean,
            default : ()=>{return false}
        }
    },
    watch : {
        showPlayerOverlay : function() {
            this.show = this.showPlayerOverlay
        }
    },
    data () {
      return {
        show : false
      }
    },
    methods : {

    }
  }
</script>
<style scoped>
</style>