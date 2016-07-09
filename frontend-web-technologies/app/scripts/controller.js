/**
 * TodoApp Controller
 */
(function() {
    
    'use strict';

    angular
        .module('TodoApp.Controllers', [])
        .controller('AppController', AppController);

    function AppController($scope) {

        $scope.todos = []; // Todo list holder array
        $scope.completedTodoCount = function() {
            var count = 0;

            angular.forEach($scope.todos, function(val) {
                if (val.isChecked) {
                    ++count;
                }
            });

            return count;
        };

        /**
         * Function: AddTodo
         *
         * Add a new todo
         */
        $scope.AddTodo = function() {
            
            if ( ! $scope.todo.length) { return; } // If title is empty, then don't add anything in the array.

            var item = {
                title: $scope.todo,
                isChecked: false
            };

            $scope.todos.push(item); // I push lang... :)
            $scope.todo = '';

        };

        /**
         * Function: RemoveTodo
         *
         * Remove a todo
         *
         * Parameter:
         * 
         *     (Integer) index - The array index
         */
        $scope.RemoveTodo = function(index) {
            
            $scope.todos.splice(index, 1);

        };

    }

})();