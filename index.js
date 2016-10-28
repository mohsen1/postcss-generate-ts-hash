var _ = require('lodash');
var postcss = require('postcss');
var parser = require('postcss-selector-parser');

module.exports = postcss.plugin('postcss-generate-ts-hash', function (opts) {
    opts = _.defaults(opts || {}, {
        done: function() {},
        indentation: '   '
    });

    var classes = [];

    // Work with options here

    return function (root, result) {

        root.walk(node => {
            if (node.type === 'rule') {
                parser(function(selectors) {
                    selectors.walk(function (selector) {
                        if (selector.type === 'class') {
                            classes.push(selector.value);
                        }
                    })

                }).process(node.selector).result;
            }
        });

        var inHash = _.uniq(classes).map(function (className) {
            return opts.indentation + '/** .' + className  + ' */\n' +
                    opts.indentation + _.camelCase(className) + ': \'' + className + '\',\n';
        });

        opts.done('export const classes = {\n' + inHash.join('') + '};\n');
    };
});
