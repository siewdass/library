export function Component( arg: any ) {
  return function( target: Function ) {
    target.prototype.template = arg.template
    target.prototype.style = arg.style
    target.prototype.pug = require( '../app/app.pug' )( )
  }
}
