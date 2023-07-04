
export default {
    data: () => ({
      windowCode : "md" 
    }),
    created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods : {
      handleResize : function() {
        this.setWindowCode(window.innerWidth)
        //console.log("test resize  topBar : ", window.innerWidth, ", ", window.innerHeight)
      },
      setWindowCode : function(width) {
        if(width < 600)
          this.windowCode = "xs"
        else if(600 < width && width < 960)
          this.windowCode = "sm"
        else if(960 < width && width < 1280)
          this.windowCode = "md"
        else if(1280 < width && width < 1920)
          this.windowCode = "lg"
        else if(1920 < width && width < 2560)
          this.windowCode = "xl"
        else if(1920 < width && width < 2560)
          this.windowCode = "xxl"
        else
          this.windowCode = "md"
        //console.log("windowCode : ", this.windowCode)
      }
    }
}