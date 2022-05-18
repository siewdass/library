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
  const keys = getParameters( constructor )
  
  const CONSTRUCTOR: any = function( ...args ) {
    const c = new constructor( args )
    for ( let i = 0; i < types.length; i++ ) {
      const type = types[ i ].name
      if ( global.services[ type ] ) {
        c[ keys[ i ] ] = global.services[ type ]
      } else if ( type == 'Boolean' ) {
        c[ keys[ i ] ] = false
      } else if ( type == 'Number' ) {
        c[ keys[ i ] ] = 0
      } else if ( type == 'String' ) {
        c[ keys[ i ] ] = ''
      } else if ( type == 'Array' ) {
        c[ keys[ i ] ] = [ ]
      } else if ( type == 'Object' ) {
        c[ keys[ i ] ] = { }
      }
    }
    return c
  }

  CONSTRUCTOR.prototype = constructor.prototype
  return CONSTRUCTOR
}

export const Tester = ( ) => {
  return ( target: any ) => {
    var f: any = function (...args) {
      return new target( ...args )
    }
    f.prototype = target.prototype;
    return f;
  }
}

export interface Render {
  Render( ): any
}