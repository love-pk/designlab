angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.mySlides = [
    'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
  ];
})

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.mySlides = [
    'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
  ];
})

.controller('DesignLabCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("designlab");
  $scope.menutitle = NavigationService.makeactive("Design Lab");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})


.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
  $.fancybox.close(true);
})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

  $scope.changeLanguage = function() {
    console.log("Language CLicked");

    if (!$.jStorage.get("language")) {
      $translate.use("hi");
      $.jStorage.set("language", "hi");
    } else {
      if ($.jStorage.get("language") == "en") {
        $translate.use("hi");
        $.jStorage.set("language", "hi");
      } else {
        $translate.use("en");
        $.jStorage.set("language", "en");
      }
    }
    //  $rootScope.$apply();
  };


})

;
