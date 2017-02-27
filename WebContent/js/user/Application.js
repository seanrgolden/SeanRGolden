var app=angular.module("App",['ngRoute']);

var URI = getURI();

app.config(function($routeProvider) {
	$routeProvider.when("/FaceBookTest", {
		templateUrl: "partials/FaceBookTest.html",
		controller: "FaceBookTestController"
	}).when("/ResumePage", {
		templateUrl: "partials/ResumePage.html",
		controller: "ResumeController"
	}).when("/ContactMePage", {
		templateUrl: "partials/ContactMePage.html",
		controller: "ContactMeController"
	}).when("/", {
		templateUrl: "partials/LandingPage.html",
		controller: "LandingController"
	}).otherwise({
		redirectTo: "/"
	})
})
