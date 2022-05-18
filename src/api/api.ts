import { SERVICE } from '../framework/service'

@SERVICE( )
export class Api {
  test = 'ss'
  constructor( ) {
    console.log( 'API STARTED', this )
    this.test = 'lol'
  }
}
