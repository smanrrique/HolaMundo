var app = angular.module("appModule", []);

app.factory("tiendaFactory", function($timeout) {
    return {
        mandado: function(_callback) {
            console.log("me llamaron");
            $timeout(() => {
                _callback([{nombre: "sebas", id: 4}, {nombre: "byran", id: 2}]);
            }, 2000);
        }
    };
});

app.controller("principalCtrl", function($scope, tiendaFactory) {

    var mundo = "Sebastian";
    $scope.hola = "Hola Mundo !!";

    $scope.imprimir = function() {
        console.log($scope.hola);
        tiendaFactory.mandado(function(_result) {
            $scope.lista = _result;
        });
    };

});

app.controller("secondaryCtrl", function($scope) {
    console.log("Hola mundo 2");
});
