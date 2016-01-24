// controller shold be create per view to support logics for the view

(
	function(){


		// 1. refer to the module
		var module = angular.module('startAngular');

		// 2. define a function to be used as the controller for the angular module
		// in the function below - the argument 'model' is assigned with $scope by angular
		// as $scope is injected per section 3

		// with this controller function, we are assigning GreetingText to the $scope, model variable
		var controller = function(model){

			model.GreetingText = "This is message from the controller";

		}

		// 3. inject dependencies into the controller function
		// in the statement below - we are injecting $scope, which
		// is the the object used by controller to pass view model to the view
		controller.$inject = ['$scope'];

		// 4. assign the function controller to be a controller for the module startAngular
		// the controller name is assigned in this step
		module.controller('firstController', controller);
	}()
);