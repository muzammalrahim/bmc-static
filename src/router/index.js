import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonalInfo from '../views/PersonalInfo.vue'
import IssuingRegion from '../views/IssuingRegion.vue'
import VerificationCode from '../views/VerificationCode.vue'
import FrontDoc from '../views/FrontDoc.vue'
import CamAccess from '../views/CamAccess.vue'
import UploadLicense from '../views/UploadLicense.vue'
import UploadPassport from '../views/UploadPassport.vue'

// import { createPopper } from '@popperjs/core';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'bmc',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BMCView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/personal-info',
      name: 'home',
      component: PersonalInfo
    },
    
    {
      path: '/verification-code',
      name: 'verification-code',
      component: VerificationCode
    },

    {
      path: '/issue-region',
      name: 'issue-region',
      component: IssuingRegion
    },
    
    {
      path: '/camAccess',
      name: 'camAccess',
      component: CamAccess
    },
    {
      path: '/front-doc',
      name: 'front-doc',
      component: FrontDoc
    },
    {
      path: '/uploadLicense',
      name: 'uploadLicense',
      component: UploadLicense
    },
    {
      path: '/uploadPassport',
      name: 'uploadPassport',
      component: UploadPassport
    },
  ]
})

export default router
