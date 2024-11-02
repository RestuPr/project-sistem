<template>
    <index>
      <div class="flex overflow-hidden flex-col bg-white">
        <main>
          <section class="p-20 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col">
              <article class="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col items-start self-stretch my-auto w-full font-medium max-md:mt-10 max-md:max-w-full">
                  <span class="text-base leading-none text-gray-800 uppercase tracking-[3px]">Featured Post</span>
                  <h1 class="self-stretch mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                    Step-by-step guide to choosing great font pairs
                  </h1>
                  <time datetime="2022-05-23" class="mt-4 text-sm leading-none">
                    By <a href="#" class="text-amber-300 hover:underline">John Doe</a> l May 23, 2022
                  </time>
                  <p class="self-stretch mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                  </p>
                  <router-link 
                    to="/blog/post" 
                    class="inline-block gap-3 px-12 py-4 mt-8 text-lg font-bold leading-none text-white bg-blue-600 max-md:px-5 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    Read More >
                  </router-link>
                </div>
              </article>
              <figure class="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="/src/assets/images/blog1.png"
                  alt="Featured post illustration"
                  class="object-contain grow w-full aspect-[1.43] max-md:mt-10 max-md:max-w-full"
                />
              </figure>
            </div>
          </section>
  
          <section class="flex flex-col px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <h2 class="self-start text-5xl font-bold tracking-tighter leading-none text-gray-800 max-md:text-4xl">
              All posts
            </h2>
            <div class="shrink-0 mt-8 h-px border border-solid bg-zinc-500 border-zinc-500 opacity-[0.32] max-md:max-w-full"></div>
            <div class="mt-16 w-full max-w-[1147px] max-md:mt-10 max-md:max-w-full">

              <!-- Post 1 -->
              <a href="#" class="block post-link">
                <div class="post flex gap-5 mb-16 max-md:flex-col">
                  <div class="w-[44%] max-md:w-full">
                    <img 
                      src="/src/assets/images/blog2.png"
                      alt="Design tips for designers"
                      class="object-contain w-full aspect-[1.54] rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <div class="w-[56%] max-md:w-full py-2">
                    <span class="text-base font-semibold uppercase tracking-[3px] text-amber-300">Startup</span>
                    <h3 class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800">Design tips for designers that cover everything you need</h3>
                    <p class="mt-4 text-base leading-7 text-zinc-500">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  </div>
                </div>
              </a>

              <!-- Post 2 -->
              <a href="#" class="block post-link">
                <div class="post flex gap-5 mb-16 max-md:flex-col">
                  <div class="w-[44%] max-md:w-full">
                    <img 
                      src="/src/assets/images/blog3.png"
                      alt="Design tips for designers"
                      class="object-contain w-full aspect-[1.54] rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <div class="w-[56%] max-md:w-full py-2">
                    <span class="text-base font-semibold uppercase tracking-[3px] text-amber-300">Business</span>
                    <h3 class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800">How to build rappor with your web design clients</h3>
                    <p class="mt-4 text-base leading-7 text-zinc-500">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  </div>
                </div>
              </a>

              <!-- Post 3 -->
              <a href="#" class="block post-link">
                <div class="post flex gap-5 mb-16 max-md:flex-col">
                  <div class="w-[44%] max-md:w-full">
                    <img 
                      src="/src/assets/images/blog4.png"
                      alt="Design tips for designers"
                      class="object-contain w-full aspect-[1.54] rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <div class="w-[56%] max-md:w-full py-2">
                    <span class="text-base font-semibold uppercase tracking-[3px] text-amber-300">Startup</span>
                    <h3 class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800">Logo design trends to avoid in 2022</h3>
                    <p class="mt-4 text-base leading-7 text-zinc-500">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  </div>
                </div>
              </a>

              <!-- Post 4 -->
              <a href="#" class="block post-link">
                <div class="post flex gap-5 mb-16 max-md:flex-col">
                  <div class="w-[44%] max-md:w-full">
                    <img 
                      src="/src/assets/images/blog5.png"
                      alt="Design tips for designers"
                      class="object-contain w-full aspect-[1.54] rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <div class="w-[56%] max-md:w-full py-2">
                    <span class="text-base font-semibold uppercase tracking-[3px] text-amber-300">Technology</span>
                    <h3 class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800">8 Figma design systems you can download for free today</h3>
                    <p class="mt-4 text-base leading-7 text-zinc-500">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  </div>
                </div>
              </a>

              <!-- Post 5 -->
              <a href="#" class="block post-link">
                <div class="post flex gap-5 mb-16 max-md:flex-col">
                  <div class="w-[44%] max-md:w-full">
                    <img 
                      src="/src/assets/images/blog2.png"
                      alt="Design tips for designers"
                      class="object-contain w-full aspect-[1.54] rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <div class="w-[56%] max-md:w-full py-2">
                    <span class="text-base font-semibold uppercase tracking-[3px] text-amber-300">Economy</span>
                    <h3 class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800">Font sizes in UI design: The complete guide to follow</h3>
                    <p class="mt-4 text-base leading-7 text-zinc-500">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="flex gap-4 self-center mt-16 font-bold text-center">
              <button 
                class="text-2xl leading-none text-color-black opacity-[0.5] focus:outline-none focus:ring-2 focus:ring-zinc-500 prev"
              >
                &lt; Prev
              </button>
              <button 
                class="text-2xl leading-none text-color-black opacity-[0.5] focus:outline-none focus:ring-2 focus:ring-zinc-500 next"
              >
                Next &gt;
              </button>
            </div>
          </section>
  
          <!-- Categories Section -->
        <section class="mt-12 w-full flex flex-col px-20">
          <h2 class="text-4xl font-bold tracking-tighter leading-none text-gray-800 mb-12">
            Choose A Category
          </h2>
          <div class="flex gap-5 w-full justify-center max-md:flex-col">
            <a href="/category" class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full categories group">
              <article>
                <div class="flex flex-col grow items-start p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8">
                  <div class="w-14 h-14 flex items-center justify-center rounded-lg bg-orange-50">
                    <img loading="lazy" src="/src/assets/images/logo/Icon 1.png" alt="Business icon" class="object-contain w-12 aspect-[0.98]" />
                  </div>
                  <h3 class="mt-4 text-3xl font-bold tracking-tighter leading-none text-gray-800 group-hover:text-white">Business</h3>
                  <p class="self-stretch mt-1 text-base leading-7 text-zinc-500 group-hover:text-white">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </div>
              </article>
            </a>
            
            <a href="/category" class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full categories group">
              <article>
                <div class="flex flex-col grow items-start p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8">
                  <div class="w-14 h-14 flex items-center justify-center rounded-lg bg-orange-50">
                    <img loading="lazy" src="/src/assets/images/logo/Icon 2.png" alt="Economy icon" class="object-contain w-6 h-6" />
                  </div>
                  <h3 class="mt-4 text-3xl font-bold tracking-tighter leading-none text-gray-800 group-hover:text-white">Startup</h3>
                  <p class="self-stretch mt-1 text-base leading-7 text-zinc-500 group-hover:text-white">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </div>
              </article>
            </a>
            
            <a href="/category" class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full categories group">
              <article>
                <div class="flex flex-col grow items-start p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8">
                  <div class="w-14 h-14 flex items-center justify-center rounded-lg bg-orange-50">
                    <img loading="lazy" src="/src/assets/images/logo/Icon 3.png" alt="Economy icon" class="object-contain w-12 aspect-[0.98]" />
                  </div>
                  <h3 class="mt-4 text-3xl font-bold tracking-tighter leading-none text-gray-800 group-hover:text-white">Economy</h3>
                  <p class="self-stretch mt-1 text-base leading-7 text-zinc-500 group-hover:text-white">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </div>
              </article>
            </a>
            
            <a href ="/category" class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full categories group">
              <article>
                <div class="flex flex-col grow items-start p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8">
                  <div class="w-14 h-14 flex items-center justify-center rounded-lg bg-orange-50">
                    <img loading="lazy" src="/src/assets/images/logo/Icon 4.png" alt="Technology icon" class="object-contain w-12 aspect-[0.96]" />
                  </div>
                  <h3 class="mt-3.5 text-3xl font-bold tracking-tighter leading-none text-gray-800 group-hover:text-white">Technology</h3>
                  <p class="self-stretch mt-1 text-base leading-7 text-zinc-500 group-hover:text-white">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </div>
              </article>
            </a>
          </div>
        </section>
    
          <!-- Join Our Team Section -->
          <section class="text-center py-32 max-md:py-10 -mb-24">
            <h2 class="text-4xl font-bold tracking-tighter text-gray-800 max-w-[414px] mx-auto">
              Join our team to be a part of our story
            </h2>
            <p class="mt-4 text-zinc-500 max-w-[405px] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <button
              class="mt-8 px-12 py-4 bg-blue-600 text-white text-lg font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              tabindex="0"
            >
              Join Now
            </button>
          </section>
        </main>
      </div>
    </index>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import {useRouter} from 'vue-router'
  import index from '@/components/index.vue'
  
  interface Post {
    category: string
    title: string
    description: string
    image: string
  }
  
  interface Category {
    name: string
    description: string
    icon: string
    highlighted: boolean
  }
  
  export default defineComponent({
    name: 'BlogPage',
    components: {
      index
    }
  })
  </script>
  
  <style scoped>
  .builder-component {
    max-width: none !important;
  }

  .post-link{
    text-decoration: none;
  }

  .post{
    cursor: pointer;
    border-radius: 0.75rem;
    padding: 1rem;
    transition: all 0.3s ease;
  }

  .post:hover{
    background-color: #FBF6EA;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    transform: translateY(-2px);
  }

  .prev{
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .prev:hover{
    opacity: 1;
    scale: 1.2;
  }

  .next{
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .next:hover{
    opacity: 1;
    scale: 1.2;
  }

  .categories {
    cursor: pointer;
  }

  .categories:hover{
    background-color: #075efd;
    color: #fff;
  }

  </style>
  