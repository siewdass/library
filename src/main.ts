import { Router } from './framework/router'

const paths = {
  home: { path: '/', template: '<h1>Home</h1>' },
  about: { path: '/about', template: '<h1>About</h1>' },
  contact: { path: '/contact', template: '<h1>Contact</h1>' }
}

global.router = new Router( paths )

//window.router = new Router( paths )
