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

app.controller('LandingController', function($document,$scope,$http,$interval) {
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
			} else if ($scope.currentPhoto == $scope.maxPhoto) {
				$scope.currentPhoto = 1;
			}
		} else if (direction=="left") {
			if ($scope.currentPhoto > 1) {
				$scope.currentPhoto -= 1;
			} else {
				$scope.currentPhoto = 4;
			}
		} else {
			// should never get here
		}
	}
	
	var promise;
	$scope.autoPlayOn = false;
	$scope.startAutoPlay = function() {
		$scope.stopAutoPlay();
		
		$scope.autoPlayOn = true;
		
		promise = $interval(function() {
			if ($scope.currentPhoto < 4) {
				$scope.currentPhoto += 1;
			} else {
				$scope.currentPhoto = 1;
			}
		}, 15000);
	}
	
	$scope.stopAutoPlay = function() {
		$scope.autoPlayOn = false;
		$interval.cancel(promise);
	}
	
	$scope.$on('$destroy', function() {
		$scope.stop();
	});
	
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
	$scope.isSelected = "nothing";
	
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
	
	var activeClass = "contact-bubble-active";
	var inactiveClass = "contact-bubble";
	$scope.emailBubble = inactiveClass;
	$scope.linkedinBubble = inactiveClass;
	$scope.callBubble = inactiveClass;
	$scope.formBubble = inactiveClass;
	$scope.setActiveContact = function(activeBubble) {
		if (activeBubble=='email') {
			$scope.isSelected = "email";
			$scope.emailBubble = activeClass;
			$scope.linkedinBubble = inactiveClass;
			$scope.callBubble = inactiveClass;
			$scope.formBubble = inactiveClass;
			
		} else if (activeBubble=='linkedin') {
			$scope.isSelected = "linkedin";
			$scope.emailBubble = inactiveClass;
			$scope.linkedinBubble = activeClass;
			$scope.callBubble = inactiveClass;
			$scope.formBubble = inactiveClass;
			
		} else if (activeBubble=='call') {
			$scope.isSelected = "call";
			$scope.emailBubble = inactiveClass;
			$scope.linkedinBubble = inactiveClass;
			$scope.callBubble = activeClass;
			$scope.formBubble = inactiveClass;
			
		} else if (activeBubble=='form') {
			$scope.isSelected = "form";
			$scope.emailBubble = inactiveClass;
			$scope.linkedinBubble = inactiveClass;
			$scope.callBubble = inactiveClass;
			$scope.formBubble = activeClass;
			
		} else {
			$scope.isSelected = "nothing";
		}
	}
	
})

app.controller('MaintenanceController', function($document,$scope,$http) {
	$scope.maintenanceMessage = "Controller is connected!";
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