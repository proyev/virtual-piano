document.addEventListener('keydown', function(event){
	const possibleKeys = ['KeyA', 'KeyS', 'KeyD', 'KeyF',
				'KeyG', 'KeyH', 'KeyJ'];
	let path = 'src/audio/';
	if (possibleKeys.includes(event.code)){
		console.log(`The '${event.key.toUpperCase()}' was pressed`);
		path += event.key.toUpperCase() + '.mp3';
		let audio = new Audio(path);
		audio.play();
	}else{
		console.log(`Unknown key pressed`);}
});
