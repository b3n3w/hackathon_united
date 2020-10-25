<template>
  <f7-page name="start-business">
    <f7-navbar title="Business starten" back-link="Back"></f7-navbar>

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

    <f7-block-title class="display-flex justify-content-space-between"
      >Minimaler Zeitraum <span>{{ Math.round(min * 10) / 10 }} Stunden</span></f7-block-title
    >
    <f7-list simple-list>
      <f7-list-item>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon
            ios="f7:arrow_down_to_line"
            aurora="f7:arrow_down_to_line"
            md="material:keyboard_arrow_down"
          ></f7-icon>
        </f7-list-item-cell>
        <f7-list-item-cell class="flex-shrink-3">
          <f7-range
            :min="0"
            :max="23.9"
            :step="0.1"
            :value="min"
            :label="true"      
            :format-label="formatLabel"
            @range:change="onMinChange"
            color="orange"
          ></f7-range>
        </f7-list-item-cell>
      </f7-list-item>
    </f7-list>

    <f7-block-title></f7-block-title>

    <f7-block-title class="display-flex justify-content-space-between"
      >Maximaler Zeitraum <span>{{ Math.round(max * 10) / 10 }} Stunden</span></f7-block-title
    >
    <f7-list simple-list>
      <f7-list-item>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon
            ios="f7:arrow_up_to_line"
            aurora="f7:arrow_up_to_line"
            md="material:keyboard_arrow_up"
          ></f7-icon>
        </f7-list-item-cell>
        <f7-list-item-cell class="flex-shrink-3">
          <f7-range
            :min="0.1"
            :max="24"
            :step="0.1"
            :value="max"
            :label="true"
            :format-label="formatLabel"
            @range:change="onMaxChange"
            color="orange"
          ></f7-range>
        </f7-list-item-cell>
      </f7-list-item>
    </f7-list>

    <f7-block-title medium>Öffnungszeiten</f7-block-title>
    <f7-block-title class="display-flex justify-content-space-between"
      >Montag
      <span
        >{{ openingMonday }} Uhr - {{ closingMonday }} Uhr</span
      ></f7-block-title
    >
    <f7-list simple-list>
      <f7-list-item>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon
            ios="f7:arrow_left_to_line"
            aurora="f7:arrow_left_to_line"
            md="material:first_page"
          ></f7-icon>
        </f7-list-item-cell>
        <f7-list-item-cell class="flex-shrink-3">
          <f7-range
            :min="0"
            :max="24"
            :step="1"
            :value="[openingMonday, closingMonday]"
            :label="true"
            :dual="true"
            color="orange"
            @range:change="onMondayChange"
          ></f7-range>
        </f7-list-item-cell>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon
            ios="f7:arrow_right_to_line"
            aurora="f7:arrow_right_to_line"
            md="material:last_page"
          ></f7-icon>
        </f7-list-item-cell>
      </f7-list-item>
    </f7-list>

    <f7-block-title class="display-flex justify-content-space-between"
      >Dienstag
      <span
        >{{ openingTuesday }} Uhr - {{ closingTuesday }} Uhr</span
      ></f7-block-title
    >
    <f7-list simple-list>
      <f7-list-item>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon
            ios="f7:arrow_left_to_line"
            aurora="f7:arrow_left_to_line"
            md="material:first_page"
          ></f7-icon>
        </f7-list-item-cell>
        <f7-list-item-cell class="flex-shrink-3">
          <f7-range
            :min="0"
            :max="24"
            :step="1"
            :value="[openingTuesday, closingTuesday]"
            :label="true"
            :dual="true"
            color="orange"
            @range:change="onTuesdayChange"
          ></f7-range>
        </f7-list-item-cell>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon
            ios="f7:arrow_right_to_line"
            aurora="f7:arrow_right_to_line"
            md="material:last_page"
          ></f7-icon>
        </f7-list-item-cell>
      </f7-list-item>
    </f7-list>

    <f7-block-title class="display-flex justify-content-space-between"
      >Mittwoch
      <span
        >{{ openingWednesday }} Uhr - {{ closingWednesday }} Uhr</span
      ></f7-block-title
    >
    <f7-list simple-list>
      <f7-list-item>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon
            ios="f7:arrow_left_to_line"
            aurora="f7:arrow_left_to_line"
            md="material:first_page"
          ></f7-icon>
        </f7-list-item-cell>
        <f7-list-item-cell class="flex-shrink-3">
          <f7-range
            :min="0"
            :max="24"
            :step="1"
            :value="[openingWednesday, closingWednesday]"
            :label="true"
            :dual="true"
            color="orange"
            @range:change="onWednesdayChange"
          ></f7-range>
        </f7-list-item-cell>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon
            ios="f7:arrow_right_to_line"
            aurora="f7:arrow_right_to_line"
            md="material:last_page"
          ></f7-icon>
        </f7-list-item-cell>
      </f7-list-item>
    </f7-list>

    <f7-block-title class="display-flex justify-content-space-between"
      >Donnerstag
      <span
        >{{ openingThursday }} Uhr - {{ closingThursday }} Uhr</span
      ></f7-block-title
    >
    <f7-list simple-list>
      <f7-list-item>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon
            ios="f7:arrow_left_to_line"
            aurora="f7:arrow_left_to_line"
            md="material:first_page"
          ></f7-icon>
        </f7-list-item-cell>
        <f7-list-item-cell class="flex-shrink-3">
          <f7-range
            :min="0"
            :max="24"
            :step="1"
            :value="[openingThursday, closingThursday]"
            :label="true"
            :dual="true"
            color="orange"
            @range:change="onThursdayChange"
          ></f7-range>
        </f7-list-item-cell>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon
            ios="f7:arrow_right_to_line"
            aurora="f7:arrow_right_to_line"
            md="material:last_page"
          ></f7-icon>
        </f7-list-item-cell>
      </f7-list-item>
    </f7-list>

    <f7-block-title class="display-flex justify-content-space-between"
      >Freitag
      <span
        >{{ openingFriday }} Uhr - {{ closingFriday }} Uhr</span
      ></f7-block-title
    >
    <f7-list simple-list>
      <f7-list-item>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon
            ios="f7:arrow_left_to_line"
            aurora="f7:arrow_left_to_line"
            md="material:first_page"
          ></f7-icon>
        </f7-list-item-cell>
        <f7-list-item-cell class="flex-shrink-3">
          <f7-range
            :min="0"
            :max="24"
            :step="1"
            :value="[openingFriday, closingFriday]"
            :label="true"
            :dual="true"
            color="orange"
            @range:change="onFridayChange"
          ></f7-range>
        </f7-list-item-cell>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon
            ios="f7:arrow_right_to_line"
            aurora="f7:arrow_right_to_line"
            md="material:last_page"
          ></f7-icon>
        </f7-list-item-cell>
      </f7-list-item>
    </f7-list>

    <f7-block-title class="display-flex justify-content-space-between"
      >Samstag
      <span
        >{{ openingSaturday }} Uhr - {{ closingSaturday }} Uhr</span
      ></f7-block-title
    >
    <f7-list simple-list>
      <f7-list-item>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon
            ios="f7:arrow_left_to_line"
            aurora="f7:arrow_left_to_line"
            md="material:first_page"
          ></f7-icon>
        </f7-list-item-cell>
        <f7-list-item-cell class="flex-shrink-3">
          <f7-range
            :min="0"
            :max="24"
            :step="1"
            :value="[openingSaturday, closingSaturday]"
            :label="true"
            :dual="true"
            color="orange"
            @range:change="onSaturdayChange"
          ></f7-range>
        </f7-list-item-cell>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon
            ios="f7:arrow_right_to_line"
            aurora="f7:arrow_right_to_line"
            md="material:last_page"
          ></f7-icon>
        </f7-list-item-cell>
      </f7-list-item>
    </f7-list>

    <f7-block-title class="display-flex justify-content-space-between"
      >Sonntag
      <span
        >{{ openingSunday }} Uhr - {{ closingSunday }} Uhr</span
      ></f7-block-title
    >
    <f7-list simple-list>
      <f7-list-item>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon
            ios="f7:arrow_left_to_line"
            aurora="f7:arrow_left_to_line"
            md="material:first_page"
          ></f7-icon>
        </f7-list-item-cell>
        <f7-list-item-cell class="flex-shrink-3">
          <f7-range
            :min="0"
            :max="24"
            :step="1"
            :value="[openingSunday, closingSunday]"
            :label="true"
            :dual="true"
            color="orange"
            @range:change="onSundayChange"
          ></f7-range>
        </f7-list-item-cell>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon
            ios="f7:arrow_right_to_line"
            aurora="f7:arrow_right_to_line"
            md="material:last_page"
          ></f7-icon>
        </f7-list-item-cell>
      </f7-list-item>
    </f7-list>

    <f7-block>
      <f7-row tag="p">
        <f7-col tag="span">
          <f7-button v-on:click="submit" raised fill
            >Business starten</f7-button
          >
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
      openingMonday: 8,
      openingTuesday: 8,
      openingWednesday: 8,
      openingThursday: 8,
      openingFriday: 8,
      openingSaturday: 8,
      openingSunday: 8,
      closingMonday: 18,
      closingTuesday: 18,
      closingWednesday: 18,
      closingThursday: 18,
      closingFriday: 18,
      closingSaturday: 18,
      closingSunday: 18,
    };
  },
  methods: {
    onMondayChange(values) {
      this.openingMonday = values[0];
      this.closingMonday = values[1];
    },
    onTuesdayChange(values) {
      this.openingTuesday = values[0];
      this.closingTuesday = values[1];
    },
    onWednesdayChange(values) {
      this.openingWednesday = values[0];
      this.closingWednesday = values[1];
    },
    onThursdayChange(values) {
      this.openingThursday = values[0];
      this.closingThursday = values[1];
    },
    onFridayChange(values) {
      this.openingFriday = values[0];
      this.closingFriday = values[1];
    },
    onSaturdayChange(values) {
      this.openingSaturday = values[0];
      this.closingSaturday = values[1];
    },
    onSundayChange(values) {
      this.openingSunday = values[0];
      this.closingSunday = values[1];
    },
    onMinChange(value) {
      this.min = value;
    },
    onMaxChange(value) {
      this.max = value;
    },
    formatLabel(value) {
      return Math.round(value * 10) / 10;
    },
    submit() {
      const description = this.description;
      const min = Math.round(this.min * 60);
      const max = Math.round(this.max * 60);

      const opening = [
        this.openingMonday,
        this.openingTuesday,
        this.openingWednesday,
        this.openingThursday,
        this.openingFriday,
        this.openingSaturday,
        this.openingSunday,
      ];

      const closing = [
        this.closingMonday,
        this.closingTuesday,
        this.closingWednesday,
        this.closingThursday,
        this.closingFriday,
        this.closingSaturday,
        this.closingSunday,
      ];

      console.log(description);
      console.log(min);
      console.log(max);
      console.log(opening);
      console.log(closing);

      // TODO Backend
    },
  },
};
</script>