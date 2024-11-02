<template>
    <index>
        <div>
            <main class="flex overflow-hidden flex-col items-center bg-white">
                <section class="mt-32 max-md:mt-10">
                <h1 class="text-base font-black leading-none text-center text-gray-800 uppercase tracking-[3px]">
                    Contact us
                </h1>
                <h2 class="mt-3 text-5xl font-bold tracking-tighter leading-none text-center text-gray-800 max-md:max-w-full max-md:text-4xl">
                    Let's Start a Conversation
                </h2>
                <p class="mt-6 text-base leading-7 text-center text-zinc-500 w-[768px] max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                </p>
                </section>
        
                <section class="px-16 py-12 mt-16 max-w-full bg-amber-300 w-[768px] max-md:px-5 max-md:mt-10">
                <div class="flex gap-5 max-md:flex-col">
                    <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow items-start text-xl leading-relaxed text-neutral-600 max-md:mt-10">
                        <h3 class="text-sm leading-none opacity-60">Working hours</h3>
                        <hr class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600" />
                        <p class="mt-4 font-bold">Monday To Friday</p>
                        <p class="font-bold">9:00 AM to 8:00 PM</p>
                        <p class="text-base leading-7 opacity-60">Our Support Team is available 24/7</p>
                    </div>
                    </div>
                    <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col items-start text-neutral-600 max-md:mt-10">
                        <h3 class="text-sm leading-none opacity-60">Contact Us</h3>
                        <hr class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600" />
                        <p class="mt-4 text-xl font-bold leading-relaxed">020 7993 2905</p>
                        <p class="text-base leading-7 opacity-60">hello@finsweet.com</p>
                    </div>
                    </div>
                </div>
                </section>
        
                <form class="mt-8 w-[768px] max-w-full">
                <div class="flex flex-col gap-4">
                    <label for="fullName" class="sr-only">Full Name</label>
                    <input
                    id="fullName"
                    type="text"
                    placeholder="Full Name"
                    class="gap-2.5 self-stretch p-6 text-base leading-7 text-gray-800 rounded-sm border border-solid border-zinc-500 border-opacity-50 max-md:px-5"
                    />
        
                    <label for="email" class="sr-only">Your Email</label>
                    <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    class="gap-2.5 self-stretch p-6 text-base leading-7 text-gray-800 rounded-sm border border-solid border-zinc-500 border-opacity-50 max-md:px-5"
                    />
        
                    <div class="flex flex-wrap gap-4 items-center mt-3.5 max-w-full text-base leading-7 text-gray-800 whitespace-nowrap">
                    <div class="flex flex-1 shrink justify-between items-center self-stretch p-6 my-auto border border-solid basis-0 border-zinc-500 border-opacity-50 min-w-[240px] max-md:px-5 relative">
                        <label for="province" class="sr-only">Province</label>
                        <div class="w-full relative cursor-pointer">
                            <select id="province" class="absolute w-full h-full opacity-0 cursor-pointer">
                                <option value="">Province</option>
                            </select>
                            <div class="flex justify-between items-center">
                                <span>Province</span>
                                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex flex-1 shrink justify-between items-center self-stretch p-6 my-auto border border-solid basis-0 border-zinc-500 border-opacity-50 min-w-[240px] max-md:px-5 relative">
                        <label for="city" class="sr-only">City</label>
                        <div class="w-full relative cursor-pointer">
                            <select id="city" class="absolute w-full h-full opacity-0 cursor-pointer">
                                <option value="">City</option>
                            </select>
                            <div class="flex justify-between items-center">
                                <span>City</span>
                                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
        
                    <label for="message" class="sr-only">Message</label>
                    <textarea
                    id="message"
                    placeholder="Message"
                    class="gap-2.5 px-6 pt-6 pb-24 mt-5 max-w-full text-base leading-7 text-gray-800 whitespace-nowrap rounded-sm border border-solid border-zinc-500 border-opacity-50 min-h-[144px] w-full max-md:px-5"
                    ></textarea>
        
                    <button type="submit" class="px-16 py-4 mt-4 max-w-full text-2xl font-bold leading-none text-gray-800 bg-blue-600 max-md:px-5">
                    Send Message
                    </button>
                </div>
                </form>
            </main>
        </div>
    </index>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import index from './index.vue';
  
  export default defineComponent({
    name: 'Contact',
    components: {
        index
    }
  });
  </script>