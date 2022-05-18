export function Service( ) {
  return function( target: any ) {
    target.prototype.service = ''
  }
}