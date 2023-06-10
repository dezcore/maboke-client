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
            <v-menu 
                :close-on-content-click="false"
            >
                <template v-slot:activator="{ props }">
                    <v-btn color="primary" v-bind="props">
                        More
                    </v-btn>
                </template>
                <v-card 
                    class="mx-auto"
                    width="300"
                    max-width="300"
                    
                >
                    <v-list v-if="showSeasons">
                        <v-list-subheader>REPORTS</v-list-subheader>
                        <v-list-item
                            v-for="(season, index) in seasons"
                            :key="index"
                            :value="index"
                            @click="showSeason(season)"
                            
                        >
                            <template v-slot:prepend>
                                <v-icon icon="mdi-check" v-if="season.current"></v-icon>
                                <v-icon icon="" v-else></v-icon>
                            </template>
                            <template v-slot:append>
                                <v-icon icon="mdi-arrow-right"></v-icon>
                            </template>

                            <v-list-item-title>{{ season.name }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                    <v-list v-else>
                        <v-list-subheader @click="setShowSeasons">
                            <v-icon icon="mdi-arrow-left"></v-icon>
                            SEASON X
                        </v-list-subheader>
                        <v-list-item
                            v-for="(episode, index) in episodes"
                            :key="index"
                            :value="index"
                            
                        >
                            <template v-slot:prepend>
                                <v-icon icon="mdi-check" v-if="episode.current"></v-icon>
                                <v-icon icon="" v-else></v-icon>
                            </template>
                            <template v-slot:append>
                                <v-icon icon="mdi-arrow-right"></v-icon>
                            </template>

                            <v-list-item-title>{{ episode.name }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-menu>
            <v-btn color="primary" @click="setShow(false)">
                close
            </v-btn>
        </v-overlay>
    </v-card>
</template>

<script>

export default { 
    name: 'PlayerOverlay',
    components : {},
    props : {
        showPlayerOverlay : {
            type : Object,
            default : ()=>{return null}
        }
    },
    watch : {
        showPlayerOverlay : function() {
            if(this.showPlayerOverlay)
                this.show = this.showPlayerOverlay.state
        }
    },
    data () {
      return {
        show : false,
        showSeasons : true,
        seasons : [
            {
                name : "Season1",
                current : false
            },
            {
                name : "Season2",
                current : true
            },
            {
                name : "Season3",
                current : false
            },
            {
                name : "Season4",
                current : false
            }
        ],
        episodes : [
            {
                name : "Ep1",
                current : false
            },
            {
                name : "Ep2",
                current : true
            },
            {
                name : "Ep3",
                current : false
            },
            {
                name : "Ep4",
                current : false
            }
        ]
      }
    },
    methods : {
        setShow : function(state) {
            this.show = state
        },
        showSeason : function(season) {
            if(season)
                this.showSeasons = false
        },
        setShowSeasons : function() {
            this.showSeasons = true
        }
    }
  }
</script>
<style scoped>
</style>