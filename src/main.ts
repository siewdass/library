import 'reflect-metadata'
//import { Test, Tester } from './framework/test'
//import { Component } from './framework/component'

import { Route, Render } from './framework/router'
import { service } from './framework/service'
import { Module } from './framework/module'
import { API } from './api/api'
import { App } from './app/app'

@Route( '/' )
export class Home implements Render {

  @service
  api: API

  constructor( ) {
    console.log( 'API INSTANCE:', this.api )
  }
  
  render( ) {
    return App
  }

}

@Module( {
  routes: [ Home ],
  views: [ App ],
  components: [ ],
  services: [ API ]
} )
export class Application { }

new Application( )
