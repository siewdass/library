export function Template( file: string ) {
  return function( target: Function ) {
    target.prototype.template = file
  }
}

export function Style( file: string ) {
  return function( target: Function ) {
    target.prototype.style = file
  }
}
