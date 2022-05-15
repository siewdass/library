import { ROUTER } from './framework/router'
//import { Home, About, Contact } from './app/app'

interface parameters {
  parameters: any
}

export function Service( path: any ) {
  return function( target: Function ) {
    //target.prototype.path = path
  }
}

export function Component( path: any ) {
  return function( target: Function ) {
    //target.prototype.path = path
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
    global.router = new ROUTER( ROUTES )
  }
}

export function Router( path: String, template: string ) {
  return function( target: Function ) {
    target.prototype.path = path
    target.prototype.template = template
  }
}

@Service( '' )
export class API {
}

@Component( '' )
export class LOGIN {
}

@Router( '/', '<p>Home</p>' )
export class HOME {
  constructor( ) {
    //console.log( 'home' )
  }
}

@Router( '/about', '<p>About</p>' )
export class ABOUT {
  constructor( ) {
    //console.log( 'about' )
  }
}

@Router( '/contact', '<p>Contact</p>' )
export class CONTACT {
  constructor( ) {
    //console.log( 'contact' )
  }
}

@Module( {
  routes: [ HOME, ABOUT, CONTACT ],
  components: [ LOGIN ],
  services: [ API ]
} )
export class Application {
}

new Application( )