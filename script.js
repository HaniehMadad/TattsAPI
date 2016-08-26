"use strict";

(function() {

    var app = angular.module("app", []);

    var greyhoundMeetingsController = function($http) {
        var vm = this;
        var today = new Date();
        vm.title = "Date: " + today.toDateString();
        vm.meetings = [];
        vm.meetingName = "G"; //Greyhound
        vm.vanueList = [
            //SA venueu
            "Ipswich",
            "Angle Park",
            "Gawler",
            "Mount Gambier",
            "Port Augusta",
            "Strathalbyn"
        ];
        var url = "https://api.ubet.com/sales/vmax/web/data/racing/" + today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();

        $http.get(url).success(function(data) {
            var meetings = data.RaceDay.Meetings;
            vm.meetings = meetings;
        });

        var onError = function(reason) {
            vm.error = "Could not fetch the data";
        };
    };

    app.controller("GreyhoundMeetings", ["$http", greyhoundMeetingsController]);
}());