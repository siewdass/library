import 'reflect-metadata'
//import { Core } from './framework/core'
//import { Component } from './framework/component'

import { ROUTE, render } from './framework/router'
import { Service, Element, View } from './framework/service'
import { MODULE } from './framework/module'
import { Api } from './api/api'
import { App } from './app/app'

@ROUTE( '/' )
export class Home implements render {

  @Element( 'test' )
  test: HTMLElement

  @Service( )
  api: Api

  @View( )
  app: App

  constructor( ) {
    setTimeout( ( ) => {
      console.log( 'API INSTANCE:', this.api )
      console.log( 'omg', this.app )
    }, 2000 ) 
  }
  
  render( ) {
    return this.app
  }

}

@MODULE( { routes: [ Home ], views: [ App ], components: [ ], services: [ Api ] } )
export class Application { }

new Application( )
