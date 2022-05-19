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

class DOM {
  elements: any

  constructor( ) {
    this.elements = document.getElementsByTagName( '*' )
    this.routes( )
  }

  routes( ) {
    for ( let i = 0; i < this.elements.length; i++ ) {
      const path = this.elements[ i ].getAttribute( '[router]' )
      if ( path ) {
        this.elements[ i ].addEventListener( 'click', ( ) => {
          console.log( path )
        } )
      }
    }
  }

}


export function MODULE( param: any ) {
  return function( target: Function ) {
    const { routes, views, components, services } = param

    console.log( 'ALL SERVICES:', global.services )

    new DOM( )

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
