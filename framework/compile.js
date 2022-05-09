const pug = require( 'pug' )
const less = require( 'less' )
const { exec } = require( 'child_process' )
const { promises: fs } = require( 'fs' )

const srcIndex = 'src/app/index.pug'
const distIndex = 'dist/index.html'
const srcMain = 'src/app/main.ts'
const distMain = 'dist/main.js'
const srcStyle = 'src/app/style.less'
const distStyle = 'dist/style.css'

async function main( ) {
  await fs.rm( 'dist', { recursive: true, force: true } )
  await fs.mkdir( 'dist' )
  const PUG = await fs.readFile( srcIndex, 'utf-8' )
  let HTML = await pug.render( PUG, { pretty: true } )
  let i = HTML.indexOf( '</head>' )
  HTML = HTML.slice( 0, i ) + '  <link rel="stylesheet" href="style.css">' + HTML.slice( i+7 )
  i = HTML.indexOf( '</body>' )
  HTML = HTML.slice( 0, i+7 ) + '\n  <script src="main.js"></script>' + HTML.slice( i+7 )
  console.log( HTML )
  await fs.writeFile( distIndex, HTML )
  await exec( `tsc ${srcMain} --outFile ${distMain}` )
  const LESS = await fs.readFile( srcStyle, 'utf-8' )
  const { css } = await less.render( LESS )
  await fs.writeFile( distStyle, css )
}

main( )

/*
const watch = require( 'node-watch' )
watch( 'src', { recursive: true }, async ( event, file ) => { } )
*/