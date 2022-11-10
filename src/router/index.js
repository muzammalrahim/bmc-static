import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonalInfo from '../views/PersonalInfo.vue'
import IssuingRegion from '../views/IssuingRegion.vue'
import VerificationCode from '../views/VerificationCode.vue'
import FrontDoc from '../views/FrontDoc.vue'
import CamAccess from '../views/CamAccess.vue'
import UploadLicense from '../views/UploadLicense.vue'
import UploadPassport from '../views/UploadPassport.vue'
import PhotoSubmit from '../views/PhotoSubmit.vue'
import TakeSelfi from '../views/TakeSelfi.vue'
import FrontPicture from '../views/FrontPicture.vue'
import FaceFrame from '../views/FaceFrame.vue'
import ThankYou from '../views/ThankYou.vue'
import Verified from '../views/Verified.vue'
import UploadPermit from '../views/UploadPermit.vue'
import FailedView from '../views/FailedView.vue'
import BMCViewChecked from '../views/BMCViewChecked.vue'
import TermCondition from '../views/TermCondition.vue'

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
      path: '/verified-info',
      name: 'verified-info',
      component: BMCViewChecked
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
      path: '/upload-passport',
      name: 'upload-passport',
      component: UploadPassport
    },
    {
      path: '/upload-permit',
      name: 'upload-permit',
      component: UploadPermit
    },
    {
      path: '/photo-submit',
      name: 'photo-submit',
      component: PhotoSubmit
    },
    {
      path: '/take-selfi',
      name: 'take-selfi',
      component: TakeSelfi
    },
    {
      path: '/frontPicture',
      name: 'frontPicture',
      component: FrontPicture
    },
    {
      path: '/face-frame',
      name: 'face-frame',
      component: FaceFrame
    },
    {
      path: '/thankyou',
      name : 'thankyou',
      component: ThankYou
    },
    {
      path: '/failed',
      name : 'failed',
      component: FailedView
    },
    {
      path: '/verified',
      name : 'verified',
      component: Verified
    },
    {
      path: '/terms-condition',
      name : 'terms-condition',
      component: TermCondition
    }
  ]
})

export default router
