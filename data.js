(function(){

	var datepicker = {};

	datepicker.getMothData = function(year, month) {
		var ret = [];
		if (!year || !month) {
			var today = Date();
			year = today.getFullYear();
			month = today.getMonth() + 1;
		}

		var firstDay = new Date(year, month - 1, 1);
		var firstDayWeekDay = firstDay.getDay();
		if (firstDayWeekDay === 0) {
			firstDayWeekDay = 7;
		}

		var lastDayOfLastMonth = new Date(year, month-1, 0);
		var lastDateOfLastMonth = lastDayOfLastMonth.getDate();

		var preMonthDayCount = firstDayWeekDay - 1;

		var lastDay = new Date(year, month, 0);
		var lastDate = lastDay.getDate();

		for (var i = 0; i < 7*6; i++) {
			var date = i + 1 - preMonthDayCount;
			var showDate = date;
			var thisMonth = month;  	
	  } 
	}

	window.datepicker = datepicker;
})()