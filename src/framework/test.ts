import 'reflect-metadata'

export const getParameters = ( param ) => {
  const RegExInsideParentheses = /[(][^)]*[)]/
  const RegExParenthesesAndSpaces = /[()\s]/g
  const a = RegExInsideParentheses.exec( param )[ 0 ]
  const b = a.replace( RegExParenthesesAndSpaces, '' )
  const c = b.split( ',' ).map( str => str.trim( ) )
  return c
}

export function Test( constructor: any ) {
  const types = Reflect.getMetadata( 'design:paramtypes', constructor ) 
  const params = getParameters( constructor )
  let props = { }
  
  const CONSTRUCTOR: any = function( ...args ) {
    const c = new constructor( args )
    for ( let i = 0; i < params.length; i++ ) {
      c[ params[ i ] ] = args[ i ]
      props[ params[ i ] ] = types[ i ].name
    }
    c.props = props
    return c
  }

  CONSTRUCTOR.prototype = constructor.prototype
  return CONSTRUCTOR
}

export function Tester( target: Function ) {
  const types = Reflect.getMetadata( 'design:paramtypes', target ) 
  //console.log( types )
}

export function T( ) {
  return function( constructor: any ) {
    constructor.prototype.j = '/'
    const types = Reflect.getMetadata( 'design:paramtypes', constructor ) 
    const params = getParameters( constructor )
    let props = { }
    const CONSTRUCTOR: any = function ( ...args ) {
      const c = new constructor( args )
      for ( let i = 0; i < params.length; i++ ) {
        c[ params[ i ] ] = args[ i ]
        props[ params[ i ] ] = types[ i ].name
      }
      c.props = props
      return c
    }
    CONSTRUCTOR.prototype = constructor.prototype
    return CONSTRUCTOR
  }
}

export interface Render {
  render( ): any
}

export const Serv = ( param: any ) => {
  return ( target: any ) => {
  }
}