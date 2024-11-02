import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/home.vue'
import Blog from '@/components/Blog.vue'
import BlogPost from '@/components/BlogPost.vue'
import AboutUs from '@/components/AboutUs.vue'
import Category from '@/components/Category.vue'
import Author from '@/components/Author.vue'
import Contact from '@/components/Contact.vue'
import Privacy from '@/components/Privacy.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog/post',
      name: 'blog-post',
      component: BlogPost
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/author',
      name: 'author',
      component: Author
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    },
  ],
})

export default router
