import 'reflect-metadata'
//import { Test, Tester } from './framework/test'
//import { Component } from './framework/component'

import { ROUTE, render } from './framework/router'
import { service } from './framework/service'
import { MODULE } from './framework/module'
import { Api } from './api/api'
import { App } from './app/app'

@ROUTE( '/' )
export class Home implements render {

  @service
  api: Api

  constructor( ) {
    console.log( 'API INSTANCE:', this.api )
  }
  
  render( ) {
    return App
  }

}

@MODULE( { routes: [ Home ], views: [ App ], components: [ ], services: [ Api ] } )
export class Application { }

new Application( )
