<template>
  <f7-page name="current-rules">
    <f7-navbar title="Momentane Regelungen" back-link="Back"></f7-navbar>

    <f7-block-title large>Landkreis Fulda</f7-block-title>
    <f7-block-title>Maximale Personen Anzahl</f7-block-title>
    <f7-block strong class="text-align-center">
      <f7-gauge
        type="circle"
        :value="0.3"
        :size="250"
        border-color="#2196f3"
        :border-width="10"
        value-text="50/200qm"
        :value-font-size="41"
        value-text-color="#2196f3"
        label-text="Maximale Personenanzahl"
      ></f7-gauge>
    </f7-block>

    <f7-block-title>Dauer</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col class="text-align-center">
          <f7-gauge
            type="semicircle"
            :value="0.2"
            value-text="3 Stunden"
            value-text-color="#f44336"
            label-text="Geschätzte Zeit pro Gast"
            border-color="#f44336"
          ></f7-gauge>
        </f7-col>
        <f7-col class="text-align-center">
          <f7-gauge
            type="semicircle"
            :value="0.55"
            value-text="7 Stunden"
            value-text-color="#e91e63"
            border-color="#e91e63"
            label-text="Höchste Zeit pro Gast"
            label-text-color="#333"
          ></f7-gauge>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Beschreibung</f7-block-title>
    <f7-card
      content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
    ></f7-card>
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
      gaugeValue: 0.5,
    };
  },
  methods: {
    onUpdated() {
      console.log("updated");
    },
  },
};
</script>