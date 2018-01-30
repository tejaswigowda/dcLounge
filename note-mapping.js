autowatch = 1;



function note(note, velocity) {
	var pitch = note % 12;
	var octave = Math.floor(note / 12);
	post(pitch, octave, note, velocity,"\n");
	
	outlet( 0, (note*octave % 4) << 2, velocity * 23, 255 - (pitch * 23));


}
