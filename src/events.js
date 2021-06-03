document.addEventListener('keydown', function (){
   const possibleKeys = ['KeyA', 'KeyW',
                        'KeyS', 'KeyE', 'KeyD',
                        'KeyF', 'KeyT',
                        'KeyG', 'KeyY',
                        'KeyH', 'KeyU','KeyJ'];
   let path = 'src/audio/';
   if (possibleKeys.includes(event.code)){
       console.log(`The '${possibleKeys[possibleKeys.indexOf(event.code)].slice(3)}' key is pressed.`);
       path += event.key.toUpperCase() + '.mp3';
       console.log(path);
       let audio = new Audio(path);
       audio.play();

   }else{
       console.log('Unknown key was pressed');
   }
});
