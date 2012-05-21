#!/usr/bin/env node

var fs = require('fs');

var reference = JSON.parse(fs.readFileSync('reference.json','utf8'));

var symbolizers = reference.symbolizers;

console.log('Missing doc properties');
console.log('----------------------');
var missing_doc_properties = 0;
var cursim = '';
for (var symbolizer in symbolizers) {
    if (symbolizer === 'colors') continue;
    for (var prop in symbolizers[symbolizer]) {
        if (!symbolizers[symbolizer][prop].doc) {
            if (symbolizer !== cursim) {
                cursim = symbolizer;
                console.log(symbolizer);
            }
            console.log('- ' + prop);
            missing_doc_properties++;
        }
    }
}
console.log('----------------------');
console.log(missing_doc_properties, 'missing doc properties');
console.log('----------------------');

console.log('Missing default value');
console.log('----------------------');
var missing_doc_properties = 0;
var cursim = '';
for (var symbolizer in symbolizers) {
    if (symbolizer === 'colors') continue;
    for (var prop in symbolizers[symbolizer]) {
        if (symbolizers[symbolizer][prop]['default-value'] === undefined) {
            if (symbolizer !== cursim) {
                cursim = symbolizer;
                console.log(symbolizer);
            }
            console.log('- ' + prop);
            missing_doc_properties++;
        }
    }
}
console.log('----------------------');
console.log(missing_doc_properties, 'missing default-value');
