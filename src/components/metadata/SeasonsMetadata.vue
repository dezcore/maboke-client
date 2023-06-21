<template>
  <v-card>
    <v-row dense>
      <v-col cols="6">
        <v-card height="500" class="overflow-auto">
          <v-card-text>
            <v-row dense>
          <v-col 
            :cols="4"  
            v-for="(item, index) in currentSeasons"
            :key="item.img + index"
          > 
            <v-card>
              <v-img
                :src="'https://i.ytimg.com/vi/' + item.img + '/mqdefault.jpg'"
                class="white--text align-end"
                @click="setSeason(item)"
                height="200px"
              >
              </v-img>
              <v-card-actions>
                <v-list-item class="w-100">
                  <template v-slot:prepend>
                    <div class="justify-self-end">
                      <v-icon class="me-1" icon="mdi-clock-outline"></v-icon>
                      <span class="subheading me-2">28</span>
                    </div>
                  </template>

                  <template v-slot:append>
                    <div class="justify-self-end">
                      <v-icon class="me-1" icon="mdi-thumb-up"></v-icon>
                      <span class="subheading me-2">28</span>
                      <v-icon class="me-1" icon="mdi-eye-outline"></v-icon>
                      <span class="subheading">45</span>
                      <v-icon icon="mdi-transfer-down" @click="()=>{}"></v-icon>
                    </div>
                  </template>
                </v-list-item>
              </v-card-actions> 
            </v-card> 
          </v-col>
          </v-row>
          </v-card-text>
        </v-card>
       
      </v-col>
      <v-col cols="6">
        <v-card height="500" class="overflow-auto">
          <v-card-text>
            <SeasonsForm
              :season="season" 
            />
          </v-card-text>
        </v-card>
      </v-col>
      </v-row>
  </v-card>
</template>

<script>
  import SeasonsForm from "@/components/form/SeasonsForm.vue"
  export default {
    name: 'SeasonsMetadata',
    components : {
      SeasonsForm
    },
    props : {
      seasons : {
        type : Object,
      }
    },
    watch : {
      seasons : function(seasons) {
        if(seasons) {
          this.currentSeasons = seasons
          console.log("Watch serie : ", seasons)
        }
      }
    },
    data () {
      return {
        season : {
          date : '',
          img : '',
          number : 0,
          title : '',
          summary : "",
          videos : []
        },
        currentSeasons : []
      }
    },
    mounted() { 
      console.log("Watch serie : ", this.seasons)     
      if(this.seasons)
        this.currentSeasons = this.seasons
    },
    methods : {
      setSeason : function(season) {
        if(season) {
          this.season = season
        }
      }
    }
  }
</script>

<style scoped>
.headerClass{
  white-space: nowrap ;
  word-break: normal;
  overflow: hidden ;
  text-overflow: ellipsis;
}
</style>
