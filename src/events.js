document.addEventListener('keydown', function(event){
	const possibleKeys = ['KeyA', 'KeyS', 'KeyD', 'KeyF',
				'KeyG', 'KeyH', 'KeyJ'];
	if (possibleKeys.includes(event.code)){
		console.log(`The '${event.key.toUpperCase()}' was pressed`);
	}else{
		console.log(`Unknown key pressed`);}
});
