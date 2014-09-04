'use strict';


// Declare app level module which depends on filters, and services
//var app = angular.module('ShuffleModule', []);
var app = angular.module('ShuffleModule', []);




app.controller('ShuffleController', function($scope) {
$scope.shuffle = function(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

    var items =  [
      {name: "MRE", type: "Health", bonus: "+1", image: "http://www.thrivelife.com/media/catalog/product/cache/1/image/5e06319eda06f020e43594a9c230972d/1/2/12pk-mre-star.png"},
      { name: "Dried Meats", type: "Health", bonus: "+2", image: "http://thegrillinguys.com/wp-content/uploads/2012/01/5202beef_jerky.jpg"},
      { name: "Twinkie Bar", type: "Health", bonus: "+3", image:"http://images.politico.com/global/2012/11/121116_2_twinkie_ap_328.jpg"},
      { name: "Cross Bow", type: "Ranged Weapon", bonus: "+0", strength: "+1", image: "http://www.bestcrossbowsource.com/wp-content/uploads/2013/07/Barnett-Wildcat-C5-Review-Crossbow.jpg"},
      { name: "Wine Bottle", type: "Health", bonus: "+1", image:"http://tipsyknitter.com/wp-content/uploads/images/2009CharvinCdP750x608.jpg"},
      { name: "Small First Aid Kit", type: "Health", bonus:"1/2", image: "http://www.adventuremalta.com/filebank/products/Lifesystems/Trek-First-Aid-L1.jpg"},
      { name: "Shotgun Shells", type: "Ammunition", bonus:"+2", image: "http://trenchreynolds.me/wp-content/uploads/shotgunshells.jpg"},
      { name: "9mm Shells", type: "Ammunition", bonus: "+0", image:"http://simage1.sportsmansguide.com/adimgs/l/1/186220i_ts.jpg"},
      { name: ".45 Longcolt", type: "Ammunition", bonus:"+1", image: "http://media.midwayusa.com/productimages/880x660/Primary/590/590827.jpg"},
      { name: "BBs", type: "Ammunition", bonus: "-2", image:"http://i.walmartimages.com/i/p/00/72/33/64/30/0072336430508_500X500.jpg"},
      {name: "9mm Handgun", type: "Ranged Weapon", bonus:"+0", stength: "+1", image:"http://media.liveauctiongroup.net/i/17330/17011003_1.jpg?v=8D0625EF93ECBD0"},
      {name: ".45 Revolver", type: "Ranged Weapon", bonus:"+0", stength: "+2", image:"http://www.thefirearmblog.com/blog/wp-content/uploads/2010/06/tmp_dropzone_4387148913_1719cb_80b_2-tfb.jpg"},
      {name: "Shotgun", type: "Ranged Weapon", bonus:"+1", stength: "+1", image: "http://img4.wikia.nocookie.net/__cb20110211034012/fallout/images/1/1d/COMBATSHOTGUN.png"}
        ];
    $scope.previous = [];
    $scope.itemList = function() { $scope.array = $scope.shuffle(items).slice(0, 1);
                                 $scope.previous.push($scope.array[0]);
                                 };



    $scope.itemList();

});