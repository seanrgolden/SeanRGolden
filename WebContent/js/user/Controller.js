app.controller('FaceBookTestController', function($scope,$http) {
	$scope.testMessage = "Controller is connected!";
})

app.controller('ResumeController', function($scope,$http) {
	$scope.testMessage = "Controller is connected!";
	$scope.navSelected = false;
	
	$scope.navClicked = function() {
		if ($scope.navSelected==true) {
			$(document).find('.dottedNavObj1').css({'transform': 'none'});
			$(document).find('.dottedNavObj2').css({'transform': 'none'});
			$(document).find('.dottedNavObj3').css({'transform': 'none'});
			$(document).find('.dottedNavObj4').css({'transform': 'none'});
			$scope.navSelected=false;
		} else {
			$(document).find('.dottedNavObj1').css({'transform': 'translate(-30px,100px)'});
			$(document).find('.dottedNavObj2').css({'transform': 'translate(40px,90px)'});
			$(document).find('.dottedNavObj3').css({'transform': 'translate(90px,40px)'});
			$(document).find('.dottedNavObj4').css({'transform': 'translate(100px,-30px)'});
			$scope.navSelected=true;
		}
	};
})

app.controller('LandingController', function($document,$scope,$http) {
	$scope.landingMessage = "Controller is connected!";
	$scope.navSelected = false;
	
	$scope.navClicked = function() {
		if ($scope.navSelected==true) {
			$(document).find('.dottedNavObj1').css({'transform': 'none'});
			$(document).find('.dottedNavObj2').css({'transform': 'none'});
			$(document).find('.dottedNavObj3').css({'transform': 'none'});
			$(document).find('.dottedNavObj4').css({'transform': 'none'});
			$scope.navSelected=false;
		} else {
			$(document).find('.dottedNavObj1').css({'transform': 'translate(-30px,100px)'});
			$(document).find('.dottedNavObj2').css({'transform': 'translate(40px,90px)'});
			$(document).find('.dottedNavObj3').css({'transform': 'translate(90px,40px)'});
			$(document).find('.dottedNavObj4').css({'transform': 'translate(100px,-30px)'});
			$scope.navSelected=true;
		}
	};

})

app.controller('ContactMeController', function($document,$scope,$http) {
	$scope.contactMessage = "Controller is connected!";
	$scope.navSelected = false;
	
	$scope.navClicked = function() {
		if ($scope.navSelected==true) {
			$(document).find('.dottedNavObj1').css({'transform': 'none'});
			$(document).find('.dottedNavObj2').css({'transform': 'none'});
			$(document).find('.dottedNavObj3').css({'transform': 'none'});
			$(document).find('.dottedNavObj4').css({'transform': 'none'});
			$scope.navSelected=false;
		} else {
			$(document).find('.dottedNavObj1').css({'transform': 'translate(-30px,100px)'});
			$(document).find('.dottedNavObj2').css({'transform': 'translate(40px,90px)'});
			$(document).find('.dottedNavObj3').css({'transform': 'translate(90px,40px)'});
			$(document).find('.dottedNavObj4').css({'transform': 'translate(100px,-30px)'});
			$scope.navSelected=true;
		}
	};

})