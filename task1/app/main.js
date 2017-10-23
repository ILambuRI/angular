angular.module("app", [])
angular.module("app").controller('Controller1', Controller1)
angular.module("app").controller('Controller2', Controller2)

function Controller1($scope) {
    $scope.name = 'Vasya'
    this.name = 'Petya'
    this.goods = []
    this.addGoods = (good) => {
        this.goods.push(good)
        $scope.searchList = ''
    }
}

function Controller2($scope) {
    $scope.name = 'Serega'
    this.name = 'LOL'
}