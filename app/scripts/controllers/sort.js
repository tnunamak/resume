'use strict';

angular.module('resumeApp')
  .controller('SortCtrl', function ($scope) {

    $scope.unsorted = _.shuffle(_.range(10));
    var algorithms = {};

    $scope.sort = function() {
      var start = new Date().getTime();
      $scope.sorted = algorithms[$scope.selectedAlgorithm]($scope.unsorted.slice(0));
      var end = new Date().getTime();
      $scope.time = end-start;
    };

    function swap(a, i, j) {
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }

    algorithms.insertion = function(a) {
      for(var i = 0; i < a.length; i++) {
        for(var j = i - 1; j >= 0; j--) {
          if(a[j+1] < a[j]) {
            swap(a, j, j+1);
          }
        }
      }
      return a;
    };

    algorithms.selection = function(a) {
      for(var i = 0; i < a.length; i++) {
        var smallest = i;
        for(var j = i; j < a.length; j++) {
          if(a[j] < a[smallest]) {
            smallest = j;
          }
        }
        swap(a, i, smallest);
      }
      return a;
    };

    algorithms.bubble = function(a) {
      for(var i = 0; i < a.length; i++) {
        var swapOccurred = false;
        for(var j = a.length; j > i; j--) {
          if(a[j] < a[j-1]) {
            swap(a, j-1, j);
            swapOccurred = true;
          }
        }
        if(!swapOccurred) {
          break;
        }
      }
      return a;
    };

    algorithms.merge = function(a) {
      if(a.length <= 1) {
        return a.slice(0);
      }
      var left = algorithms.merge(a.slice(0, a.length/2));
      var right = algorithms.merge(a.slice(a.length/2, a.length));

      var joined = [];
      var i = 0, j = 0;

      while(i < left.length || j < right.length) {
        if(i >= left.length) {
          joined.push(right[j++]);
        } else if(j >= right.length) {
          joined.push(left[i++]);
        } else if(left[i] < right[j]) {
          joined.push(left[i++]);
        } else {
          joined.push(right[j++]);
        }
      }

      return joined;
    };

    $scope.algorithms = ['insertion', 'selection', 'bubble', 'merge'];
    $scope.selectedAlgorithm = 'insertion';

  });
