autowatch = 1;



function note(note, velocity) {
	var pitch = note % 12;
	var octave = Math.floor(note / 12);
	//post(pitch, octave, "\n");
	
	outlet( 0, (pitch % 4) << 2, octave * 23, 255 - (pitch * 23));


}
