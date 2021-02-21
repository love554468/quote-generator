var qoutes = ['a','b','c']

function newQuote()
{
	var randomNum = Math.floor(Math.random()*(qoutes.length));
	document.getElementById('quoteDisplay').innerHTML = qoutes[randomNum];
}