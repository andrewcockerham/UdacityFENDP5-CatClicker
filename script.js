var image = document.getElementById('catImage');
var name = document.getElementById('catName');
var clicks = document.getElementById('numClicks');

var namesArray = ['Cat 1','Cat 2', 'Cat 3', 'Cat 4', 'Cat 5']
var clicksArray = [0,0,0,0,0]


image.addEventListener('click', function(){
	var clicksCount = document.getElementById('numClicks').innerHTML;
	document.getElementById('numClicks').innerHTML = parseInt(clicksCount) + 1
	name.innerHTML = "Cat 2"
}, false);


var nums = [1,2,3,4,5];

for (var i = 0; i < nums.length; i++) {

    // This is the number we're on...
    var num = nums[i];
    var elem = document.getElementById('catLink' + nums[i]);
    // ... and when we click, alert the value of `num`
    // IFFE
    elem.addEventListener('click', (function(numCopy) {
        return function() {
            image.src = "cat" + numCopy + ".jpg"
        };
    })(num));
};





// $('#catImage').click(function(e) {
// 	// var clicksCount = $('#numClicks').text();
// 	$('#numClicks').text(parseInt($('#numClicks').text()) + 1);
// });