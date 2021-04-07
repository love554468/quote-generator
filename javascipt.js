
//quote
var qoutes = []

function newQuote()
{
	var randomNum = Math.floor(Math.random()*(qoutes.length));
	document.getElementById('quoteDisplay').innerHTML = qoutes[randomNum];
}

// một là auto random
// hai là trích suất nội dung từ file txt, đưa các nội dung thành 1 list

