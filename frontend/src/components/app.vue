<template>
  <f7-app :params="f7params">
    <!-- Left panel with cover effect-->
    <f7-panel left theme-dark>
      <f7-view>
        <f7-page>
          <f7-navbar title="Menü"></f7-navbar>
          <!--<f7-block>-->
            <f7-list>
              <f7-list-item
                link="/start-business/"
                title="Business starten"
                view=".view-main"
                panel-close
              ></f7-list-item>
              <f7-list-item
                link="/start-private/"
                title="Private Veranstaltung starten"
                view=".view-main"
                panel-close
              ></f7-list-item>
              <f7-list-item
                link="/scan/"
                title="QR-Code scannen"
                view=".view-main"
                panel-close
              ></f7-list-item>
              <f7-list-item
                link="/profile/xxx"
                title="Mein Profil"
                view=".view-main"
                panel-close
              ></f7-list-item>
              <f7-list-item
                link="#my-login-screen"
                login-screen-open="#my-login-screen"
                title="Einloggen"
              ></f7-list-item>
              <f7-list-item
                link="#my-register-screen"
                login-screen-open="#my-register-screen"
                title="Registrieren"
              ></f7-list-item>
            </f7-list>
          <!--</f7-block>-->
        </f7-page>
      </f7-view>
    </f7-panel>

    <!-- Your main view, should have "view-main" class -->
    <f7-view main class="safe-areas" url="/"></f7-view>

    <!-- Popup -->
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>Popup content goes here.</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

    <!-- <f7-login-screen id="my-login-screen" modal-in>
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Einloggen</f7-login-screen-title>
          <f7-list form>
            <f7-list-input
              type="text"
              name="username"
              placeholder="Nutzername"
              :value="username"
              @input="username = $event.target.value"
            ></f7-list-input>
            <f7-list-input
              type="password"
              name="password"
              placeholder="Passwort"
              :value="password"
              @input="password = $event.target.value"
            ></f7-list-input>
          </f7-list>
          <f7-list>
            <f7-button @click="alertLoginData" raised fill>
              Einloggen
            </f7-button>
            <f7-block-footer>
              Willkommen bei Handshake 2.0!<br />Klicke auf "Einloggen" um den
              Screen zu schließen.
            </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>

    <f7-login-screen id="my-register-screen" modal-in>
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Registrieren</f7-login-screen-title>
          <f7-list form>
            <f7-list-input
              type="text"
              name="username"
              placeholder="Nutzername"
              :value="username"
              @input="username = $event.target.value"
            ></f7-list-input>
            <f7-list-input
              type="text"
              name="firstname"
              placeholder="Vorname"
              :value="firstname"
              @input="firstname = $event.target.value"
            ></f7-list-input>
            <f7-list-input
              type="text"
              name="lastname"
              placeholder="Nachname"
              :value="lastname"
              @input="lastname = $event.target.value"
            ></f7-list-input>
            <f7-list-input
              type="password"
              name="password"
              placeholder="Passwort"
              :value="password"
              @input="password = $event.target.value"
            ></f7-list-input>
            <f7-list-input
              type="password"
              name="password2"
              placeholder="Passwort wiederholen"
              :value="password2"
              @input="password2 = $event.target.value"
            ></f7-list-input>
            <f7-list-input
              type="number"
              name="phonenumber"
              placeholder="Handynummer"
              :value="phonenumber"
              @input="phonenumber = $event.target.value"
            ></f7-list-input>
          </f7-list>
          <f7-list>
            <f7-button @click="alertRegisterData" raised fill>
              Registrieren</f7-button
            >
            <f7-block-footer>
              Willkommen bei Handshake 2.0!<br />Klicke auf "Registrieren" um
              den Screen zu schließen.
            </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen> -->
  </f7-app>
</template>
<script>
import routes from "../js/routes.js";

export default {
  data() {
    return {
      // Framework7 Parameters
      f7params: {
        name: "Handshake 2.0", // App name
        theme: "auto", // Automatic theme detection

        // App routes
        routes: routes,
        // Register service worker
        serviceWorker: {
          path: "/service-worker.js",
        },
      },
      // Login/Register screen data
      username: "",
      firstname: "",
      lastname: "",
      password: "",
      password2: "",
      phonenumber: "",
    };
  },
  methods: {
    alertLoginData() {
      this.$f7.dialog.alert(
        "Nutzername: " + this.username + "<br>Passwort: " + this.password,
        () => {
          this.$f7.loginScreen.close();
        }
      );
    },

    alertRegisterData() {
      this.$f7.dialog.alert(
        "Nutzername: " +
          this.username +
          "<br>Vorname: " +
          this.firstname +
          "<br>Nachname: " +
          this.lastname +
          "<br>Handynummer: " +
          this.phonenumber,
        () => {
          this.$f7.loginScreen.close();
        }
      );
    },
  },
  mounted() {
    // this.$f7.loginScreen.open();

    /*const user = null;
    if (user == null) {
      console.log("mounted home");
    }*/

    this.$f7ready((f7) => {
      // Call F7 APIs here
    });
  },
};
</script>