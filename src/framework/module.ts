class Router {

  routes: any

  constructor( routes: any ) {
    this.routes = routes
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

export function Module( param: any ) {
  return function( target: Function ) {
    let ROUTES = [ ]
    const { routes, components, services } = param
    for ( let route in routes ) {
      const { path, template } = new routes[ route ]( )
      ROUTES.push( { path, template } )      
    }
    global.router = new Router( ROUTES )
  }
}
