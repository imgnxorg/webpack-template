const MidiWriter = require("midi-writer-js");

// Create a new track
let track = new MidiWriter.Track();

// Add wobble bass notes
track.addEvent([
    new MidiWriter.NoteEvent({ pitch: ["C2"], duration: "1" }),
    new MidiWriter.NoteEvent({ pitch: ["D#2"], duration: "1" }),
    new MidiWriter.NoteEvent({ pitch: ["F2"], duration: "1" }),
]);

// Write to a MIDI file
const writer = new MidiWriter.Writer(track);
require("fs").writeFileSync("dubstep.mid", writer.buildFile());
