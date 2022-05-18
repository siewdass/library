export function View( file: string ) {
  return function( target: Function ) {
    target.prototype.template = require( `${file}` )( )
    /*target.render = ( ) => {
      console.log( 's' )
    }*/
  }
}

@View( './app.pug' )
export class App {

}


