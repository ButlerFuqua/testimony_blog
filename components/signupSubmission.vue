<template>
  <v-alert class="text-center" border="top" color="teal darken-3" dark>
    <v-progress-circular v-if="loading" indeterminate></v-progress-circular>

    <v-form v-if="notYetSubmitted" v-model="valid">
      <v-container>
        <p v-if="numberOfSignups" class="headline">
          Join
          {{ numberOfSignups }}
          others who have signed up.
        </p>
        <v-progress-circular v-else indeterminate></v-progress-circular>
        <p>Sign up below to be texted when the app is ready.</p>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              filled
              v-model="firstname"
              :rules="nameRules"
              label="First name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              filled
              type="email"
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              filled
              v-model="phoneNumber"
              :rules="phoneRules"
              :counter="10"
              label="Phone Number"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <p>
          <small
            >This will also sign you up for the newsletter when it launches.
            Your information will NOT be shared with other services.</small
          >
        </p>
        <v-btn aria-label="submit" class="mt-3" @click="submitPhoneNumber"
          >Submit</v-btn
        >
      </v-container>
    </v-form>
    <div v-else>
      <p>You're all set!</p>
      <p>Thanks for believing in us.</p>
    </div>
  </v-alert>
</template>

<script>
export default {
  name: "SignupSubmission",
  data() {
    return {
      phoneNumber: "",
      notYetSubmitted: true,
      numberOfSignups: null,
      loading: false,

      valid: false,
      firstname: "",
      nameRules: [(v) => !!v || "Name is required"],
      phoneRules: [
        (v) => !!v || "Phone number is required",
        (v) => v.length >= 10 || "Number must be at least 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
            v
          ) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    async submitPhoneNumber() {
      if (!this.valid) return alert("Not valid!");

      this.loading = true;
      let phone_number = this.phoneNumber.trim().replace(" ", "");
      let first_name = this.firstname.trim();
      let email = this.email.trim();

      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);
      const timeStamp = today.toUTCString();

      const equation = this.getEquation();
      const answer = prompt(
        `Making sure you're human: What is ${equation.one} + ${equation.two}?`
      );
      if (answer.toString() !== equation.last.toString())
        return (this.loading = false);

      try {
        await this.$fire.database
          .ref("signup_submissions/" + phone_number)
          .set({
            phone_number,
            first_name,
            email,
            gmt_timestamp: timeStamp,
          });
      } catch (error) {
        return alert("Sorry, there was an error");
      }

      this.notYetSubmitted = false;

      this.loading = false;

      this.phoneNumber = "";
      this.firstname = "";
      this.email = "";
    },
    getEquation() {
      const answer = 10;

      const firstOne = Math.floor(Math.random() * answer);
      const second = Math.floor(Math.random() * answer);

      return {
        one: firstOne,
        two: second,
        last: firstOne + second,
      };
    },
    async setNumberOfSignups() {
      const phoneNumbers = await this.$fire.database
        .ref(`/signup_submissions`)
        .once("value");

      this.numberOfSignups = Object.keys(phoneNumbers.val()).length;
    },
  },
  async created() {
    await this.setNumberOfSignups();
  },
};
</script>