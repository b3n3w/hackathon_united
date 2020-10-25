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
      <f7-list-item link="/scan/" title="Handshake">
        <f7-icon slot="media" f7="qrcode" color="theme"></f7-icon>
      </f7-list-item>
      <f7-list-item link="/profile/123" title="Mein Profil">
        <f7-icon slot="media" f7="person_circle" color="theme"></f7-icon>
      </f7-list-item>
      <f7-list-item link="/current-hosting/" title="Meine Veranstaltung">
        <f7-icon slot="media" f7="calendar_today" color="theme"></f7-icon>
      </f7-list-item>
      <f7-list-item link="/current-rules/" title="Aktuelle Regelungen">
        <f7-icon slot="media" f7="nosign" color="theme"></f7-icon>
      </f7-list-item>
    </f7-list>

    <f7-block-title>Mein QR-Code</f7-block-title>
    <f7-block strong class="hs-qr-block">
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
    <f7-block-title>Tests und Beispiele</f7-block-title>
    <f7-list>
      <f7-list-item link="/host/123?mode=freunde" title="Profilseite Freund">
        <f7-icon slot="media" f7="smiley" color="theme"></f7-icon>
      </f7-list-item>
      <f7-list-item link="/host/123?mode=vk" title="Profilseite Geschäftlich (Visitenkarte)">
        <f7-icon slot="media" f7="briefcase" color="theme"></f7-icon>
      </f7-list-item>
      <f7-list-item link="/host/123?mode=gewerbe" title="Profilseite Gewerbe (Restaurant)">
        <f7-icon slot="media" f7="person_3" color="theme"></f7-icon>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>


<script>
import { QRCanvas } from "qrcanvas-vue";

export default {
  components: {
    QRCanvas,
  },
  computed: {
    options: function () {
      return {
        data: "https://hs.united.help/u/" + this.id + "?mode=" + this.mode,
        size: 300,
        correctLevel: "H",
      };
    },
  },
  data: function () {
    return {
      mode: "freunde",
      id: 123
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
    navigateToLogin() {
      this.$f7router.navigate("/login/", { reloadCurrent: true });
    },
  },
};
</script>
<style lang="less" scoped>
.hs-qr-block{
  text-align: center;
}
</style>