const assert = require('assert');
const qp = require('..');

function test(input, expected, spec) {
	spec = spec || `Test ${Date.now()}: `
    let got = qp.build(input.query, input.options);
    try{
        assert.deepEqual(got, expected);
        console.log(`\u001B[32mPASS -\u001B[39m ${spec}: got ${JSON.stringify(expected)} as expected`);
    }catch(err){
        console.log(`\x1b[31mFAIL - \u001B[39m ${spec}: got ${got} instead of ${JSON.stringify(expected)}`);
    }
}

module.exports = function buildTest(){
	console.log('\n Test qp.build() from build.spec.js:\n')
	test({ query : { a : 'c' }, options : { encode : false } }, 'a=c',  "It should build query from { a : 'c' } object");
	test({ query : { where: { email: { endsWith : '@gmail.com' } } }, options : { encode : false } }, 'where[email][endsWith]=@gmail.com', "It should build query from deep object")
	test({ query : { include : [ 0, { hola : "mundo"}  ] }, options : { encode : false } }, 'include[0]=0&include[1][hola]=mundo', "It should build query including arrays and objects")
	test({ query : { include : [ 0, { hola : "mundo"}  ] }, options : { encode : true } }, 'include%5B0%5D=0&include%5B1%5D%5Bhola%5D=mundo', "It should build query with URUI encoding")
};