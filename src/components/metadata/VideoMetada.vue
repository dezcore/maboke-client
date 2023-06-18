<template>
  <v-card>
    <v-row dense>
      <v-col cols="6">
        <v-card height="500" class="overflow-auto">
          <v-row dense>
          <v-col
            v-for="(item, index) in currentSeason.videos"
            :key="item.img + index"
            :cols="4"
          >
            <v-card>
              <v-img
                :src="'https://i.ytimg.com/vi/' + item.img + '/mqdefault.jpg'"
                class="white--text align-end"
                @click="setVideo(item)"
                height="200px"
              >
              </v-img>
              <v-card-actions>
                <v-list-item class="w-100">
                  <template v-slot:prepend>
                    <div class="justify-self-end">
                      <v-icon class="me-1" icon="mdi-clock-outline"></v-icon>
                      <span class="subheading me-2">{{item.length}}</span>
                    </div>
                  </template>

                  <template v-slot:append>
                    <div class="justify-self-end">
                      <v-icon class="me-1" icon="mdi-thumb-up"></v-icon>
                      <span class="subheading me-2">28</span>
                      <v-icon class="me-1" icon="mdi-eye-outline"></v-icon>
                      <span class="subheading">45</span>
                      <v-icon icon="mdi-transfer-down"></v-icon>
                    </div>
                  </template>
                </v-list-item>
              </v-card-actions> 
            </v-card> 
          </v-col>
        </v-row>
        </v-card>
       
      </v-col>
      <v-col cols="6">
        <ValidationForm 
          :video="video"
        />
      </v-col>
      </v-row>
  </v-card>
</template>

<script>
  import ValidationForm from "@/components/form/ValidationForm.vue"
  export default {
    name: 'VideoMetadata',
    components : {
      ValidationForm
    },
    props : {
      season : {
        type : Object,
      }
    },
    watch : {
      season : function(season) {
        if(season) {
          this.currentSeason = season
          //console.log("Watch season : ",  season)
        }
      }
    },
    data () {
      return {
        select: [],
        video : null,
        currentSeason : {
          videos : []
        },
      }
    },
    mounted() {
      if(this.season)
        this.currentSeason = this.season
    },
    methods : {
      setVideo : function(video) {
        //console.log("video : ", video)
        if(video) {
          this.video = video
        }
      },
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
