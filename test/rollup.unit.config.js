try {

	require( 'qunit' );

} catch {

	console.log( '\x1b[31mError! You not installed dependencies. Please run `npm i --prefix test`\x1b[37m' );
	process.exit( 1 );

}

export default [
	// node source unit conf
	{
		input: 'unit/three.source.node.unit.js',
		output: [
			{
				format: 'umd',
				name: 'THREE',
				file: 'unit/build/three.source.unit.node.js',
				intro: 'QUnit.module( "Source", () => {',
				outro: '} );',
				indent: '\t',
			}
		]
	},
];
