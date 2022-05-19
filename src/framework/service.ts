export function SERVICE( ): any {
  return function( target: any ): void {
    target.prototype.service = true
    if ( !global.services ) {
      global.services = { }
    }
    const service = new target
    global.services[ service.constructor.name ] = service
  }
}

export function Service( target: any, key: string ): void {
  const type = Reflect.getMetadata( 'design:type', target, key )
  if ( global.services[ type.name ] ) {
    const descriptor = { value: global.services[ type.name ], writable: true }
    Object.defineProperty( target, key, descriptor )
  }
}

export function Element( id: string ) {
  return function( target: any, key: string ): void {
    const type = Reflect.getMetadata( 'design:type', target, key )
    if ( type.name == HTMLElement.name ) {
      const value = document.getElementById( id )
      const descriptor = { value, writable: true }
      Object.defineProperty( target, key, descriptor )
    }
  }
}