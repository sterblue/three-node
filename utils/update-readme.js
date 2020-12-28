try {

	require( '../build/window.js' );

} catch {

	console.log( '\x1b[31mError! You need to build utils/window.js. Please run `npm run build`\x1b[37m' );
	process.exit( 1 );

}

const path = require( "path" );
const _window = require( '../build/window.js' );
const namesGlobal = Object.keys( _window ).toString().split( "," );
const unsupportedGlobals = namesGlobal.filter( value => _window[ value ] === undefined );
const fs = require( 'fs' );
const pathReadme = path.resolve( __dirname, "../README.md" );
const contents = fs.readFileSync( pathReadme, 'utf8' );
const contentsBeforeList = contents.split( "List of unsupported DOM objects used by Three.js: " )[ 0 ];
fs.writeFileSync( pathReadme, contentsBeforeList + "List of unsupported DOM objects used by Three.js: \n-   " + unsupportedGlobals.join( "\n-   " ) + "\n<!-- please don't add documentation below this point -->" );



