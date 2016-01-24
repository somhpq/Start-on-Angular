// controller shold be create per view to support logics for the view

(
	function(){


		// 1. refer to the module
		var module = angular.module('startAngular');

		// 2. define a function to be used as the controller for the angular module
		// in the function below - the argument 'model' is assigned with $scope by angular
		// as $scope is injected per section 3

		// the second argument 'service' is 'dataService' from the line of
		// controller.$inject = ['$scope', 'dataService'];
		var controller = function(model, service){

			model.GreetingText = "This is message from the controller";
			model.where = {at: ''};
			model.schedules = service.data;

			// handle selection of blank option from the select
			// when the blank option is selected
			// for some reason model.where.at
			// got set to null (not  empty string)
			// so, this function will set it to be the empty string
			model.clearWhere = function() {
				if(!model.where.at) {
					model.where.at = '';
				}
			}
		}

		// 3. inject dependencies into the controller function
		// in the statement below - we are injecting $scope, which
		// is the the object used by controller to pass view model to the view
		// - include dataService as dependency for this controller
		// - the dataService is from the new service.js file
		controller.$inject = ['$scope', 'dataService'];

		// 4. assign the function controller to be a controller for the module startAngular
		// the controller name is assigned in this step
		module.controller('firstController', controller);
	}()
);