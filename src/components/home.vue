<template>
  <index>
    <div class="flex flex-col min-h-screen">
      <main class="flex-grow">
        <section class="hero-section relative flex flex-col self-stretch w-full text-base font-bold text-white min-h-[720px] max-md:max-w-full">
          <img
            loading="lazy"
            src="/src/assets/images/cover.png"
            alt="Hero background image"
            class="darken-image object-cover absolute inset-0 size-full"
          />
          <div class="relative flex flex-col items-start px-20 py-40 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
            <span class="font-semibold leading-none uppercase tracking-[3px]">
              <span class="font-medium">Posted on</span>
              <span class="font-black"> startup</span>
            </span>
            <h1 class="mt-6 text-6xl tracking-tighter leading-[64px] w-[803px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
              Step-by-step guide to choosing great font pairs
            </h1>
            <p class="mt-6 leading-7">
              By <a href="#" class="text-blue-600 hover:underline">James West</a> | May 23, 2022
            </p>
            <p class="mt-4 leading-7 w-[599px] max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <button
              class="gap-3 px-12 py-4 mt-12 mb-0 text-lg leading-none bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 max-md:px-5 max-md:mt-10 max-md:mb-2.5"
              tabindex="0"
            >
              Read More >
            </button>
          </div>
        </section>
  
        <!-- Featured Posts Section -->
        <section class="featured-posts px-20 mt-32 max-md:px-5 max-md:mt-10">
          <div class="grid grid-cols-5 gap-5 max-md:grid-cols-1">
            <!-- Left Column Header -->
            <div class="col-span-3">
              <h2 class="text-4xl font-bold tracking-tighter text-gray-800 mb-8">Featured Post</h2>
              <!-- Main Featured Post -->
              <article class="border border-zinc-200 p-8 h-[849px]">
                <img
                  loading="lazy"
                  src="/src/assets/images/white-concrete-building-1838640.png"
                  alt="Featured post image"
                  class="w-full aspect-[1.9] object-cover"
                />
                <div class="mt-8">
                  <p class="text-sm font-medium">
                    By <a href="#" class="hover:underline text-amber-300">John Doe</a> | May 23, 2022
                  </p>
                  <h3 class="mt-4 text-3xl font-bold tracking-tighter text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h3>
                  <p class="mt-4 text-base text-zinc-500">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <button
                    class="mt-8 px-12 py-4 bg-blue-600 text-white text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    tabindex="0"
                  >
                    Read More >
                  </button>
                </div>
              </article>
            </div>

            <!-- Right Column -->
            <div class="col-span-2">
              <div class="flex justify-between items-center mb-8">
                <h3 class="text-4xl font-bold tracking-tighter text-gray-800">All Posts</h3>
                <a href="#" class="text-base leading-7 text-amber-300 hover:underline">View All</a>
              </div>
              
              <!-- Side Posts Content -->
              <div class="flex flex-col gap-4">
                <a href="#">
                  <article class="bg-white p-7 article" >
                    <p class="text-sm">
                      By <a href="#" class="hover:underline font-medium text-amber-300">John Deo</a> | Aug 23, 2021
                    </p>
                    <h3 class="mt-2 text-2xl font-bold text-gray-800">
                      8 Figma design systems that you can download for free today.
                    </h3>
                  </article>
                </a>
                <a href="#">
                  <article class="bg-white p-7 article" >
                    <p class="text-sm">
                      By <a href="#" class="hover:underline font-medium text-amber-300">John Deo</a> | Aug 23, 2021
                    </p>
                    <h3 class="mt-2 text-2xl font-bold text-gray-800">
                      8 Figma design systems that you can download for free today.
                    </h3>
                  </article>
                </a>
                <a href="#">
                  <article class="bg-white p-7 article" >
                    <p class="text-sm">
                      By <a href="#" class="hover:underline font-medium text-amber-300">John Deo</a> | Aug 23, 2021
                    </p>
                    <h3 class="mt-2 text-2xl font-bold text-gray-800">
                      8 Figma design systems that you can download for free today.
                    </h3>
                  </article>
                </a>
                <a href="#">
                  <article class="bg-white p-7 article" >
                    <p class="text-sm">
                      By <a href="#" class="hover:underline font-medium text-amber-300">John Deo</a> | Aug 23, 2021
                    </p>
                    <h3 class="mt-2 text-2xl font-bold text-gray-800">
                      8 Figma design systems that you can download for free today.
                    </h3>
                  </article>
                </a>
                <a href="#">
                  <article class="bg-white p-7 article" >
                    <p class="text-sm">
                      By <a href="#" class="hover:underline font-medium text-amber-300">John Deo</a> | Aug 23, 2021
                    </p>
                    <h3 class="mt-2 text-2xl font-bold text-gray-800">
                      8 Figma design systems that you can download for free today.
                    </h3>
                  </article>
                </a>
              </div>
            </div>
          </div>
        </section>
  
        <!-- About Section -->
        <section class="relative bg-gray-100 mx-20 px-20 py-24 mt-32 max-md:px-5 max-md:mt-10">
          <div class="absolute -top-3 right-0 w-full flex justify-end">
            <div class="h-3 w-[50%] bg-amber-300"></div>
            <div class="h-3 w-[30%] bg-blue-600"></div>
          </div>

          <div class="grid grid-cols-2 gap-20 max-md:grid-cols-1">
            <div>
              <span class="uppercase tracking-[3px] font-semibold text-gray-800">ABOUT US</span>
              <h2 class="mt-6 text-4xl font-bold tracking-tighter text-gray-800">
                We are a community of content writers who share their learnings
              </h2>
              <p class="mt-4 text-zinc-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="/about" class="mt-7 inline-block text-lg text-amber-300 hover:underline">Read More ></a>
            </div>
            <div>
              <span class="uppercase tracking-[3px] font-semibold text-gray-800">OUR MISSION</span>
              <h2 class="mt-6 text-3xl font-bold tracking-tighter text-gray-800">
                Creating valuable content for creatives all around the world
              </h2>
              <p class="mt-4 text-zinc-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>
        
        <!-- Categories Section -->
        <section class="mt-12 w-full flex flex-col items-center justify-center px-20">
          <h2 class="text-4xl font-bold tracking-tighter leading-none text-gray-800 text-center mb-12">
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
                    <img loading="lazy" src="/src/assets/images/logo/icon 3.png" alt="Economy icon" class="object-contain w-12 aspect-[0.98]" />
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

        <!-- Why We Started Section -->
    <section class="relative flex flex-col items-end px-20 pt-32 mt-32 min-h-[705px] max-md:pt-24 max-md:pl-5 max-md:mt-10">
      <img
        loading="lazy"
        src="/src/assets/images/Special post.png"
        alt="Why we started background"
        class="object-cover absolute inset-0 transform translate-x-[75px] w-[1080px]"
      />
      <div class="relative flex flex-col p-20 mr-0 max-w-[900px] h-[720px] bg-white max-md:px-5">
        <span class="font-semibold uppercase tracking-[3px] text-gray-800">Why we started</span>
        <h2 class="mt-6 text-5xl font-bold tracking-tighter text-gray-800 leading-[64px] max-md:text-4xl max-md:leading-[60px]">
          It started out as a simple idea and evolved into our passion
        </h2>
        <p class="mt-4 text-zinc-500 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <button
          class="mt-8 px-12 py-4 bg-blue-600 text-white text-lg font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          tabindex="0"
        >
          Discover our story >
        </button>
      </div>
    </section>

    <!-- List of Authors Section -->
    <section class="px-20 py-24 max-md:px-5 max-md:mt-10">
      <h2 class="text-4xl font-bold tracking-tighter text-center text-gray-800 mb-12">
        List of Authors
      </h2>
      <div class="grid grid-cols-4 gap-5 max-md:grid-cols-1">
        <a href="/author">
          <article class="bg-zinc-100 px-14 py-10 text-center article">
            <img
              loading="lazy"
              src="/src/assets/images/profile/floyd.png"
              alt="Floyd Miles"
              class="w-32 h-32 mx-auto rounded-full object-cover"
            />
            <h3 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">Floyd Miles</h3>
            <p class="mt-1 text-sm text-zinc-500">Content Writer @Company</p>
            <div class="mt-5 flex justify-center gap-4">
              <a href="#" aria-label="Facebook" class="text-zinc-500 hover:text-blue-600 opacity-75 icon">
                <img loading="lazy" src="/src/assets/images/logo/FacebookBlack.png" alt="Facebook icon" class="w-6 h-6" />
              </a>
              <a href="#" aria-label="Twitter" class="text-zinc-500 hover:text-blue-600 opacity-75 icon">
                <img loading="lazy" src="/src/assets/images/logo/TwitterBlack.png" alt="Facebook icon" class="w-6 h-6" />
              </a>
              <a href="#" aria-label="Instagram" class="text-zinc-500 hover:text-blue-600 opacity-75 icon">
                <img loading="lazy" src="/src/assets/images/logo/InstagramBlack.png" alt="Facebook icon icon" class="w-6 h-6" />
              </a>
              <a href="#" aria-label="LinkedIn" class="text-zinc-500 hover:text-blue-600 opacity-75 icon">
                <img loading="lazy" src="/src/assets/images/logo/LinkedInBlack.png" alt="Facebook icon" class="w-6 h-6" />
              </a>
            </div>
          </article>
        </a>
        <a href="/author">
          <article class="bg-zinc-100 px-14 py-10 text-center article">
            <img
              loading="lazy"
              src="/src/assets/images/profile/dianne.png"
              alt="Dianne Russell"
              class="w-32 h-32 mx-auto rounded-full object-cover"
            />
            <h3 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">Dianne Russell</h3>
            <p class="mt-1 text-sm text-zinc-500">Content Writer @Company</p>
            <div class="mt-5 flex justify-center gap-4">
              <a href="#" aria-label="Facebook" class="text-zinc-500 hover:text-blue-600 opacity-75 icon">
                <img loading="lazy" src="/src/assets/images/logo/FacebookBlack.png" alt="Facebook icon" class="w-6 h-6" />
              </a>
              <a href="#" aria-label="Twitter" class="text-zinc-500 hover:text-blue-600 opacity-75 icon">
                <img loading="lazy" src="/src/assets/images/logo/TwitterBlack.png" alt="Facebook icon" class="w-6 h-6" />
              </a>
              <a href="#" aria-label="Instagram" class="text-zinc-500 hover:text-blue-600 opacity-75 icon">
                <img loading="lazy" src="/src/assets/images/logo/InstagramBlack.png" alt="Facebook icon" class="w-6 h-6" />
              </a>
              <a href="#" aria-label="LinkedIn" class="text-zinc-500 hover:text-blue-600 opacity-75 icon">
                <img loading="lazy" src="/src/assets/images/logo/LinkedInBlack.png" alt="Facebook icon" class="w-6 h-6" />
              </a>
            </div>
          </article>
        </a>
        <a href="/author">
          <article class="bg-zinc-100 px-14 py-10 text-center article">
            <img
              loading="lazy"
              src="/src/assets/images/profile/jenny.png"
              alt="Jenny Wilson"
              class="w-32 h-32 mx-auto rounded-full object-cover"
            />
            <h3 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">Jenny Wilson</h3>
            <p class="mt-1 text-sm text-zinc-500">Content Writer @Company</p>
            <div class="mt-5 flex justify-center gap-4">
              <a href="#" aria-label="Facebook" class="text-zinc-500 hover:text-blue-600 opacity-75 icon">
                <img loading="lazy" src="/src/assets/images/logo/FacebookBlack.png" alt="Facebook icon" class="w-6 h-6" />
              </a>
              <a href="#" aria-label="Twitter" class="text-zinc-500 hover:text-blue-600 opacity-75 icon">
                <img loading="lazy" src="/src/assets/images/logo/TwitterBlack.png" alt="Facebook icon" class="w-6 h-6" />
              </a>
              <a href="#" aria-label="Instagram" class="text-zinc-500 hover:text-blue-600 opacity-75 icon">
                <img loading="lazy" src="/src/assets/images/logo/InstagramBlack.png" alt="Facebook icon" class="w-6 h-6" />
              </a>
              <a href="#" aria-label="LinkedIn" class="text-zinc-500 hover:text-blue-600 opacity-75 icon">
                <img loading="lazy" src="/src/assets/images/logo/LinkedInBlack.png" alt="Facebook icon" class="w-6 h-6" />
              </a>
            </div>
          </article>
        </a>
        <a href="/author">
          <article class="bg-zinc-100 px-14 py-10 text-center article">
            <img
              loading="lazy"
              src="/src/assets/images/profile/leslie.png"
              alt="Leslie Alexander"
              class="w-32 h-32 mx-auto rounded-full object-cover"
            />
            <h3 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">Leslie Alexander</h3>
            <p class="mt-1 text-sm text-zinc-500">Content Writer @Company</p>
            <div class="mt-5 flex justify-center gap-4">
              <a href="#" aria-label="Facebook" class="text-zinc-500 hover:text-blue-600 opacity-75 icon">
                <img loading="lazy" src="/src/assets/images/logo/FacebookBlack.png" alt="Facebook icon" class="w-6 h-6" />
              </a>
              <a href="#" aria-label="Twitter" class="text-zinc-500 hover:text-blue-600 opacity-75 icon">
                <img loading="lazy" src="/src/assets/images/logo/TwitterBlack.png" alt="Facebook icon" class="w-6 h-6" />
              </a>
              <a href="#" aria-label="Instagram" class="text-zinc-500 hover:text-blue-600 opacity-75 icon">
                <img loading="lazy" src="/src/assets/images/logo/InstagramBlack.png" alt="Facebook icon" class="w-6 h-6" />
              </a>
              <a href="#" aria-label="LinkedIn" class="text-zinc-500 hover:text-blue-600 opacity-75 icon">
                <img loading="lazy" src="/src/assets/images/logo/LinkedInBlack.png" alt="Facebook icon" class="w-6 h-6" />
              </a>
            </div>
          </article>
        </a>
      </div>
    </section>

    <!-- We are Featured In Section -->
    <section class="flex flex-wrap gap-15 px-20 max-md:px-5 max-md:mt-10">
      <div class="flex gap-44 items-center flex-wrap">
        <img loading="lazy" src="/src/assets/images/logo/Logo 0.png" alt="Featured company logo" class="#" />
        <img loading="lazy" src="/src/assets/images/logo/Logo 1.png" alt="Featured company logo" class="#" />
        <img loading="lazy" src="/src/assets/images/logo/Logo 2.png" alt="Featured company logo" class="#" />
        <img loading="lazy" src="/src/assets/images/logo/Logo 3.png" alt="Featured company logo" class="#" />
        <img loading="lazy" src="/src/assets/images/logo/Logo 4.png" alt="Featured company logo" class="#" />
        <img loading="lazy" src="/src/assets/images/logo/Logo 5.png" alt="Featured company logo" class="#" />
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="bg-orange-50 mx-20 px-16 py-20 mt-24 max-md:px-5 max-md:mt-10">
      <div class="grid grid-cols-2 gap-5 max-md:grid-cols-1">
        <div>
          <span class="uppercase tracking-[3px] font-semibold text-gray-800">TESTIMONIALS</span>
          <h2 class="mt-3 text-4xl font-bold tracking-tighter text-gray-800">
            What people say about our blog
          </h2>
          <p class="mt-4 text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>
        <div class="border-l border-zinc-500 pl-8">
          <blockquote class="text-2xl font-bold text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </blockquote>
          <div class="mt-28 flex items-center gap-4">
            <a href="/author">
              <img
                loading="lazy"
                src="/src/assets/images/profile/jonathan.png"
                alt="Jonathan Vallem"
                class="w-12 h-12 rounded-full object-cover"
              />
            </a>
            <a href="/author">
              <div>
                <cite class="text-2xl font-bold text-gray-800 not-italic">Jonathan Vallem</cite>
                <p class="text-zinc-500">New York, USA</p>
              </div>
            </a>
            <div class="ml-auto flex gap-6">
              <button
                  aria-label="Previous testimonial"
                  class="text-gray-800 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <img loading="lazy" src="/src/assets/images/Back button.png" alt="Previous testimonial" class="object-contain shrink-0 my-auto w-12 aspect-square back" />
                <!-- Previous arrow icon -->
              </button>
              <button
                aria-label="Next testimonial"
                class="text-gray-800 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <img loading="lazy" src="/src/assets/images/Next button.png" alt="Next testimonial" class="object-contain shrink-0 my-auto w-12 aspect-square next" />
                <!-- Next arrow icon -->
              </button>
            </div>
          </div>
        </div>
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
  import index from '@/components/index.vue'

  interface Category {
    name: string
    description: string
    icon: string
    highlighted: boolean
  }

  export default defineComponent({
    name: 'HomePage',
    components:{
      index
    }
  })
  </script>
  
  <style scoped>
  .article {
    cursor: pointer;
  }

  .article:hover{
    background-color: #FBF6EA
  }

  .categories {
    cursor: pointer;
  }

  .categories:hover{
    background-color: #075efd;
    color: #fff;
  }

  .icon {
    cursor: pointer;
  }

  .icon:hover{
    opacity: 100%;
  }

  .darken-image {
    filter: brightness(0.5);
  }

  .back {
    content: url('/src/assets/images/Back button.png');
    transition: all 0.3s ease;
  }

  .back:hover {
    content: url('/src/assets/images/Back Button Black.png');
    transform: scale(1.2);
  }

  .next {
    content: url('/src/assets/images/Next button.png');
    transition: all 0.3s ease;
  }

  .next:hover {
    content: url('/src/assets/images/Next Button Black.png');
    transform: scale(1.2);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  </style>