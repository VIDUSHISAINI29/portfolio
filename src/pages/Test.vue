<template>
    <form class="tw-bg-gray-400 tw-p-2" @submit.prevent="sendEmail" id="contactForm">
      <input class="tw-outline-none tw-border tw-border-gray-700 tw-p-1" type="text" v-model="form.name" placeholder="Your Name" required />
      <input class="tw-outline-none tw-border tw-border-gray-700 tw-p-1" type="email" v-model="form.email" placeholder="Your Email" required />
      <textarea class="tw-outline-none tw-border tw-border-gray-700 tw-p-1" v-model="form.message" placeholder="Your Message" required></textarea>
      <button class="tw-outline-none tw-border tw-border-gray-700 tw-p-1" type="submit">Send Message</button>
      <p>{{ statusMessage }}</p>
 
      <div class="tw-flex tw-justify-center">{{ form.name  }}</div>
      <div class="tw-flex tw-justify-center">{{ form.email }}</div>
      <div class="tw-flex tw-justify-center">{{ form.message }}</div>
    </form>
  </template>
  
  <script>
  // Import the new EmailJS SDK
  import emailjs from '@emailjs/browser';
  
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        },
        statusMessage: ''
      };
    },
    methods: {
     sendEmail() {
   emailjs.send('service_xkgfmnh', 'template_yskfgsl', {
     from_name: this.form.name,
     from_email: this.form.email,
     message: this.form.message
   }, 'YqUOTxOFSO_7y80hb')
   .then(
     (response) => {
       console.log('SUCCESS!', response.status, response.text);
       this.statusMessage = 'Message sent successfully!';
       this.form.name = '';
       this.form.email = '';
       this.form.message = '';
     },
     (error) => {
       console.error('FAILED...', error);
       this.statusMessage = 'Failed to send message. Please try again.';
     }
   );
 }
 
    }
  };
  </script>
  
  <style scoped>
  /* Add any styling you want for the form */
  </style>
  