const {buildIndex,searchProducts} = require('./searchEngine');
const products = require('./data/products.json')
const {performance} = require('pref_hooks');

const index = buildIndex(products);

function testQuery(q){
    const t0 = performance.now();
    const results = searchProducts(q,index);
    const t1 = performance.now();
    console.log(`Query"${q}" - Time: ${(t1-t0).toFixed(2)}ms | Results: ${results.length}`);


}
['iph', 'gal', 'sony', 'mac', 'canon', 'nike', 'rog'].forEach(testQuery);
