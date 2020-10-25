<template>
  <f7-page name="profile">
    <f7-navbar title="Mein Profil" back-link="Back"></f7-navbar>

    <f7-block-title>Informationen</f7-block-title>
    <f7-block strong inset>
      <f7-block-title class="display-flex justify-content-space-between"
        ><span></span></f7-block-title>
      <f7-block-title class="display-flex justify-content-space-between"
        >Vorname<span>Max</span></f7-block-title>
      <f7-block-title class="display-flex justify-content-space-between"
        >Nachname<span>Mustermann</span></f7-block-title>
      <f7-block-title class="display-flex justify-content-space-between"
        >Straße + Haus-Nr.<span>Rabanusstraße 1</span></f7-block-title>
      <f7-block-title class="display-flex justify-content-space-between"
        >PLZ + Wohnort<span>36037 Fulda</span></f7-block-title>
      <f7-block-title class="display-flex justify-content-space-between"
        >Handynummer <span>0160/439205345</span></f7-block-title>
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