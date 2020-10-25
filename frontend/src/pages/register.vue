<template>
  <f7-page no-toolbar no-navbar no-swipeback login-screen>
    <f7-login-screen-title>Registrieren</f7-login-screen-title>
    <f7-list form>
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
        type="password"
        name="password2"
        placeholder="Passwort wiederholen"
        :value="password2"
        @input="password2 = $event.target.value"
      ></f7-list-input>
      <f7-list-input
        type="text"
        name="street"
        placeholder="Straße + Haus-Nr."
        :value="street"
        @input="street = $event.target.value"
      ></f7-list-input>
      <f7-list-input
        type="number"
        name="postalcode"
        placeholder="Postleitzahl"
        :value="postalcode"
        @input="postalcode = $event.target.value"
      ></f7-list-input>
      <f7-list-input
        type="text"
        name="city"
        placeholder="Wohnort"
        :value="city"
        @input="city = $event.target.value"
      ></f7-list-input>
      <f7-list-input
        type="number"
        name="phonenumber"
        placeholder="Handynummer"
        :value="phonenumber"
        @input="phonenumber = $event.target.value"
      ></f7-list-input>
    </f7-list>
    <f7-list></f7-list>
      <f7-button @click="signIn" raised fill>Registrieren</f7-button>
      <f7-block-footer>
        Durch Klicken des Buttons erkläre ich mich einverstanden mit der
        Übertragung der Daten an den oben genannten Anbieter.
        <a href="/datenschutz/">Datenschutzerklärung</a></f7-block-footer
      >
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      password2: "",
      street: "",
      postalcode: "",
      city: "",
      phonenumber: "",
    };
  },
  methods: {
    signIn() {
      const self = this;
      const app = self.$f7;
      const router = self.$f7router;
      this.sendToBackend();
      app.dialog.alert(
        "Vorname: " +
          this.firstname +
          "<br>Nachname: " +
          this.lastname +
          "<br>Nachname: " +
          this.lastname +
          "<br>Nutzername: " +
          this.username +
          "<br>Straße + Haus-Nr.: " +
          this.street +
          "<br>PLZ: " +
          this.postalcode +
          "<br>Wohnort: " +
          this.city +
          "<br>Handynummer: " +
          this.phonenumber,
        () => {
          router.back();
        }
      );
    },
    sendToBackend() {
      const http = require("http");

      const data = JSON.stringify({
        username: this.username,
        password: this.password,
        firstname: this.firstname,
        lastname: this.lastname,
        phonenumber: this.phonenumber,
      });

      const options = {
        hostname: "localhost",
        port: 9000,
        path: "/api/user/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": data.length,
        },
      };

      const req = http.request(options, (res) => {
        console.log("statusCode: " + res.statusCode);

        res.on("data", (d) => {
          process.stdout.write(d);
        });
      });

      req.on("error", (error) => {
        console.error(error);
        this.$f7router.navigate("/", { reloadCurrent: true });
      });

      req.write(data);
      req.end();
    },
  },
};
</script>