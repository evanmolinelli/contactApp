var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

var refresh = function() {
	$http.get('/contactlist').then(function(response){
		console.log("Got the data I requested.");
		$scope.contactlist = response.data;
		$scope.contact = null;
	});
};

refresh();

$scope.addContact = function(){
	console.log($scope.contact);
	$http.post('/contactlist', $scope.contact).then(function(response){
		console.log(response);
		refresh();
	});
};

$scope.remove = function(id){
	$http.delete('/contactlist/'+ id).then(function(response){
		refresh();
	});
};
//  person1= {;
//         name: 'Colin',
//         email: 'colin@cunt.com',
//         number:'(571) 426-1433'
//     };

//     person2 = {
//         name:'Navid',
//         email:'navid@jew.com',
//         number: '(777) 777-7777'
//     };

//     person3={
//         name: 'Clint',
//         email:'clint@guy.com',
//         number: '(684) 426-1232'
//     };

// var contactlist = [person1, person2, person3];

// $scope.contactlist = contactlist;


}]);