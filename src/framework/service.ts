export function Service( path: any ) {
  return function( target: any ) {
    if ( global.services == undefined ) {
      global.services = { }
    }
    const service = new target
    global.services[ service.name ] = new target
    console.log(global.services)
  }
}