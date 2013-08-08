angular.module('resumeApp').filter('markdown', function () {
  return function (markdownString) {
    return markdown.toHTML(markdownString);
  };
});