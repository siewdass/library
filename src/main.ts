import { Route } from './framework/router'
import { Component } from './framework/component'
import { Service } from './framework/service'
import { Module } from './framework/module'
import { App } from './app/app'
import { Test, Tester, Render } from './framework/test'

@Service( )
export class API {
  test = 'ss'
  constructor( ) {
    this.test = 'lol'
    console.log( 'API STARTED' )
  }
}

@Component( '<p>Login</p>' )
export class Login { }

@Test
//@Route( '/', '<p>Home</p>' )
export class Home implements Render {
  constructor( private n: Number, private s: API ) {
    console.log( 'n:', this.n )
    console.log( 's:', this.s )
  }
  Render( ): API {
    return this.s
  }
}

@Route( '/about', '<p>About</p>' )
export class About { }

@Route( '/contact', '<p>Contact</p>' )
export class Contact { }

@Module( { routes: [ Home ], components: [ Login ], services: [ API ] } )
export class Application { }

new Application( )
