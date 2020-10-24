<template>
  <f7-page name="host">
    <f7-navbar :title="name" back-link="Back"></f7-navbar>

    <f7-block>
      <h1>{{ name }}</h1>
      <div v-if="checkedIn">
        <div class="hs-checked-in">
          <f7-icon f7="checkmark" color="green"></f7-icon>
          {{ checkedInText }}
        </div>
        <f7-button large fill color="red" @click="checkOut"
          >Auschecken</f7-button
        >
      </div>
      <f7-button v-else fill large @click="checkIn">Einchecken</f7-button>
      <div class="hs-fineprint">Durch Klicken des Buttons erkläre ich mich einverstanden mit der Übertragung der Daten an den oben genannten Anbieter. <a>Datenschutzerklärung</a></div>
    </f7-block>
    <f7-list>
      <f7-list-item link="#">
         <f7-icon slot="media" f7="map" color="theme"></f7-icon>
         Speisekarte
      </f7-list-item>
      <f7-list-item link="#">
        <f7-icon slot="media" f7="hand_raised" color="theme"></f7-icon>
        Bestellung
      </f7-list-item>
    </f7-list>
    <f7-block-title>Über uns</f7-block-title>
    <f7-block>
      {{ desc }}
    </f7-block>
    <f7-block-title>Impressionen</f7-block-title>
    <f7-block> Hier diverse Bilder </f7-block>
    <f7-block-title>Rezensionen</f7-block-title>
    <f7-block-title>Id: {{ id }}</f7-block-title>
    <transition slot="fixed" name="scroll">
      <div v-if="showCheckedIn" class="hs-popup color-green">
        <i class="f7-icons">checkmark</i>
        <div>Erfolgreich Eingecheckt</div>
        <f7-button large class="hs-button" fill @click="showCheckedIn = false" color="white">Alles klar</f7-button
        >
      </div>
    </transition>
  </f7-page>
</template>
<script>
export default {
  props: {
    id: String,
  },
  data: function () {
    return {
      name: "Justin Fabischs fabelhafte Feinschmeckereien",
      desc:
        "Gourmetgaumen schwören seit Jahren auf die feinen Delikatessen, die der kompetente Kochkünstler Justin seinen Gästen zaubert. Lassen auch Sie sich verzaubern und gehen Sie mit auf eine Reise stilvollen Understatements entlang der Feinkosthochburgen Europas.",
      checkedIn: false,
      checkInTime: null,
      showCheckedIn: false,
    };
  },
  computed: {
    checkedInText: function () {
      return "Eingecheckt um " + this.checkInTime.toLocaleTimeString();
    },
  },
  mounted: function () {
    this.loadHost();
  },
  methods: {
    loadHost: function () {
      console.log(this.id);
    },
    checkIn: function () {
      if (!this.checkedIn) {
        this.showCheckedIn = true;
        this.checkInTime = new Date();
        this.checkedIn = true;
      }
    },
    checkOut: function () {
      this.checkedIn = false;
    },
  },
};
</script>
<style lang="less" scoped>
.hs-popup {
  position: fixed;
  background-color: var(--f7-theme-color);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  font-weight: 300;
  opacity: 1;
}
.hs-popup /deep/ .f7-icons {
  font-size: 80px;
}
.hs-button {
  color: #4cd964 !important;
}
.hs-checked-in {
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.hs-fineprint{
  font-size: 12px;
  color: #777777;
  margin-top: 7px;
  text-align: center;
}
.scroll-enter-active,
.scroll-leave-active {
  transition: transform 0.5s;
}
.scroll-enter,
.scroll-leave-to {
  transform: translateY(-100vh);
}
</style>