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
	$scope.isHoveringPhoto = false;
	$scope.currentPhoto = 1;
	$scope.maxPhoto = 4;
	
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
	
	$scope.hoverOverPhoto = function() {
		$scope.isHoveringPhoto = true;
	};
	
	$scope.hoverOutPhoto = function() {
		$scope.isHoveringPhoto = false;
	};
	
	$scope.nextPhoto = function(direction) {
		if (direction=="right") {
			if ($scope.currentPhoto < $scope.maxPhoto) {
				$scope.currentPhoto += 1;
				$scope.clickedMessage = "Clicked right";
			} else if ($scope.currentPhoto == $scope.maxPhoto) {
				$scope.currentPhoto = 1;
				$scope.clickedMessage = "Clicked right - but already at last photo - moving to first"
			}
		} else if (direction=="left") {
			if ($scope.currentPhoto > 1) {
				$scope.currentPhoto -= 1;
				$scope.clickedMessage = "Clicked left";
			} else {
				$scope.currentPhoto = 4;
				$scope.clickedMessage = "Clicked left - but already at first photo - moving to last"
			}
		} else {
			// should never get here
		}
	}
	
	$scope.setPhoto = function(photoNum) {
		if ((photoNum <= $scope.maxPhoto) && (photoNum > 0)) {
			$scope.currentPhoto = photoNum;
		} else {
			// do nothing
		}
	}

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