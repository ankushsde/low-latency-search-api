const express = require('express');
const cors = require('cors'); // ✅ Import cors
const { performance } = require('perf_hooks');
const { buildIndex, searchProducts } = require('./searchEngine');
const products = require('./data/products.json');

let index;

function start() {
    const app = express();

    app.use(cors()); // ✅ Enable CORS for all origins

    index = buildIndex(products);

    app.get('/search', (req, res) => {
        const query = req.query.q || '';
        const start = performance.now();
        const results = searchProducts(query, index);
        const duration = performance.now() - start;
        res.json({
            duration: `${duration.toFixed(2)}ms`,
            results,
        });
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = { start };
