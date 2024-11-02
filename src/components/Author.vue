<template>
    <index>
        <div class="flex overflow-hidden flex-col bg-white">
            <main class="flex flex-col items-center px-20 w-full max-md:px-5 max-md:pt-24 max-md:max-w-full">
                <section class="flex flex-col justify-center items-center text-base text-gray-800 bg-gray-100 w-[100vw] h-[60vh]">
                    <div class="max-w-full w-[952px]">
                        <div class="flex gap-5 max-md:flex-col">
                            <div class="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
                                <img loading="lazy" src="/src/assets/images/profile/andrew.png" alt="Andrew Johnson"
                                    class="w-full h-auto rounded-lg" />
                            </div>
                            <div class="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
                                <div class="flex flex-col max-md:mt-9 max-md:max-w-full">
                                    <h1
                                        class="text-5xl font-bold tracking-tighter text-gray-800 leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
                                        Hey there, I'm Andrew Jonhson and welcome to my Blog
                                    </h1>
                                    <div class="space-y-6">
                                        <p class="mt-6 text-base leading-7 text-zinc-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim
                                            nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing
                                            at in tellus.
                                        </p>
                                        <div class="flex gap-6 items-center">
                                            <img loading="lazy" src="/src/assets/images/logo/FacebookBlack.png"
                                                alt="Facebook"
                                                class="w-auto h-5 object-contain cursor-pointer hover:opacity-80" />
                                            <img loading="lazy" src="/src/assets/images/logo/TwitterBlack.png"
                                                alt="Twitter"
                                                class="w-auto h-5 object-contain cursor-pointer hover:opacity-80" />
                                            <img loading="lazy" src="/src/assets/images/logo/InstagramBlack.png"
                                                alt="Instagram"
                                                class="w-auto h-5 object-contain cursor-pointer hover:opacity-80" />
                                            <img loading="lazy" src="/src/assets/images/logo/LinkedInBlack.png"
                                                alt="LinkedIn"
                                                class="w-auto h-5 object-contain cursor-pointer hover:opacity-80" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="absolute h-5 w-[50%] bg-amber-300 mt-[111px]"></div>
                    </div>
                </section>
                <section class="flex flex-col self-center mt-32 w-full max-w-screen-lg max-md:mt-10 max-md:max-w-full">
                    <h2 class="self-start text-5xl font-bold tracking-tighter leading-none text-gray-800 max-md:text-4xl">
                        My Posts
                    </h2>
                    <div class="mt-10 mb-10 max-md:mt-10 max-md:max-w-full flex flex-col gap-8">
                        <!-- Post 1 -->
                        <div class="post-wrapper">
                            <div class="flex gap-5 max-md:flex-col">
                                <div class="w-[42%] max-md:w-full">
                                    <img loading="lazy"
                                        src="/src/assets/images/author1.png"
                                        alt="Blog post image 1" class="object-contain w-full aspect-[1.29]" />
                                </div>
                                <div class="flex flex-col w-[58%] max-md:w-full">
                                    <div class="flex flex-col text-base font-semibold leading-none">
                                        <span class="self-start uppercase tracking-[3px] text-amber-300">BUSINESS</span>
                                        <h3
                                            class="self-start mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                                            Font sizes in UI design: The complete guide to follow
                                        </h3>
                                        <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Post 2 -->
                        <div class="post-wrapper">
                            <div class="flex gap-5 max-md:flex-col">
                                <div class="w-[42%] max-md:w-full">
                                    <img loading="lazy"
                                        src="/src/assets/images/author2.png"
                                        alt="Blog post image 2" class="object-contain w-full aspect-[1.29]" />
                                </div>
                                <div class="flex flex-col w-[58%] max-md:w-full">
                                    <div class="flex flex-col text-base font-semibold leading-none">
                                        <span class="self-start uppercase tracking-[3px] text-amber-300">ECONOMY</span>
                                        <h3
                                            class="self-start mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                                            How to build rapport with your web design clients
                                        </h3>
                                        <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
    name: 'Author',
    components: {
        index
    }
});
</script>

<style scoped>

.post-wrapper {
    text-decoration: none;
    cursor: pointer;
    border-radius: 0.75rem;
    padding: 1rem;
    transition: all 0.3s ease;
}

.post-wrapper:hover {
    background-color: #FBF6EA;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    transform: translateY(-2px);
}
</style>