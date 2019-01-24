(function (app)
{
    'use strict';

    StoreMapController.$inject = ['menuService', '$scope', 'dialogService'];

    function StoreMapController(menuService, $scope, dialogService)
    {
        var self = this;

        self.items = [];

        self.$onInit = function ()
        {
            
        }
    }

    
    app.component('storeMap', {
        templateUrl: function ()
        {
            return 'scripts/app/storeMap/storeMap.html?v=' + main.version();
        },
        controller: StoreMapController,
        bindings:
        {
            parameters: "<",
            closeDialog: "&",
        }
    });

})(angular.module("CALTEX"));
