var _ = require('lodash');
var postcss = require('postcss');

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
                classes.push(node.selector);
            }
        });

        var inHash = classes.map(function (className) {
            return opts.indentation + '/** ' + className  + ' */\n' +
                    opts.indentation + _.camelCase(className) + ': ' + className.replace(/^\./, '') + ',\n';
        });

        opts.done('export classes = {\n' + inHash + '};\n');
    };
});
