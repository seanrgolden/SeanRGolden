var app=angular.module("App",['ngRoute', 'ngAnimate']);

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
	}).when("/ProjectsPage", {
		templateUrl: "partials/MaintenancePage.html",
		controller: "MaintenanceController"
	}).when("/", {
		templateUrl: "partials/LandingPage.html",
		controller: "LandingController"
	}).otherwise({
		redirectTo: "/"
	})
})
