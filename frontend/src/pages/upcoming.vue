<template>
  <f7-page name="host">
    <img
      class="hs-img hs-hero"
      :src="hero"
    />
    <f7-navbar title="Einchecken" back-link="Zurück"></f7-navbar>
    <f7-block>
      <f7-block-title medium>{{ name }}</f7-block-title>
      <div v-if="!checkedIn">
        <p>
          Dokumentieren Sie Ihren Aufenthalt und helfen Sie mit, die Verfolgung
          von Kontaktketten zu gewährleisten und die Ausbreitung des Virus zu
          verhindern.
        </p>
        <div class="hs-benefits">
          <div>
            <f7-icon f7="checkmark" color="green"></f7-icon> Automatische
            Löschung der Daten nach 21 Tagen
          </div>
          <div>
            <f7-icon f7="checkmark" color="green"></f7-icon> Verwendung nur im
            Rahmen der Verfolgung von Kontaktketten
          </div>
          <div>
            <f7-icon f7="checkmark" color="green"></f7-icon> Verschlüsselte
            Speicherung auf Servern in Deutschland
          </div>
        </div>
      </div>
      <div v-if="checkedIn">
        <div class="hs-benefits">
          <div>
            <f7-icon f7="checkmark" color="green"></f7-icon> {{ checkedInText }}
            <div>
              <a class="color-gray" @click="showCheckedIn = true"
                >Bestätigung anzeigen</a
              >
            </div>
          </div>
        </div>
        <f7-button large fill color="red" @click="checkOut"
          >Auschecken</f7-button
        >
      </div>
      <f7-button v-else fill large @click="checkIn">Einchecken</f7-button>
      <div class="hs-fineprint">
        Durch Klicken des Buttons erkläre ich mich einverstanden mit der
        Übertragung der Daten an den oben genannten Anbieter.
        <a href="/datenschutz/">Datenschutzerklärung</a>
      </div>
    </f7-block>
    <template v-if="checkedIn">
      <f7-list>
        <f7-list-item
          v-for="(action, index) in actions"
          :key="index"
          :link="action.link"
        >
          <f7-icon slot="media" :f7="action.icon" color="theme"></f7-icon>
          {{ action.name }}
        </f7-list-item>
      </f7-list>
      <f7-block-title>{{ aboutText }}</f7-block-title>
      <f7-block strong>
        {{ desc }}
      </f7-block>
      <f7-block-title>Impressionen</f7-block-title>
      <f7-row no-gap>
        <f7-col v-for="(imp, index) in impressions" :key="index">
          <img class="hs-img" :src="imp">
        </f7-col>
      </f7-row>
      <template v-if="mode == 'gewerbe'">
        <f7-block-title>Rezensionen</f7-block-title>
        <f7-list media-list>
          <ul>
            <review
              author="Markus"
              rating="4"
              text="Das Rumpsteak hier ist der Wahnsinn. Nur zu empfehlen."
            ></review>
            <review
              author="Justin"
              rating="5"
              text="Fantastischer Service und leckeres Essen."
            ></review>
            <review
              author="Pascal"
              rating="3"
              text="Das Essen war lecker, doch die Wartezeit etwas hoch."
            ></review>
          </ul>
        </f7-list>
      </template>
    </template>
    <transition slot="fixed" name="scroll">
      <div v-if="showCheckedIn" class="hs-popup color-green">
        <img
          class="hs-img hs-hero"
          :src="hero"
        />
        <div class="hs-popup-inner">
          <i class="f7-icons hs-checkmark">checkmark</i>
          <p>
            Check-in erfolgreich
            <span class="hs-popup-text">{{ checkedInText }}</span>
          </p>
          <p>
            <f7-button
              large
              class="hs-button"
              fill
              @click="showCheckedIn = false"
              color="white"
              >Weiter</f7-button
            >
          </p>
        </div>
      </div>
    </transition>
  </f7-page>
