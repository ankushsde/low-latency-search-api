function buildIndex (products){
    const index = new Map();

    for(let product of products){
        const tokens = product.toLowerCase().split(' ');
        for(let token of tokens) {
            if(!index.has(token)) index.set(token,[]);
            index.get(token).push(product);
        }
    }
    return index;
}

function searchProducts(query,index){
    const q = query.toLowerCase();
    const matches = [];

    for(let [key,items] of index){
        if (key.startsWith(q)){
            matches.push(...items)
        }
    }

    return [...new Set(matches)].slice(0,10);
}

module.exports = {buildIndex,searchProducts}
