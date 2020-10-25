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
      <f7-list-item link="/host/123?mode=freunde" title="Testseite Freunde"></f7-list-item>
      <f7-list-item link="/host/123?mode=vk" title="Testseite Visitenkarte"></f7-list-item>
      <f7-list-item link="/host/123?mode=gewerbe" title="Testseite Gewerbe"></f7-list-item>
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
      <f7-list-item link="/login/" title="Login"></f7-list-item>
      <f7-list-item link="/register/" title="Registrieren"></f7-list-item>
      <f7-list-item v-on:click="testRouter" title="TestRouter"></f7-list-item>
    </f7-list>

    <f7-block-title>Mein QR-Code</f7-block-title>
    <f7-block strong inset>
      <f7-segmented raised tag="p">
        <f7-button :active="mode == 'freunde'" @click="setMode('freunde')"
          >Freunde</f7-button
        >
        <f7-button :active="mode == 'vk'" @click="setMode('vk')"
          >Visitenkarte</f7-button
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
  computed: {
    options: function(){
      return {
        data: "beispiel-url/" + this.id + '?mode=' + this.mode,
        size: 300,
        correctLevel: "H",
      }
    }
  },
  data: function () {
    return {
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
    testRouter() {
      this.$f7.views.main.router.navigate('/login/', { reloadCurrent: true });
    }
  },
};
</script>