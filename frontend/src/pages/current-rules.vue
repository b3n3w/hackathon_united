<template>
  <f7-page name="current-rules">
    <f7-navbar title="Momentane Regelungen" back-link="Zurück"></f7-navbar>

    <f7-block-title large>Landkreis Fulda</f7-block-title>
    <f7-block-title medium>Stand: 23.10.2020</f7-block-title>
    <f7-block-title>Inzidenzwert</f7-block-title>
    <f7-block strong class="text-align-center">
      <f7-gauge
        type="circle"
        :value="0.3"
        :size="250"
        border-color="#2196f3"
        :border-width="10"
        value-text="50.2"
        :value-font-size="41"
        value-text-color="#2196f3"
      ></f7-gauge>
    </f7-block>

    <f7-block-title>Maximale Personenanzahl</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col class="text-align-center">
          <f7-gauge
            type="semicircle"
            :value="0.2"
            value-text="10"
            value-text-color="#f44336"
            label-text="private Zusammenkünfte"
            border-color="#f44336"
          ></f7-gauge>
        </f7-col>
        <f7-col class="text-align-center">
          <f7-gauge
            type="semicircle"
            :value="0.3"
            value-text="100"
            value-text-color="#e91e63"
            border-color="#e91e63"
            label-text="öffentliche Veranstaltungen"
            label-text-color="#333"
          ></f7-gauge>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block strong inset>
    <f7-button @click="update" fill>Stand aktualisieren</f7-button>
    </f7-block>

    <f7-block-title>Beschreibung</f7-block-title>
    <f7-card
      content="Nähere Informationen sowie Kontaktmöglichkeiten finden Sie auf der Website des zuständigen Gesundheitsamtes."
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
    update() {
      this.$f7router.navigate('/current-rules/', { reloadCurrent: true });
    }
  },
};
</script>