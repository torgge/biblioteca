angular.module('myApp', ['ngRoute'])
			.controller('PaginaPrincipalController', ['$scope', '$route', '$routeParams', function ($scope, $route, $routeParams) {
			    $scope.$route = $route;
			    $scope.$routeParams = $routeParams;
			}])
			 .controller('LivroController', ['$scope', '$routeParams', function ($scope, $routeParams) {
			     $scope.nome = "LivroController";
			     $scope.parametros = $routeParams;
			 }])
			 .controller('CapituloController', ['$scope', '$routeParams', function ($scope, $routeParams) {
			     $scope.nome = "CapituloController";
			     $scope.parametros = $routeParams;
			 }])
             .controller('MainController', ['$scope', '$routeParams', function ($scope, $routeParams) {
                 $scope.nome = "MainController";
                 $scope.parametros = $routeParams;
             }])
			.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

			    // configura hashbang prefix
			    $locationProvider.hashPrefix('!');

			    // inicio da configuracao de rotas
			    $routeProvider
                .when('/livro/:id', {
                    templateUrl: 'view/livro.html',
                    controller: 'LivroController'
                })
                  .when('/livro/:idLivro/capitulo/:idCap', {
                      templateUrl: 'view/capitulo.html',
                      controller: 'CapituloController'
                  })
                  .when('/main', {
                        templateUrl: 'view/main.html',
                        controller: 'MainController'
                    })
                  .otherwise({
                      redirectTo: '/main'
                  });
			}]);