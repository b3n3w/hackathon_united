<template>
  <f7-page name="profile">
    <f7-navbar title="Profilseite" back-link="Back"></f7-navbar>

    <f7-block-title>Informationen</f7-block-title>
    <f7-block strong inset>
      <p>User-Id: {{ id }}</p>
      <p>QR-Code Adresse: {{ this.options.data }}</p>
    </f7-block>

    <f7-block-title>QR-Code</f7-block-title>
    <f7-block strong inset>
      <QRCanvas :options="options" @updated="onUpdated" />
    </f7-block>
  </f7-page>
</template>

<script>
import { QRCanvas } from "qrcanvas-vue";

export default {
  components: {
    QRCanvas,
  },
  props: {
    id: String,
  },
  data: function () {
    return {
      options: {
        data: "beispiel-url/" + this.id,
        size: 300,
        correctLevel: "H",
      },
    };
  },
  methods: {
    onUpdated() {
      console.log("updated");
    },
  },
};
</script>