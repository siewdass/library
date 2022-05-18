class COMPONENT extends HTMLElement {
  html = '<style></style><p>My Component</p>'
  constructor( ) {
    super( )
    const template = document.createElement( 'template' )
    template.innerHTML = this.html
    const shadow = this.attachShadow( { mode: 'open' } )
    shadow.appendChild( template.content.cloneNode( true ) )
  }
}

export function Component( template: string ) {
  return function( target: Function ) {
    target.prototype.component = true
    //target = COMPONENT
    //target.prototype.html = template
    //console.log( 'Properties:', Object.getOwnPropertyNames( target.prototype ) )
    //target.prototype.pug = require( '../app/app.pug' )( )
  }
}