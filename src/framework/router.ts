export class Router {

  paths: object

  constructor( paths  ) {
    this.paths = paths
    const { location: { pathname = '/' } } = window
    const URI = pathname === '/' ? 'home' : pathname.replace( '/', '' )
    this.load( URI )
  }

  load( page: string = 'home' ) {
    const { paths } = this
    const { path, component } = this.paths[ page ]
    const { template, style } = new component
    const container = document.querySelector( 'router' )
    container.innerHTML = template
    window.history.pushState( { }, '', path )
  }

}