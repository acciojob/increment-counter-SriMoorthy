//your JS code here. If required.
let cnt = 0
let count = document.getElementById('counter')
count.innerHTML = cnt;
let btn = document.getElementById('incrementBtn')

function Increment() {
	alert(cnt)
	cnt++;
	count.innerHTML = cnt;
	alert(cnt);
}

