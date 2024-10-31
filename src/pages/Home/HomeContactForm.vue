<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const form = ref({
  name: '',
  email: '',
  message: ''
});
const statusMessage = ref('');

function sendEmail() {
  emailjs.send(
    'service_xkgfmnh',
    'template_yskfgsl',
    {
      from_name: form.value.name,
      from_email: form.value.email,
      message: form.value.message
    },
    'YqUOTxOFSO_7y80hb'
  ).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      statusMessage.value = 'Message sent successfully!';
      form.value.name = '';
      form.value.email = '';
      form.value.message = '';
    },
    (error) => {
      console.error('FAILED...', error);
      statusMessage.value = 'Failed to send message. Please try again.';
    }
  );
}
</script>

<template>
  <form class=" tw-p-2 tw-flex tw-flex-col tw-w-[280px] tw-gap-5" @submit.prevent="sendEmail" id="contactForm">
    <input class="tw-outline-none tw-rounded-md tw-border tw-text-[#e38007] tw-border-[#e75334] tw-p-1" type="text" v-model="form.name" placeholder="Your Name" required />
    <input class="tw-outline-none tw-rounded-md tw-border tw-text-[#e38007] tw-border-[#e75334]  tw-p-1" type="email" v-model="form.email" placeholder="Your Email" required />
    <textarea class="tw-outline-none tw-rounded-md tw-border  tw-text-[#e38007] tw-border-[#e75334] tw-p-1" v-model="form.message" placeholder="Your Message" required></textarea>
    <button class="tw-outline-none tw-rounded-lg tw-bg-white tw-bg-opacity-10 tw-text-[#e38007] tw-border-[#e75334]  tw-p-1" type="submit">Send Message</button>
    <p>{{ statusMessage }}</p>

    <!-- For Displaying Form Data -->
    <div class="tw-flex tw-justify-center">{{ form.name }}</div>
    <div class="tw-flex tw-justify-center">{{ form.email }}</div>
    <div class="tw-flex tw-justify-center">{{ form.message }}</div>
  </form>
</template>
