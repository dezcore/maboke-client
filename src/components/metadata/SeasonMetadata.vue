<template>
  <v-card>
    <v-row dense>
      <v-col cols="6">
        <v-card height="500" class="overflow-auto">
          <v-row dense>
          <v-col :cols="4"> 
            <v-card>
              <v-img
                :src="'https://i.ytimg.com/vi/' + currentSerie.img + '/mqdefault.jpg'"
                class="white--text align-end"
                @click="()=>{}"
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
        </v-card>
       
      </v-col>
      <v-col cols="6">
        <SerieForm
          :serie="serie" 
        />
      </v-col>
      </v-row>
  </v-card>
</template>

<script>
  import SerieForm from "@/components/form/SerieForm.vue"
  export default {
    name: 'SeasonMetadata',
    components : {
      SerieForm
    },
    props : {
      serie : {
        type : Object,
      }
    },
    watch : {
      serie : function(serie) {
        if(serie) {
          this.currentSerie = serie
          console.log("Watch serie : ", serie)
        }
      }
    },
    data () {
      return {
        currentSerie : {
          img : ""
        }
      }
    },
    mounted() {      
      if(this.serie)
        this.currentSerie = this.serie
    },
    methods : {}
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
