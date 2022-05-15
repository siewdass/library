export function Route( path: String, template: string ) {
  return function( target: Function ) {
    target.prototype.path = path
    target.prototype.template = template
  }
}