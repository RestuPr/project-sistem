<template>
  <index>
    <div class="flex overflow-hidden flex-col bg-white">
      <main>
        <section class="flex flex-col justify-center items-center p-20 w-full text-base text-center text-gray-800 bg-gray-100 max-md:px-5 max-md:max-w-full">
          <div class="flex flex-col items-center max-w-full w-[472px]">
            <h1 class="text-6xl font-bold tracking-tighter leading-none max-md:text-4xl">
              Business
            </h1>
            <p class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <p class="mt-8 font-medium leading-none uppercase tracking-[3px]">
              Blog &gt; Business
            </p>
          </div>
        </section>

        <!-- Article Section -->
        <section class="flex flex-col px-20 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div class="flex gap-8 max-md:flex-col">
            <!-- Left Column-->
            <div class="flex flex-col w-3/4 gap-8 max-md:w-full">
              <!-- Article Card 1 -->
              <RouterLink to ="#" class="post-link">
                <div class="flex gap-6 max-md:flex-col post">
                  <div class="w-1/3 max-md:w-full">
                    <img loading="lazy" src="/src/assets/images/blog2.png" alt="Business related image 1" class="w-full aspect-[0.94] object-cover" />
                  </div>
                  <div class="w-2/3 max-md:w-full">
                    <span class="font-semibold leading-none text-amber-300 uppercase tracking-[3px]">
                      Business
                    </span>
                    <h2 class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800">
                      Top 6 free website mockup tools 2022
                    </h2>
                    <p class="mt-4 leading-7 text-zinc-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                    </p>
                  </div>
                </div>
              </RouterLink>
              
              <!-- Article Card 2 -->
              <RouterLink to ="#" class="post-link">
                <div class="flex gap-6 max-md:flex-col post">
                  <div class="w-1/3 max-md:w-full">
                    <img loading="lazy" src="/src/assets/images/blog2.png" alt="Business related image 2" class="w-full aspect-[0.94] object-cover" />
                  </div>
                  <div class="w-2/3 max-md:w-full">
                    <span class="font-semibold leading-none text-amber-300 uppercase tracking-[3px]">
                      Business
                    </span>
                    <h2 class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800">
                      Step-by-step guide to choosing great font pairs
                    </h2>
                    <p class="mt-4 leading-7 text-zinc-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                    </p>
                  </div>
                </div>
              </RouterLink>

              <!-- Article Card 3 -->
              <RouterLink to ="#" class="post-link">
                <div class="flex gap-6 max-md:flex-col post">
                  <div class="w-1/3 max-md:w-full">
                    <img loading="lazy" src="/src/assets/images/blog2.png" alt="Business related image 3" class="w-full aspect-[0.94] object-cover" />
                  </div>
                  <div class="w-2/3 max-md:w-full">
                    <span class="font-semibold leading-none text-amber-300 uppercase tracking-[3px]">
                      Business
                    </span>
                    <h2 class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800">
                      Ten free Google fonts that you should use
                    </h2>
                    <p class="mt-4 leading-7 text-zinc-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                    </p>
                  </div>
                </div>
              </RouterLink>

              <!-- Article Card 4 -->
              <RouterLink to ="#" class="post-link">
                <div class="flex gap-6 max-md:flex-col post">
                  <div class="w-1/3 max-md:w-full">
                    <img loading="lazy" src="/src/assets/images/blog2.png" alt="Business related image 4" class="w-full aspect-[0.94] object-cover" />
                  </div>
                  <div class="w-2/3 max-md:w-full">
                    <span class="font-semibold leading-none text-amber-300 uppercase tracking-[3px]">
                      Business
                    </span>
                    <h2 class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800">
                      What did I learn from doing 50+ design sprints?
                    </h2>
                    <p class="mt-4 leading-7 text-zinc-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                    </p>
                  </div>
                </div>
              </RouterLink>
            </div>

            <!-- Right Column -->
            <aside class="w-1/4 max-md:w-full">
              <div class="flex flex-col gap-8">
                <!-- Categories Section -->
                <section class="mt-12 w-full flex flex-col px-20">
                  <h2 class="text-4xl font-bold tracking-tighter leading-none text-gray-800 mb-16">
                    Category
                  </h2>
                  <div class="flex flex-col gap-6 w-full">
                    <RouterLink to ="/category" class="flex-col w-[325px] categories group">
                      <article>
                        <div class="flex items-center p-8 w-full border border-solid border-zinc-500 max-md:px-5 h-28">
                          <div class="flex items-center gap-4">
                            <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-50">
                              <img loading="lazy" src="/src/assets/images/logo/Icon 2.png" alt="Startup icon" class="object-contain w-8 h-8 scale-[0.8]" />
                            </div>
                            <h3 class="text-3xl font-bold tracking-tighter leading-none text-gray-800 group-hover:text-white">Startup</h3>
                          </div>
                        </div>
                      </article>
                    </RouterLink>

                    <RouterLink to ="/category" class="flex-col w-[325px] categories group">
                      <article>
                        <div class="flex items-center p-8 w-full border border-solid border-zinc-500 max-md:px-5 h-28">
                          <div class="flex items-center gap-4">
                            <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-50">
                              <img loading="lazy" src="/src/assets/images/logo/Icon 1.png" alt="Business icon" class="object-contain w-8 h-8 scale-[1.5]" />
                            </div>
                            <h3 class="text-3xl font-bold tracking-tighter leading-none text-gray-800 group-hover:text-white">Business</h3>
                          </div>
                        </div>
                      </article>
                    </RouterLink>
                    
                    <RouterLink to ="/category" class="flex-col w-[325px] categories group">
                      <article>
                        <div class="flex items-center p-8 w-full border border-solid border-zinc-500 max-md:px-5 h-28">
                          <div class="flex items-center gap-4">
                            <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-50">
                              <img loading="lazy" src="/src/assets/images/logo/icon 3.png" alt="Economy icon" class="object-contain w-8 h-8 scale-[1.5]" />
                            </div>
                            <h3 class="text-3xl font-bold tracking-tighter leading-none text-gray-800 group-hover:text-white">Economy</h3>
                          </div>
                        </div>
                      </article>
                    </RouterLink>

                    <RouterLink to ="/category" class="flex-col w-[325px] categories group">
                      <article>
                        <div class="flex items-center p-8 w-full border border-solid border-zinc-500 max-md:px-5 h-28">
                          <div class="flex items-center gap-4">
                            <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-50">
                              <img loading="lazy" src="/src/assets/images/logo/Icon 4.png" alt="Technology icon" class="object-contain w-8 h-8 scale-[1.5]" />
                            </div>
                            <h3 class="text-3xl font-bold tracking-tighter leading-none text-gray-800 group-hover:text-white">Technology</h3>
                          </div>
                        </div>
                      </article>
                    </RouterLink>
                  </div>
                </section>

                <!-- All Tags Section -->
                <div class="flex flex-col ml-[80px]">
                  <h3 class="text-4xl font-bold tracking-tighter leading-none text-gray-800 mb-8">
                    All Tags
                  </h3>
                  <div class="flex flex-wrap gap-4">
                    <button class="px-10 py-2 rounded-3xl border-2 border-solid border-zinc-500 text-sm font-bold hover:bg-amber-300">
                      Business
                    </button>
                    <button class="px-9 py-2 rounded-3xl border-2 border-solid border-zinc-500 text-sm font-bold hover:bg-amber-300">
                      Experience
                    </button>
                    <button class="px-7 py-2 rounded-3xl border-2 border-solid border-zinc-500 text-sm font-bold hover:bg-amber-300">
                      Screen
                    </button>
                    <button class="px-12 py-2 rounded-3xl border-2 border-solid border-zinc-500 text-sm font-bold hover:bg-amber-300">
                      Technology
                    </button>
                    <button class="px-14 py-2 rounded-3xl border-2 border-solid border-zinc-500 text-sm font-bold hover:bg-amber-300">
                      Marketing
                    </button>
                    <button class="px-10 py-2 rounded-3xl border-2 border-solid border-zinc-500 text-sm font-bold hover:bg-amber-300">
                      Life
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  </index>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import index from '@/components/index.vue';

export default defineComponent({
  name: 'Category',
  components: {
    index
  },
});
</script>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.categories {
    cursor: pointer;
  }

.categories:hover{
  background-color: #075efd;
  color: #fff;
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

</style>