 import { createRouter, createWebHistory } from 'vue-router'
 import HomePage from '@/pages/HomePage.vue'
 import Project from '@/pages/Project.vue'
 import ProjectDetails from '@/pages/ProjectDetails.vue'
 import Blog from '@/pages/Blog.vue'
 import BlogDetails from '@/pages/BlogDetails.vue'
 import NotFound from '@/pages/NotFound.vue'

 const routes = [{
         path: '/',
         name: 'HomePage',
         component: HomePage
     },
     {
         path: '/Project',
         name: 'Project',
         component: Project
     },
     {
         path: '/ProjectDetails',
         name: 'ProjectDetails',
         component: ProjectDetails
     },
     {
         path: '/Blog',
         name: 'Blog',
         component: Blog
     },
     {
         path: '/BlogDetails',
         name: 'BlogDetails',
         component: BlogDetails
     },
     {
         path: '/:catchAll(.*)',
         name: 'NotFound',
         component: NotFound
     },
 ]

 const router = createRouter({
     history: createWebHistory(process.env.BASE_URL),
     routes
 })

 export default router