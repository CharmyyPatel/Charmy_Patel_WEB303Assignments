/*
	WEB 303 Assignment 1 - jQuery
	{Charmy Sanjivbhai Patel-0775861}
*/
$(document).ready(function() {
	$('#percent').change(function() {
	const salaryAmt = $('#yearly-salary');
	const percentage = $('#percent');
	const total = salaryAmt.val() * percentage.val() / 100;
	$('#amount').empty();
	const ans = total.toFixed(2);
 	$('#amount').append("$" + ans);
	});
});
