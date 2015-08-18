var tmpl = require('../tmpl');
module.exports = {
  name: 'tmpl',
  ext: 'tmpl',
  render: function (template, data, callback) {
    tmpl.traverse(template, data).handle(function (traversed) {
      callback(null, tmpl.getHTML(traversed));
    });
  },
  load: function (src, templatePath, templateName, callback) {
    callback(null, tmpl.parse(src));
  }
}
