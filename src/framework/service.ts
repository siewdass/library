export function Service( ) {
  return function( target: any ) {
    target.prototype.service = true
    if ( !global.services ) {
      global.services = {}
    }
    const service = new target
    global.services[ service.constructor.name ] = service
  }
}


export function service( target: any, key: string): any {
  const type = Reflect.getMetadata( 'design:type', target, key )
  //const descriptor2 = Object.getOwnPropertyDescriptor(target, key )
  const descriptor = { value: global.services[ 'API' ], writable: true }
  Object.defineProperty( target, key, descriptor )
}