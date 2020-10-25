<template>
  <f7-page name="scan">
    <f7-navbar title="Handshake" back-link="Back"></f7-navbar>
    <video id="video" autoplay ref="video"></video>
  </f7-page>
</template>

<script>
import jsQR from "jsqr";
export default {
  data: function () {
    return {
      constraints: {
        video: true,
        facingMode: {
          exact: "environment",
        },
      },
      canvas: false,
      stream: false
    };
  },
  mounted: function () {
    this.startStream();
  },
  beforeDestroy: function () {
    this.stream.getTracks().forEach(function(track) {
      track.stop();
    });
  },
  methods: {
    startStream: function () {
      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({ audio: false, video: true })
          .then(
            function (stream) {
              this.stream = stream;
              this.$refs.video.srcObject = this.stream;
              this.getFrame();
            }.bind(this)
          )
          .catch(function (err) {
            console.log(err);
          });
      }
    },
    getFrame: function () {
      var video = this.$refs.video;
      
      this.canvas = document.createElement('canvas');
      this.canvas.width = video.offsetWidth;
      this.canvas.height = video.offsetHeight;
      
      var context = this.canvas.getContext('2d');
      context.drawImage(video, 0, 0, video.offsetWidth, video.offsetHeight);

      const imageData = context.getImageData(0, 0, video.offsetWidth, video.offsetHeight);
      this.decodeQrCode(imageData);
    },
    decodeQrCode: function (imageData) {
      const code = jsQR(imageData.data, imageData.width, imageData.height);

      if (code) {
        console.log("Found QR code", code);
        // alert(code.data);
        this.processQrCode(code.data);
      } else {
        console.log("nichts gefunden");
        setTimeout(this.getFrame, 100);
      }
    },
    processQrCode: function(content){
      // https://hs.united.help/u/123
      try{
        var url = new URL(content);
        if(url.hostname == 'hs.united.help'){
          if(url.pathname.substring(0, 3) == '/u/'){
            var userId = url.pathname.substring(3);
            this.$f7router.navigate('/host/' + userId + url.search);
          }
        }
        
      } catch(err){
        console.log(err);
      }
    }
  },
};
</script>

<style lang="less" scoped>
#video{
  object-fit: fill;
  width: 100%;
  height: 100%;
}
</style>
