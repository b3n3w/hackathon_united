<template>
  <f7-app :params="f7params">
    <!-- Left panel with cover effect-->
    <f7-panel left cover theme-dark>
      <f7-view>
        <f7-page>
          <f7-navbar title="Left Panel"></f7-navbar>
          <f7-block>
            <f7-list>
              <f7-list-item link="/scan/" title="QR-Code scannen" view=".view-main" panel-close></f7-list-item>
              <f7-list-item link="/start-business/" title="Business starten" view=".view-main" panel-close></f7-list-item>
              <f7-list-item link="/start-party/" title="Party starten" view=".view-main" panel-close></f7-list-item>
              <f7-list-item link="/profile/xxx" title="Mein Profil" view=".view-main" panel-close></f7-list-item>
              <f7-list-item link="#my-login-screen" login-screen-open="#my-login-screen" title="Einloggen"></f7-list-item>
              <f7-list-item link="#my-register-screen" login-screen-open="#my-register-screen" title="Registrieren"></f7-list-item>


            </f7-list>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>

    <!-- Right panel with reveal effect-->
    <f7-panel right reveal theme-dark>
      <f7-view>
        <f7-page>
          <f7-navbar title="Right Panel"></f7-navbar>
          <f7-block>Right panel content goes here</f7-block>
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

    <f7-login-screen id="my-login-screen">
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
            <f7-list-button
              title="Einloggen"
              @click="alertLoginData"
            ></f7-list-button>
            <f7-block-footer>
              Das ist ein Beispieltext!<br />Klicke auf "Einloggen" um den Screen zu schließen.
            </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>

    
    <f7-login-screen id="my-register-screen">
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
              type="password"
              name="password"
              placeholder="Passwort"
              :value="password"
              @input="password = $event.target.value"
            ></f7-list-input>
            <f7-list-input
              type="password2"
              name="password2"
              placeholder="Passwort wiederholen"
              :value="password2"
              @input="password2 = $event.target.value"
            ></f7-list-input>
            <f7-list-input
              type="text"
              name="info1"
              placeholder="Info1"
              :value="info1"
              @input="info1 = $event.target.value"
            ></f7-list-input>
          </f7-list>
          <f7-list>
            <f7-list-button
              title="Registrieren"
              @click="alertRegisterData"
            ></f7-list-button>
            <f7-block-footer>
              Das ist ein Beispieltext!<br />Klicke auf "Registrieren" um den Screen zu schließen.
            </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>


  </f7-app>
</template>
<script>
import routes from "../js/routes.js";

export default {
  data() {
    return {
      // Framework7 Parameters
      f7params: {
        name: "handshake2.0", // App name
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
      password: "",
      password2: "",
      info1: "",
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
        "Nutzername: " + this.username + "<br>Passwort: " + this.password + "<br>Info1: " + this.info1,
        () => {
          this.$f7.loginScreen.close();
        }
      );
    },
  },
  mounted() {
    this.$f7ready((f7) => {
      // Call F7 APIs here
    });
  },
};
</script>