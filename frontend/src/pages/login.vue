<template>
  <f7-page no-toolbar no-navbar no-swipeback login-screen>
    <f7-login-screen-title>Einloggen</f7-login-screen-title>
    <f7-list form>
      <f7-list-input
        label="Username"
        type="text"
        placeholder="Nutzername"
        :value="username"
        @input="username = $event.target.value"
      ></f7-list-input>
      <f7-list-input
        label="Password"
        type="password"
        placeholder="Passwort"
        :value="password"
        @input="password = $event.target.value"
      ></f7-list-input>
    </f7-list>
    <f7-list>
      <f7-list-button @click="signIn">Einloggen</f7-list-button>
      <f7-block-footer
        >Willkommen bei Handshake 2.0!<br />Klicke auf "Einloggen" um den Screen
        zu schließen.</f7-block-footer
      >
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    signIn() {
      const self = this;
      const app = self.$f7;
      const router = self.$f7router;
      this.sendToBackend(self.username, self.password);
      app.dialog.alert(
        `Username: ${self.username}<br>Password: ${self.password}`,
        () => {
          router.back();
        }
      );
    },
    sendToBackend(username, password) {
      const http = require("http");

      const data = JSON.stringify({
        username: self.username,
        password: self.password,
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
      });

      req.write(data);
      req.end();
    },
  },
};
</script>