</template>
<script>
import review from "../components/review.vue";
export default {
  components: {
    review,
  },
  props: {
    id: String,
  },
  data: function () {
    return {
      checkedIn: false,
      checkInTime: null,
      showCheckedIn: false,
      name: "",
    };
  },
  computed: {
    desc: function(){
      if(this.mode == 'gewerbe') return 'Hier werden nicht nur Hack-Freunde und Fleisch-Aficionados glücklich - im Gasthof zum Hackathon ist für jeden etwas dabei. Wir haben 25 Stunden am Tag für Sie geöffnet.';
      else if (this.mode == 'vk') return 'Ich stehe Ihnen gerne für Fragen zur Verfügung. Kontaktieren Sie mich einfach, ich freue mich!'
      return 'Hacken. Zocken. Mag Katzen.'
    },
    hero: function(){
      if (this.mode == 'gewerbe') return 'https://84.167.159.137/restaurant_vienna_1280.jpg';
      else if (this.mode = 'vk') return 'https://84.167.159.137/max.webp';
      return 'https://84.167.159.137/patricia.webp';
    },
    checkedInText: function () {
      return "Eingecheckt um " + this.checkInTime.toLocaleTimeString();
    },
    aboutText: function(){
      if(this.mode == 'gewerbe') return 'Über uns';
      return 'Über mich';
    },
    mode: function () {
      if (this.$f7route.query.hasOwnProperty("mode"))
        return this.$f7route.query.mode;
      return "freunde";
    },
    actions: function () {
      if (this.mode == "gewerbe") {
        return [
          {
            icon: "map",
            link: "#",
            name: "Speisekarte",
          },
          {
            icon: "hand_raised",
            link: "#",
            name: "Bestellen",
          },
        ];
      } else if (this.mode == "vk") {
        return [
          {
            icon: "person",
            link: "#",
            name: "Xing-Profil",
          },
          {
            icon: "pencil",
            link: '#',
            name: 'Geschäftliche E-Mail senden'
          },
          {
            icon: "phone",
            link: '#',
            name: 'Telefonisch Kontakt aufnehmen'
          }
        ];
      }
    },
    impressions: function(){
      if(this.mode == 'gewerbe') return ['https://84.167.159.137/pizza_1280.jpg', 'https://84.167.159.137/sushi_1280.jpg'];
      else if (this.mode == 'vk') return [];
      return ['https://media.giphy.com/media/ZdlN56usaKaQg/giphy.gif'];
    }
  },
  mounted: function () {
    this.loadHost();
    if (this.id === "123") {
      this.name = "Barabend bei Patricia";
    } else {
      this.name = "Stammtisch mit Kollegen";
    }
    console.log(this.mode);
  },
  methods: {
    loadHost: function () {
      console.log(this.id);
    },
    checkIn: function () {
      if (!this.checkedIn) {
        if (this.mode == "gewerbe") this.showCheckedIn = true;
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
  justify-content: space-between;
  align-items: center;
  font-size: 40px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  font-weight: 300;
  opacity: 1;
  text-align: center;
}
.hs-popup-inner {
  padding: 20px;
}
.hs-popup-text{
  font-size: 16px;
  display: block;
}
.hs-checkmark {
  font-size: 80px;
  animation: signedin 2s linear infinite;
}
.hs-button {
  color: #4cd964 !important;
}
.hs-benefits {
  margin-left: 10px;
  margin-bottom: 20px;
}
.hs-fineprint {
  font-size: 12px;
  color: #777777;
  margin-top: 7px;
  text-align: center;
}
.hs-img {
  width: 100%;
}
.hs-hero{
  max-height: 400px;
  object-fit: cover;
}
.scroll-enter-active,
.scroll-leave-active {
  transition: transform 0.5s;
}
.scroll-enter,
.scroll-leave-to {
  transform: translateY(-100vh);
}
@keyframes signedin {
  0%,
  100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(50px);
    opacity: 0;
  }
}
</style>