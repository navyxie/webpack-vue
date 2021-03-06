module.exports = {
  '/': {
    component: require('./components/index'),
    subRoutes: {
      //默认显示Tab1
      "/":{
        component: require('./components/tab1')
      },
      "/tab1": {
        component: require('./components/tab1'),
        subRoutes: {
          "/sub_sub_tab" : {
            component: require('./components/sub_sub_tab')
          }
        }
      },
      "/tab2": {
        component: require('./components/tab2')
      }
    }
  },
  'list': {
    component: require('./components/list')
  },
  '/show/:id': {
    name: 'show',
    component: require('./components/show')
  },
  '*': {
    component: require('./components/notFound')
  }
}