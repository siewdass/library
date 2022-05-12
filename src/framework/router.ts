export class Router {
  paths: any
  constructor( paths: any ) {
    this.paths = paths
    const { location: { pathname = '/' } } = window
    const URI = pathname === '/' ? 'home' : pathname.replace( '/', '' )
    //this.load( URI )
  }
  load( page: string = 'home' ) {
    const { paths } = this
    const { path, template } = paths[ page ]
    console.log( path, template )
    //const container = document.querySelector( 'router' )
    //container.innerHTML = template
    //window.history.pushState( { }, '', path )
  }
}