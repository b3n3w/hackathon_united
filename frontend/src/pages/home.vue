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
      <f7-list-item link="/scan/" title="QR-Code scannen"></f7-list-item>
      <f7-list-item link="/profile/xxx" title="Profile"></f7-list-item>
    </f7-list>


    <f7-block-title>Eigener QR-Code</f7-block-title>
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