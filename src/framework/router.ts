export class ROUTER {

  routes: any

  constructor( routes: any ) {
    this.routes = routes
    //const { location: { pathname = '/' } } = window
    //const URI = pathname === '/' ? 'home' : pathname.replace( '/', '' )
    this.load( )
  }

  load( PATH: string = '/' ) {
    const { routes } = this
    for ( let route in routes ) {
      const { path, template } = routes[ route ]
      if ( path == PATH ) {
        const container = document.querySelector( 'router' )
        container.innerHTML = template
        window.history.pushState( { }, '', path )
      }
    }
  }

}