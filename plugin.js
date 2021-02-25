var postcss = require('postcss');
var pkg = require('./package.json');

module.exports = postcss.plugin(pkg.name, plugin);

function plugin(opts) {
  opts = opts || {}
  var id = opts.id || 'root'
  var local = `.${id}`
  return function(root) {
    var keyframes = [];
    root.walkAtRules(/(keyframes)$/, function (rule) {
      keyframes.push(rule);
      rule.remove();
    });
    var result = root.walkRules(function (rule) {
      if (rule.selector.substr(0, 7) === ':global') return;
      if (rule.selector.indexOf('.') === -1) {
        return;
      }

      rule.selectors = rule.selectors.map(selector => {
        return local + ' ' + selector;
      });
    })

    keyframes.map(keyframe => {
      root.append(keyframe);
    });

    return result;
  }
}
