class Router {

  routes: any

  constructor( routes: any ) {
    this.routes = routes
    this.load( )
  }

  load( _path: string = '/' ) {
    for ( let route in this.routes ) {
      const { path, template } = this.routes[ route ]
      if ( path == _path ) {
        const container = document.querySelector( 'router' )
        container.innerHTML = template
        window.history.pushState( { }, '', path )
      }
    }
  }

}

export function Module( param: any ) {
  return function( target: Function ) {
    const { routes, views, components, services } = param

    /*for ( let s in services ) {
      if ( services[ s ].prototype.service ) { // ONLY SERVICES
        const service = new services[ s ]
        global.services[ service.constructor.name ] = service
      }
    }*/

    console.log( 'ALL SERVICES:', global.services )

    let ROUTES = [ ]

    for ( let route in routes ) {
      const { path, render } = new routes[ route ]
      const view = render( )
      const myview = new view( )
      ROUTES.push( { path, template: myview.template } )      
    }

    global.router = new Router( ROUTES )
  }
}
