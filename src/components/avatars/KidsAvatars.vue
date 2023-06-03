<template>
  <div>
    <v-avatar
      v-for="n in 7"
      :key="n"
      color="brown"
      class="pa-2 ma-2"
      size="150"
    >
      <v-img 
        alt="Avatar"
        src="https://w7.pngwing.com/pngs/133/677/png-transparent-drawing-titeuf-season-2-character-quiz-ub-boy-fictional-character-cartoon.png"
      >
      </v-img>
    </v-avatar>
  </div>
</template>
<script>
  export default {
    name: 'KidsAvatars',
    methods : {}
  }
</script>
