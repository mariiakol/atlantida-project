const selector = document.querySelectorAll('.post')
console.log(selector);
for (let i = 0; i < selector.length; i++){
	selector[i].classList.add('magictime', 'vanishIn');
}

