import { Service } from '../framework/service'

@Service( )
export class API {
  test = 'ss'
  constructor( ) {
    this.test = 'lol'
    console.log( 'API STARTED' )
  }
}
