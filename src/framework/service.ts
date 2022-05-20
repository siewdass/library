export function SERVICE( ): any {
  return function( target: any ): void {
    target.prototype.service = true
    if ( !global.services ) { global.services = { } }
    const service = new target
    global.services[ service.constructor.name ] = service
  }
}

export function Service( ): any {
  return function( target: any, key: string ): void {
    const type = Reflect.getMetadata( 'design:type', target, key )
    if ( global.services[ type.name ] ) {
      const value =  global.services[ type.name ]
      const descriptor = { value, writable: true }
      Object.defineProperty( target, key, descriptor )
    }
  }
}

export function Element( id: string ): any {
  return function( target: any, key: string ): void {
    const type = Reflect.getMetadata( 'design:type', target, key )
    if ( type.name == HTMLElement.name ) {
      const value = document.getElementById( id )
      const descriptor = { value, writable: true }
      Object.defineProperty( target, key, descriptor )
    }
  }
}

export function View( ): any {
  return function( target: any, key: string ): void {
    const type = Reflect.getMetadata( 'design:type', target, key )
    if ( global.views[ type.name ] ) {
      const value = global.views[ type.name ]
      const descriptor = { value, writable: true }
      Object.defineProperty( target, key, descriptor )
    }
  }
}