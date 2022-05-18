export function ROUTE( path: String ) {
  return function( target: Function ) {
    target.prototype.route = true
    target.prototype.path = path
  }
}

export interface render {
  render( ): any
}
