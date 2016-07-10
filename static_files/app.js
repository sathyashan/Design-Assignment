var app = angular.module("app", []);

app.controller("revenueCtrl", function ($scope) {
    $scope.revenueData = [{ name: "facebook.com", revenue: 6090 }, { name: "Quora.com", revenue: 3045 }, { name: "twitter.com", revenue: 2284 }, { name: "email", revenue: 1675 }, { name: "organic", revenue: 1370 }, { name: "Direct", revenue: 1370 }];
});


app.directive("distributionChart", ['$timeout', function ($timeout) {
    return {
        restrict: "E",
        controller: function ($scope) {
            $scope.chartData = [{ deviceName: "Mobile", share: 49 }, { deviceName: "IPad", share: 35 }, { deviceName: "Desktop", share: 16 }];
        },
        templateUrl: "chart-template.html",
        link: function (scope, element) {
            //chartLabels - stores list of labels
            var chartLabels = [], chartData = [];
            for (var i = 0; i < scope.chartData.length; i++) {
                chartLabels.push(scope.chartData[i].deviceName);
                chartData.push(scope.chartData[i].share);
            }
            //timeout is used here inorder to do DOM manipulation
            $timeout(function () {
                $timeout(function () {
                    var chartCanvas = document.getElementById("distributionChart").getContext("2d");
                    //drawing a chart with help of chartjs
                    var myChart = new Chart(chartCanvas, {
                        type: "doughnut",
                        data: {
                            labels: chartLabels,
                            datasets: [
                                {
                                    data: chartData,
                                    backgroundColor: [
                                        "#FFCC80",
                                        "#81C784",
                                        "#FF8A65"
                                    ]
                                }
                            ]
                        }
                        
                    });
                }, 0)
            }, 0)


        }
    };
}]);

app.controller("productsCtrl", function($scope){
    //product details
    $scope.products = [{
        productName: "Twisted Boots",
        imgSrc: "images/boot.jpg",
        views: 10989,
        purchases: 8908,
        conversionRate: 3.5,
        revenue: 54274,
        recentStat: {
            views: 154,
            days: 2
        }
    },
    {
        productName: "Twisted Boots",
        imgSrc: "images/boot.jpg",
        views: 10989,
        purchases: 8908,
        conversionRate: 3.5,
        revenue: 54274,
        recentStat: {
            views: 154,
            days: 2
        }
    },
    {
        productName: "Twisted Boots",
        imgSrc: "images/boot.jpg",
        views: 10989,
        purchases: 8908,
        conversionRate: 3.5,
        revenue: 54274,
        recentStat: {
            views: 154,
            days: 2
        }
    },
    {
        productName: "Twisted Boots",
        imgSrc: "images/boot.jpg",
        views: 10989,
        purchases: 8908,
        conversionRate: 3.5,
        revenue: 54274,
        recentStat: {
            views: 154,
            days: 2
        }
    }];
});