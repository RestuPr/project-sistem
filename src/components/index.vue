<template>
    <div class="flex flex-col min-h-screen">
      <!-- Navbar -->
      <header class="flex items-center justify-between px-16 py-4 w-full text-white bg-gray-800 min-h-[80px] max-md:px-5">
  <!-- Logo di kiri -->
  <div class="flex-none">
    <a href="/">
      <img
      loading="lazy"
      src="/src/assets/images/logo/logo-join-sistem.png"
      alt="Blog Logo"
      class="object-contain w-[118px] aspect-[4.22]"
    />
    </a>
    
  </div>
  
  <!-- Navigation di tengah -->
  <nav class="flex items-center gap-6 text-base leading-7">
    <a href="/" class="hover:text-blue-300">Home</a>
    <a href="/blog" class="hover:text-blue-300">Blog</a>
    <a href="/about" class="hover:text-blue-300">About Us</a>
    <a href="/contact" class="hover:text-blue-300">Contact us</a>
  </nav>
  
  <!-- Contact US button di kanan -->
  <router-link 
    to="/contact"
    class="flex-none px-8 py-3 text-lg font-bold leading-none bg-blue-600 rounded-[63px] max-md:px-5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    tabindex="0"
  >
    Contact US
  </router-link>
</header>
  
      <!-- Main Content -->
      <main class="flex-grow">
        <slot></slot>
      </main>
  
      <!-- Footer -->
      <section class="bg-gray-800 px-20 py-14 mt-32 text-white max-md:px-5 max-md:mt-10">
        <div class="flex justify-between items-center mb-14">
          <img
            loading="lazy"
            src="/src/assets/images/logo/Logo.png"
            alt="Newsletter logo"
            class="w-[140px]"
          />
          <nav class="flex gap-6">
            <a href="/" class="hover:text-blue-300">Home</a>
            <a href="/blog" class="hover:text-blue-300">Blog</a>
            <a href="/about" class="hover:text-blue-300">About us</a>
            <a href="/contact" class="hover:text-blue-300">Contact us</a>
            <a href="/privacy" class="hover:text-blue-300">Privacy Policy</a>
          </nav>
        </div>
  
        <div class="bg-white bg-opacity-10 px-16 py-20">
          <div class="grid grid-cols-2 gap-5 max-md:grid-cols-1">
            <h2 class="text-4xl font-bold tracking-tighter">
              Subscribe to our newsletter to get latest updates and news
            </h2>
            <form class="flex gap-6 items-center" @submit.prevent="handleSubmit">
              <label for="email" class="sr-only">Email address</label>
              <input
                type="email"
                id="email"
                v-model="email"
                placeholder="Enter Your Email"
                class="grow px-6 py-6 text-zinc-500 border border-neutral-600 bg-transparent"
                required
              />
              <button
                type="submit"
                class="px-12 py-4 bg-blue-600 text-lg font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                tabindex="0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
  
        <footer class="mt-12 flex justify-between items-center text-white px-8 py-6">
          <div class="opacity-70">
            <address class="not-italic">
              Finstreet 118 2561 Fintown<br />
              Hello@finsweet.com<br />
              020 7993 2905
            </address>
          </div>
          
          <div class="flex items-center gap-4">
            <a href="#" class="opacity-70 hover:opacity-100">
              <img
                loading="lazy"
                src="/src/assets/images/logo/Facebook.png"
                alt="Facebook"
                class="w-6 h-6"
              />
            </a>
            <a href="#" class="opacity-70 hover:opacity-100">
              <img
                loading="lazy"
                src="/src/assets/images/logo/Twitter.png"
                alt="Twitter"
                class="w-6 h-6"
              />
            </a>
            <a href="#" class="opacity-70 hover:opacity-100">
              <img
                loading="lazy"
                src="/src/assets/images/logo/Instagram.png"
                alt="Instagram"
                class="w-6 h-6"
              />
            </a>
            <a href="#" class="opacity-70 hover:opacity-100">
              <img
                loading="lazy"
                src="/src/assets/images/logo/LinkedIn.png"
                alt="LinkedIn"
                class="w-6 h-6"
              />
            </a>
          </div>
        </footer>
      </section>
    </div>
  </template>
  
  <script lang="ts">
  import router from '@/router';
import { defineComponent, ref } from 'vue'
  
  export default defineComponent({
    name: 'LayoutWrapper',
    setup() {
      const email = ref('')
  
      const handleSubmit = () => {
        // Handle newsletter subscription logic here
        console.log('Subscribe email:', email.value)
        email.value = '' // Reset form after submission
      }
  
      return {
        email,
        handleSubmit
      }
    }
  })
  </script>