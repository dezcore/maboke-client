let cpt = 0
let o = {};

function initProx() {
  return (
    new Proxy(o, {
      get(target, property, receiver) {
        return Reflect.get(target, property, receiver);
      },
      set(target, property, value, receiver) {
        return Reflect.set(target, property, value, receiver);
      }
    })
  )
}

const oProxy = initProx()
const yProxy = initProx()

function loadVideo(id, pHeight, pWidth, vId, yVars) {
    const playerId = id ? id :"player"
    const height = pHeight ? pHeight : "455"
    const width = pWidth ? pWidth : "700"
    const videoId = vId ? vId : "nXkgdu-frMw"
    const playerVars = yVars ? yVars : {}

    window.YT.ready(function() {
      new window.YT.Player(playerId, {
        height: height,
        width: width,
        videoId: videoId,
        playerVars: playerVars,
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      })
    })

    function onPlayerReady(event) {
      cpt++
      oProxy['$yApi' + cpt] = event.target
      //window.App.$store.commit("updatePlayerReady", {state : true})
      /*player.loadVideoByUrl({mediaContentUrl:String,
        startSeconds:Number,
        endSeconds:Number,
        suggestedQuality:String})*/
      //event.target.playVideo()
    }

    function stopPlayerHandler() {
      const {stopVideo} = oProxy.$yApi1
      
      if(stopVideo)
        oProxy.$yApi1.stopVideo()

      if(yProxy.setPlayerOverlay)
        yProxy.setPlayerOverlay(true)

    }

    function onPlayerStateChange(event) {
      if(event/*yApi.state*/ ) {
        switch(event.data){
          // Stop the video on ending so recommended videos don't pop up
          case 0:     // ended
            stopPlayerHandler() 
            break;
          case -1:    // unstarted
          case 1:     // playing
          case 2:     // paused
          case 3:     // buffering
            //window.App.$store.commit("updatePlayerReady", {state : true});
            //break;
          case 5:     // video cued
          default:
        }
      }
    }
}

export {
    loadVideo,
    oProxy,
    yProxy
}