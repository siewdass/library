import { Login } from "../main"

export function View( file: string ) {
  return function( target: Function ) {
    target.prototype.template = require( `${file}` )( )
    /*target.render = ( ) => {
      console.log( 's' )
    }*/
  }
}

const Serv = ( file: string ) : ClassDecorator => {
  return target => {
    //console.log(Reflect.getMetadata('design:paramtypes', target));
  }
}

function OnEvent( ) {
  return function( target: any, key: any, descriptor: PropertyDescriptor ) {
    target( )
    return descriptor;
  }
}

@View( './app.pug' )
export class App {

}


