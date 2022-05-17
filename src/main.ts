import { Route } from './framework/router'
import { Component } from './framework/component'
import { Service } from './framework/service'
import { Module } from './framework/module'
import { App } from './app/app'
import { Test, Tester, Render, T, getParameters } from './framework/test'

@Service( '' )
export class API {
  constructor( ) {
    console.log( 'API STARTED' )
  }
}

@Component( '<p>Login</p>' )
export class Login {
}

export const Se = ( ) => {
  return ( target: any ) => {
    const keys = getParameters( target )
    const types = Reflect.getMetadata( 'design:paramtypes', target ) 

    for ( let i = 0; i < keys.length; i++ ) {
      const key = keys[ i ]
      const type = types[ i ].name
      if ( type == 'API' ) {
        target.prototype[ key ] = global.services
      }
    }
    console.log( 'when' )
  }
}

@Se( )
//@Route( '/', '<p>Home</p>' )
export class Home {
  private j: String
  private h: String = 'test'
  constructor( private s: String, private n: API ) {
    console.log( 'Home:', this.n )
  }
}

@Route( '/about', '<p>About</p>' )
export class About { }

@Route( '/contact', '<p>Contact</p>' )
export class Contact { }

@Module( { routes: [ Home ], components: [ Login ], services: [ API ] } )
export class Application { }

new Application( )
