angular.module('TodoDirective',[]).directive('todoTable', function() {
  return {
    restrict: 'EA',    // A -> attribute
    templateUrl: 'templates/todo-table/todo-table.html'
  };
});
