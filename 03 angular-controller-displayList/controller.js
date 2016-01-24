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
			model.schedules = 
			[
				//{season: 2013, week: 0, opponent: '', date: '', at: '', isByeweek: '0', score: 0, opponentScore: 0}

				{season: 2013, week: 1, opponent: 'Panthers', date: '9/10/2013', at: 'Road', isByeweek: '0', score: 12, opponentScore: 7}
				,{season: 2013, week: 2, opponent: '49ers', date: '9/15/2013', at: 'Home', isByeweek: '0', score: 29, opponentScore: 3}
				,{season: 2013, week: 3, opponent: 'Jaguars', date: '9/22/2013', at: 'Home', isByeweek: '0', score: 45, opponentScore: 17}
				,{season: 2013, week: 4, opponent: 'Texans', date: '9/29/2013', at: 'Road', isByeweek: '0', score: 23, opponentScore: 20}
				,{season: 2013, week: 5, opponent: 'Colts', date: '10/6/2013', at: 'Road', isByeweek: '0', score: 28, opponentScore: 34}
				,{season: 2013, week: 6, opponent: 'Titans', date: '10/13/2013', at: 'Home', isByeweek: '0', score: 20, opponentScore: 13}
				,{season: 2013, week: 7, opponent: 'Cardinals', date: '10/17/2013', at: 'Road', isByeweek: '0', score: 34, opponentScore: 22}
				,{season: 2013, week: 8, opponent: 'Rams', date: '10/28/2013', at: 'Road', isByeweek: '0', score: 14, opponentScore: 9}
				,{season: 2013, week: 9, opponent: 'Buccaneers', date: '11/3/2013', at: 'Home', isByeweek: '0', score: 27, opponentScore: 24}
				,{season: 2013, week: 10, opponent: 'Falcons', date: '11/10/2013', at: 'Road', isByeweek: '0', score: 33, opponentScore: 10}
				,{season: 2013, week: 11, opponent: 'Vikings', date: '11/17/2013', at: 'Home', isByeweek: '0', score: 41, opponentScore: 20}
				,{season: 2013, week: 12, opponent: '', date: '', at: 'Road', isByeweek: '1', score: 0, opponentScore: 0}

				,{season: 2013, week: 13, opponent: 'Saints', date: '12/2/2013', at: 'Home', isByeweek: '0', score: 34, opponentScore: 7}
				,{season: 2013, week: 14, opponent: '49ers', date: '12/8/2013', at: 'Road', isByeweek: '0', score: 17, opponentScore: 19}
				,{season: 2013, week: 15, opponent: 'Giants', date: '12/15/2013', at: 'Road', isByeweek: '0', score: 23, opponentScore: 0}
				,{season: 2013, week: 16, opponent: 'Cardinals', date: '12/22/2013', at: 'Home', isByeweek: '0', score: 10, opponentScore: 17}
				,{season: 2013, week: 17, opponent: 'Rams', date: '12/29/2013', at: 'Home', isByeweek: '0', score: 27, opponentScore: 9}
			];

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