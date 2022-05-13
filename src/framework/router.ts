export class Router {
  paths: Object
  constructor( paths  ) {
    this.paths = paths
    const { location: { pathname = '/' } } = window
    const URI = pathname === '/' ? 'home' : pathname.replace( '/', '' )
    this.load( URI )
  }
  load( page: string = 'home' ) {
    const { paths } = this
    const { path, template } = paths[ page ]
    const container = document.querySelector( 'router' )
    container.innerHTML = template
    window.history.pushState( { }, '', path )
  }
}

declare global {
  interface Window {
    router: Router
  }
}