import { ref } from 'vue';
import { defineStore } from 'pinia';

const useGlobalStore = defineStore('global', () => {
    const count = ref(0)
    /** Loading overlay */
    const loading = ref(true);
    /** ProgressBar Percentage */
    const progress = ref(null);

    // Actions
    /**
    * Show loading Overlay
    *
    * @param display - visibility
    */
    function setLoading(display) {
        loading.value = display;
        if(!display) {
            progress.value = null;
        }
    }
    
    /**
    * Update progress value
    *
    * @param v - progress value
    */
    function setProgress(value) {
        progress.value = value;
        loading.value = true;
    }

    return {setLoading, setProgress}
})

export default useGlobalStore;