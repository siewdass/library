export function View( file: string ) {
  return function( target: Function ) {
    target.prototype.template = require( `${file}` )( )
  }
}

@View( './app.pug' )
export class App {
}


