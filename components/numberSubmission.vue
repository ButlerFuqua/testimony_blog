<template>
  <v-alert class="text-center" border="top" color="teal darken-3" dark>
    <v-progress-circular v-if="loading" indeterminate></v-progress-circular>
    <div v-else-if="notYetSubmitted">
      <p v-if="numberOfSignups" class="headline">
        Join
        {{ numberOfSignups }}
        others who have signed up.
      </p>
      <v-progress-circular v-else indeterminate></v-progress-circular>
      <p>Submit your phone number below to be texted when the app is ready.</p>
      <v-text-field
        filled
        dense
        placeholder="555-555-5555"
        class="black--text"
        v-model="phoneNumber"
        label="Phone number input"
      ></v-text-field>
      <small
        >Your phone number will NOT be shared or spammed. This only to notify
        you when the app is ready.</small
      >
      <br />
      <v-btn aria-label="submit" class="mt-3" @click="submitPhoneNumber"
        >Submit</v-btn
      >
    </div>
    <div v-else>
      <p>You're all set! You will be texted when the app is ready.</p>
      <p>Thanks for believing in us.</p>
    </div>
  </v-alert>
</template>

<script>
export default {
  name: "NumberSubmission",
  data() {
    return {
      phoneNumber: null,
      notYetSubmitted: true,
      numberOfSignups: null,
      loading: false,
    };
  },
  methods: {
    async submitPhoneNumber() {
      if (!this.phoneNumber) return;
      this.loading = true;
      let phone_number = this.phoneNumber.trim().replace(" ", "");

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
          .ref("submitted_phone_numbers/" + phone_number)
          .set({
            phone_number: phone_number,
            gmt_timestamp: timeStamp,
          });
      } catch (error) {
        return alert("Sorry, there was an error");
      }

      this.notYetSubmitted = false;

      this.loading = false;

      this.phoneNumber = null;
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
        .ref(`/submitted_phone_numbers`)
        .once("value");

      this.numberOfSignups = Object.keys(phoneNumbers.val()).length;
    },
  },
  async created() {
    await this.setNumberOfSignups();
  },
};
</script>