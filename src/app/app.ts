import { Component } from '../framework/component'

@Component( { template: '<p>Home</p>', style: 'app.less' } )
export class Home {
  myvar = 'h'
  constructor( ) {
    console.log( this )
  }
  func( ) {
  }
}

@Component( { template: '<p>About</p>', style: 'app.less' } )
export class About {
}

@Component( { template: '<p>Contact</p>', style: 'app.less' } )
export class Contact {
}