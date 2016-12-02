angular.module('Main', ['ngMaterial'])
    .controller('SideNavBar', function($scope, $timeout, $mdSidenav) {
        $scope.name = "Raounak Sharma";
        $scope.inputedFeature = "";
        $scope.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        };

        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');

        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
            }
        }

        $scope.isOpen = false;
        $scope.count = 0;
        $scope.selectedDirection = 'left';
        /* function for map */

        /* map code end */
    });