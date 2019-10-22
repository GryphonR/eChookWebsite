var loginApp = new Vue({
  el: '#login-app',
  data: {
    teamCode: "",
    validCode: 0,
    pastLogins: [],
    loginMessage: "Enter Team Code",
    clearText: "Clear History"
  },
  mounted() {
    if (localStorage.logins) {
      this.pastLogins = JSON.parse(localStorage.logins);
      console.log(`Logins found: ${JSON.stringify(this.pastLogins)}`);
    }

  },
  watch: {
    teamCode: function() {

      let check = 1;
      if (this.teamCode.length === 0) {
        this.loginMessage = "Enter Team Code";
        check = 0;
      }
      if (this.teamCode.length < 8 && this.teamCode.length > 0) {
        check = 0;
        this.loginMessage = "Too Short"
      }
      regexp = /^[A-Za-z0-9]+$/;
      if (this.teamCode.length > 0 && !regexp.test(this.teamCode)) {
        check = 0;
        this.loginMessage = "Invalid Characters (A-Z, 1-9 only)"
      }

      if (check) {
        this.loginMessage = "Go!";
      }
      this.validCode = check
    }
  },
  computed: {
    // validCode:

  },
  methods: {
    newLogin: function() {
      if (this.validCode) {
        console.log(`Loging in with code ${this.teamCode}`);
        let matched = 0;
        for (const login of this.pastLogins) {
          if (login.code === this.teamCode) {
            matched = 1;
          }
        }
        if (!matched) {
          let obfuscated = this.teamCode.charAt(0) + "******" + this.teamCode.charAt(7);
          this.pastLogins.push({
            car: "Test Car",
            code: this.teamCode,
            codeObs: obfuscated,
            team: "team"
          })
          localStorage.logins = JSON.stringify(this.pastLogins)
        }
      }
    },
    prevLogin: function(i) {
      let code = this.pastLogins[i].code;
      console.log(`Login with code: ${code}`);
    },
    clearHistory: function() {
      if (this.clearText === "Clear History") {
        this.clearText = "Definitely Clear History?";
      } else {
        this.clearText = "Clear History"
        this.pastLogins = [];
        localStorage.logins = [];
      }
    }
  }
})