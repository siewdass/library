export function Route( path: String ) {
  return function( target: Function ) {
    target.prototype.route = true
    target.prototype.path = path
  }
}