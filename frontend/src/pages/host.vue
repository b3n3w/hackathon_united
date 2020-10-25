<template>
  <f7-page name="host">
    <img class="hs-img hs-hero" :src="hero" />
    <f7-navbar title="Profil" back-link="Zurück"></f7-navbar>
    <f7-block>
      <f7-block-title large>{{ name }}</f7-block-title>
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
        <f7-button large fill color="red" @click="checkOut">{{
          leaveText
        }}</f7-button>
      </div>
      <f7-button v-else fill large @click="checkIn">{{
        checkInText
      }}</f7-button>
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

      <template v-if="mode != 'vk' && mode != 'gewerbe'">
      <f7-block-title>
        <f7-icon
          ios="f7:music_note_2"
          aurora="f7:music_note_2"
          md="material:music_note"
        ></f7-icon>
        Spotify</f7-block-title
      >
      <f7-block-title class="display-flex justify-content-space-between"
        >Queen <span>Bohemian Rhapsody</span></f7-block-title
      >
      <f7-list simple-list>
        <f7-list-item>
          <f7-list-item-cell class="width-auto flex-shrink-0">
            <f7-icon
              ios="f7:shuffle"
              aurora="f7:shuffle"
              md="material:shuffle"
            ></f7-icon>
          </f7-list-item-cell>
          <f7-list-item-cell class="width-auto flex-shrink-0">
            <f7-icon
              ios="f7:backward_fill"
              aurora="f7:backward_fill"
              md="material:fast_rewind"
            ></f7-icon>
          </f7-list-item-cell>
          <f7-list-item-cell class="width-auto flex-shrink-3">
            <f7-icon
              ios="f7:play_fill"
              aurora="f7:play_fill"
              md="material:play_arrow"
            ></f7-icon>
          </f7-list-item-cell>
          <f7-list-item-cell class="width-auto flex-shrink-0">
            <f7-icon
              ios="f7:forward_fill"
              aurora="f7:forward_fill"
              md="material:fast_forward"
            ></f7-icon>
          </f7-list-item-cell>
          <f7-list-item-cell class="width-auto flex-shrink-0">
            <f7-icon
              ios="f7:repeat"
              aurora="f7:repeat"
              md="material:repeat"
            ></f7-icon>
          </f7-list-item-cell>
        </f7-list-item>
      </f7-list>
      </template>

      <f7-block-title>{{ aboutText }}</f7-block-title>
      <f7-block strong>
        {{ desc }}
      </f7-block>
      <f7-block-title>Impressionen</f7-block-title>
      <f7-row no-gap>
        <f7-col v-for="(imp, index) in impressions" :key="index">
          <img class="hs-img" :src="imp" />
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
        <img class="hs-img hs-hero" :src="hero" />
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
    };
  },
  computed: {
    name: function () {
      if (this.mode == "gewerbe") return "Gasthof zum Hackathon";
      else if (this.mode == "vk") return "Herr Mustermann";
      return "Patricia";
    },
    desc: function () {
      if (this.mode == "gewerbe")
        return "Hier werden nicht nur Hack-Freunde und Fleisch-Aficionados glücklich - im Gasthof zum Hackathon ist für jeden etwas dabei. Wir haben 25 Stunden am Tag für Sie geöffnet.";
      else if (this.mode == "vk")
        return "Ich stehe Ihnen gerne für Fragen zur Verfügung. Kontaktieren Sie mich einfach, ich freue mich!";
      return "Hacken. Zocken. Mag Katzen.";
    },
    hero: function () {
      if (this.mode == "gewerbe")
        return "https://handshake2.ddns.net/restaurant_vienna_1280.jpg";
      else if (this.mode == "vk")
        return "https://handshake2.ddns.net/maxmustermann.jpg";
      return "https://handshake2.ddns.net/patriciakoch.jpg";
    },
    checkedInText: function () {
      return "Eingecheckt um " + this.checkInTime.toLocaleTimeString();
    },
    aboutText: function () {
      if (this.mode == "gewerbe") return "Über uns";
      return "Über mich";
    },
    checkInText: function () {
      if (this.mode == "gewerbe") return "Kontaktdaten hinterlegen";
      return "Hand schütteln";
    },
    leaveText: function () {
      if (this.mode == "gewerbe") return "Verlassen";
      return "Verabschieden";
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
            link: "#",
            name: "Geschäftliche E-Mail senden",
          },
          {
            icon: "phone",
            link: "#",
            name: "Telefonisch Kontakt aufnehmen",
          },
        ];
      } else {
        return [
          {
            icon: "logo_instagram",
            link: "#",
            name: "Instagram",
          },
          {
            icon: "logo_twitter",
            link: "#",
            name: "Twitter",
          },
        ];
      }
    },
    impressions: function () {
      if (this.mode == "gewerbe")
        return [
          "https://handshake2.ddns.net/pizza_1280.jpg",
          "https://handshake2.ddns.net/sushi_1280.jpg",
        ];
      else if (this.mode == "vk")
        return [
          "https://handshake2.ddns.net/kukorobot.jpg",
          "https://handshake2.ddns.net/factory.jpg",
        ];
      return ["https://media.giphy.com/media/ZdlN56usaKaQg/giphy.gif"];
    },
  },
  mounted: function () {
    this.loadHost();
    console.log(this.mode);
  },
  methods: {
    loadHost: function () {
      console.log(this.id);
    },
    checkIn: function () {
      try {
        window.navigator.vibrate([100, 30, 200]);
      } catch (err) {
        console.log(err);
      }

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
.hs-popup-text {
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
.hs-hero {
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