// JavaScript Document
console.log('Javascript is running');
let title = document.querySelector('title');
let petals = document.querySelectorAll('.petal');
let websites = document.querySelectorAll('input');
const loveme_websites = ['love1.html', 'love2.html'];
const lovemenot_websites = ['lovenot1.html', 'lovenot2.html', 'lovenot3.html'];
console.log(websites);

for (let website of websites) {
	website.addEventListener('click', function() {
		console.log('button clicked');
		timeOut(website);
	})
}

var counter = 1;
var counter_love = 0;
var counter_notlove = 0;

function timeOut(website_entry) {
	let randomtime = Math.floor(Math.random() * (10000-5000+1) + 5000);
	var popupwin = '';
	if (counter !== 21) {
		if (counter%2 === 1) {
			if (counter_love != loveme_websites.length) {
				popupwin = window.open(loveme_websites[counter_love], 'popup', 'width=500,height=500');
				setTimeout(function() { popupwin.close();}, randomtime);
				counter += 1;
				counter_love += 1;
			}
			else {
				counter_love = 0;
			}
		}
		else {
			if (counter_notlove != lovemenot_websites.length) {
				popupwin = window.open(lovemenot_websites[counter_notlove],'popup','width=200,height=200');
				setTimeout(function() { popupwin.close();}, randomtime);
				counter += 1;
				counter_notlove += 1;
			}
			else {
				counter_notlove = 0;
			}
		}
		website_entry.style.visibility = "hidden";
		website_entry.disabled = "true";
		return popupwin;
	}
	else {
		website_entry.style.visibility = "hidden";
		website_entry.disabled = "true";
		title.textContent = "They Love Me Not.";
	}
}