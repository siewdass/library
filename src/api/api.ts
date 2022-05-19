import { SERVICE } from '../framework/service'

export function Delay( param ): any {
  return function( target, key, descriptor: PropertyDescriptor ) {
    const original = descriptor.value
    descriptor.value = function( ...args: any[ ] ) {
      setTimeout( ( ) => { 
        original.apply( this, args )
      }, param )
    }
    return descriptor
  }
}

export function Repeat( param ): any {
  return function( target, key, descriptor: PropertyDescriptor ) {
    const original = descriptor.value
    descriptor.value = function( ...args: any[ ] ) {
      setInterval( ( ) => { 
        original.apply( this, args )
      }, param )
    }
    return descriptor
  }
}

export function Log( target, key, descriptor: PropertyDescriptor ) {
	const original = descriptor.value
  descriptor.value = function( ...args: any[ ] ) {
    const res = original.apply( this, args )
    console.log( `\x1b[32m${ target.constructor.name }\x1b[0m.\x1b[33m${ key }\x1b[0m:`, res )
    return res
  }
  return descriptor
}

export function Logger( ...args ) {
  console.log( args.toString( ) )
}

@SERVICE( )
export class Api {

  data = 'Hello..'

  constructor( ) {
    console.log( 'API STARTED', this )
    this.Send( )
    this.Exec( )
  }

  @Log // Debug
  Send( ) {
    return this.data
  }

  @Repeat( 1000 )
  Update( ) {
    this.data = 'Hello World'
  }

  @Delay( 1000 )
  Exec( ) {
    this.data = 'Hello World'
  }

}
