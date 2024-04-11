const app = angular.module("appHTML", []);

app.controller("FormController", function ($scope){
    $scope.name = "Phan Văn Tính";
    console.log($scope.name);
})

app.controller("ListController", ListController);

function ListController($scope, $http){
    $http.get("/api/products").then(function (response){
        console.log(response.data.data);
        $scope.listData = response.data.data;
    })
}