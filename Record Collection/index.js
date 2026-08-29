const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords(records, id, prop, value) {

  // 1 If value is an empty string - delete the property
  if (value === "") {
    delete records[id][prop];
  }

  // 2 If prop is NOT "tracks" and value is NOT empty - set the property
  else if (prop !== "tracks") {
    records[id][prop] = value;
  }

  // 3 If prop IS "tracks" and value is NOT empty
  else {
    // If the album doesn't have a tracks property - create an empty array
    if (!records[id].hasOwnProperty("tracks")) {
      records[id].tracks = [];
    }

    // Add the value to the end of the tracks array
    records[id].tracks.push(value);
  }

  // Always return the entire records object
  return records;
}