<template>
  <f7-page name="scan">
    <f7-navbar title="QR-Code scannen" back-link="Back"></f7-navbar>

    <f7-block strong>
      <video autoplay ref="video"></video>
    </f7-block>
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
      canvas: false
    };
  },
  mounted: function () {
    this.startStream();
  },
  beforeDestroy: function () {},
  methods: {
    startStream: function () {
      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({ audio: false, video: true })
          .then(
            function (stream) {
              this.$refs.video.srcObject = stream;
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
        alert(code.data);
      } else {
        console.log("nichts gefunden");
        setTimeout(this.getFrame, 100);
      }
    },
  },
};
</script>