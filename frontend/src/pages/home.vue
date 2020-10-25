<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar large :sliding="false">
      <f7-nav-left>
        <f7-link
          icon-ios="f7:menu"
          icon-aurora="f7:menu"
          icon-md="material:menu"
          panel-open="left"
        ></f7-link>
      </f7-nav-left>
      <f7-nav-title-large>Handshake 2.0</f7-nav-title-large>
    </f7-navbar>
    <!-- Page content-->
    <f7-list>
      <f7-list-item link="/host/123" title="Host Testseite"></f7-list-item>
      <f7-list-item link="/scan/" title="Handshake"></f7-list-item>
      <f7-list-item
        link="/current-hosting/"
        title="Meine momentane Veranstaltung"
      ></f7-list-item>
      <f7-list-item
        link="/upcoming-hosting/"
        title="Meine bevorstehenden Veranstaltungen"
      ></f7-list-item>
      <f7-list-item
        link="/current-rules/"
        title="Momentane Regelungen"
      ></f7-list-item>
    </f7-list>

    <f7-button
      icon-size="100px"
      icon-ios="f7:arrow_right_to_line"
      icon-aurora="f7:arrow_right_to_line"
      icon-material="material:last_page"
    >
      ></f7-button
    >

    <f7-block-title>Mein QR-Code</f7-block-title>
    <f7-block strong inset>
      <f7-segmented raised tag="p">
        <f7-button :active="mode == 'privat'" @click="setMode('privat')"
          >Privat</f7-button
        >
        <f7-button :active="mode == 'business'" @click="setMode('business')"
          >Geschäftlich</f7-button
        >
        <f7-button :active="mode == 'gewerbe'" @click="setMode('gewerbe')"
          >Gewerbe</f7-button
        >
      </f7-segmented>
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
  data: function () {
    return {
      options: {
        data: "beispiel-url/" + this.id,
        size: 300,
        correctLevel: "H",
      },
      mode: "privat",
    };
  },
  methods: {
    onUpdated() {
      console.log("updated");
    },
    setMode(mode) {
      console.log(mode);
      this.mode = mode;
    },
  },
};
</script>