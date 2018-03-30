import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import manage from '@/components/manage'
import news from '@/components/news/news_main'
import society from '@/components/society/society_main'
import member from '@/components/member/member_main'
import materials from '@/components/materials/materials_main'
import discussion from '@/components/discussion/discussion_main'
import activity from '@/components/activity/activity_main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/home',
      name: 'home',
      component: home
    },{
      path: '/manage',
      name: 'manage',
      component: manage
    },{
      path: '/news',
      name: 'news',
      component: news
    },{
      path: '/society',
      name: 'society',
      component: society
    },{
      path: '/member',
      name: 'member',
      component: member
    },{
      path: '/materials',
      name: 'materials',
      component: materials
    },{
      path: '/discussion',
      name: 'discussion',
      component: discussion
    },{
      path: '/activity',
      name: 'activity',
      component: activity
    },
  ]
})
