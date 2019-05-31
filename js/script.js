var pokemon= angular.module("pokemon",[])

pokemon.controller("pokedexCtrl", function ($scope,$rootScope,$http){
	$scope.pokedex = [];

	for(var i = 0; i < 100; i++){

		$http({
			method: "GET",
			url: "https://pokeapi.co/api/v2/pokemon/25/"+i

		}).then(function callbackSucess(y){
		$scope.pokedex.push(y);
		})
	}
})