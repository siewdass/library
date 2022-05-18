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
    const { routes, components, services } = param

    /*for ( let s in services ) {
      if ( services[ s ].prototype.service ) { // ONLY SERVICES
        const service = new services[ s ]
        global.services[ service.constructor.name ] = service
      }
    }*/

    console.log( 'ALL SERVICES:', global.services )

    for ( let r in routes ) {
      //setTimeout( ( ) => {
        const route = new routes[ r ]( )
      //}, 1000 ) 

      //console.log( route )
      
    }

    /*for ( let r in routes ) {

      //const { props } = new routes[ r ]
      /*for ( let p in props ) {
        const prop = props[ p ]
        for ( let s in global.services ) {
          if ( prop == global.services[ s ].constructor.name ) {
            console.log( prop )
            //routes[ r ]( )[ prop ] = global.services[ s ]
          }
        }
      }
      //new routes[ r ]( )
    }*/

    /*Object.defineProperty(humanObj, 'age', {value: 10});
    Object.getOwnPropertyDescriptor(humanObj, 'age')*/
    /*global.instances = [ ]
    let ROUTES = [ ]
    const { routes, components, services } = param
    for ( let service in services ) {
      global.instances.push( new services[ service ] )
    }
    for ( let route in routes ) {
      const { path, render } = new routes[ route ]
      const view = render( )
      const myview = new view( )
      ROUTES.push( { path, template: myview.template } )      
    }
    global.router = new Router( ROUTES )*/
  }
}

/*
<nav>
  <a routerLink="/test">Test</a>
</nav>
*/

