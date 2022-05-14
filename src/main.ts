import { Router } from './framework/router'
import { Home, About, Contact } from './app/app'

const paths = {
  home: { path: '/', component: Home },
  about: { path: '/about', component: About },
  contact: { path: '/contact', component: Contact }
}

global.router = new Router( paths )