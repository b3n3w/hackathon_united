<template>
  <f7-page name="start-party">
    <f7-navbar title="Party starten" back-link="Back"></f7-navbar>

    <f7-block-title medium>Beschreibung</f7-block-title>
    <f7-block strong inset>
      <f7-input
        label="Beschreibung"
        type="textarea"
        placeholder="Beschreibung"
        @input="description = $event.target.value"
        :value="description"
      >
        <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
      </f7-input>
    </f7-block>

    <f7-block-title medium>Standard-Zeitraum</f7-block-title>

    <f7-block-title>Minimaler Zeitraum in Stunden</f7-block-title>
    <f7-list simple-list>
      <f7-list-item>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon
            ios="f7:sun_min"
            aurora="f7:sun_min"
            md="material:brightness_low"
          ></f7-icon>
        </f7-list-item-cell>
        <f7-list-item-cell class="flex-shrink-3">
          <f7-range
            :min="0"
            :max="23.9"
            :step="0.1"
            :value="min"
            :label="true"
            @range:change="onMinChange"
            color="orange"
          ></f7-range>
        </f7-list-item-cell>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon
            ios="f7:sun_max_fill"
            aurora="f7:sun_max_fill"
            md="material:brightness_high"
          ></f7-icon>
        </f7-list-item-cell>
      </f7-list-item>
    </f7-list>

    <f7-block-title>Maximaler Zeitraum in Stunden</f7-block-title>
    <f7-list simple-list>
      <f7-list-item>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon
            ios="f7:sun_min"
            aurora="f7:sun_min"
            md="material:brightness_low"
          ></f7-icon>
        </f7-list-item-cell>
        <f7-list-item-cell class="flex-shrink-3">
          <f7-range
            :min="0.1"
            :max="24"
            :step="0.1"
            :value="max"
            :label="true"
            @range:change="onMaxChange"
            color="orange"
          ></f7-range>
        </f7-list-item-cell>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon
            ios="f7:sun_max_fill"
            aurora="f7:sun_max_fill"
            md="material:brightness_high"
          ></f7-icon>
        </f7-list-item-cell>
      </f7-list-item>
    </f7-list>

    <f7-block>
      <f7-row tag="p">
        <f7-col tag="span">
          <f7-button v-on:click="submit" raised fill>Party starten</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  data: function () {
    return {
      description: "",
      min: 1,
      max: 2,
    };
  },
  methods: {
    onMinChange(value) {
      this.min = value;
    },
    onMaxChange(value) {
      this.max = value;
    },
    submit() {
      const description = this.description;
      const min = Math.round(this.min * 60);
      const max = Math.round(this.max * 60);

      console.log(description);
      console.log(min);
      console.log(max);

      // TODO Backend
    },
  },
};
</script>