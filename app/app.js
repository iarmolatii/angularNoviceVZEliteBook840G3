(function(){
    "use strict";
    angular.module("app",[])
    .controller("Todo",Todo)
    .factory("todoService",todoService)
    .value("model",{
        user:"Andrii",
        userPhoto:"https://s-media-cache-ak0.pinimg.com/736x/f7/c2/9f/f7c29f2b06f5eaef2b34aee656115b2b--lion-vector-porcelain-pens.jpg",
        items: [
            {"action":"Create ...","done":false},
            {"action":"Udate ...","done":false},
            {"action":"Delete ...","done":false},
            {"action":"Add ...","done":true},
            {"action":"Remove ...","done":false},
            {"action":"Merge ... ","done":false},
            {"action":"Comment ...","done":false},
            {"action":"Format ...","done":true},
            {"action":"Concat ...","done":false},
            {"action":"Improve ...","done":false}
        ]
    });

    function Todo($scope,model,todoService) {
        $scope.todo = model;
        $scope.incompleteCount = todoService.incompleteCount;
        $scope.warningLevel = todoService.warningLevel;
    }

    function todoService() {
        return {
            incompleteCount,
            warningLevel
        };

        function incompleteCount(items) {
            let count = 0;
            angular.forEach(items, (item) => {
                if (!item.done) {count++;}
            });

            return count;
        };

        function warningLevel(items) {
            return incompleteCount(items) < 3 ? "label-success" : "label-warning";
        };
    }
})();
