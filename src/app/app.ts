export function VIEW( pug: string ) {
  return function( target: any ) {
    target.prototype.template = require( `${ pug }` )( )
    target.prototype.view = true
    if ( !global.views ) { global.views = { } }
    const view = new target
    global.views[ view.constructor.name ] = view
  }
}

@VIEW( './app.pug' )
export class App {
}


