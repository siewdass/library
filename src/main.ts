import { ROUTER } from './framework/router'
//import { Home, About, Contact } from './app/app'

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
export class Home {
}

@Router( '/about', '<p>About</p>' )
export class About {
}

@Router( '/contact', '<p>Contact</p>' )
export class Contact {
}

@Module( {
  routes: [ Home, About, Contact ],
  components: [ LOGIN ],
  services: [ API ]
} )
export class Application {
}

new Application( )