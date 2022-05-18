import 'reflect-metadata'
//import { Test, Tester, Render } from './framework/test'
//import { App } from './app/app'
//import { Component } from './framework/component'

import { Route } from './framework/router'
import { service } from './framework/service'
import { Module } from './framework/module'
import { API } from './api/api'

@Route( '/' )
export class Home {

  @service
  api: API

  constructor( ) {
    console.log( 'SERVICE INSTANCE:', this.api )
  }
  
}

@Module( { routes: [ Home ], components: [ ], services: [ API ] } )
export class Application { }

new Application( )
