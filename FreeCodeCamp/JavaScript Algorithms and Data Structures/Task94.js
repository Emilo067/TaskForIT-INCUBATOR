// Setup
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

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if(value == "") {
        //delete records[prop];
        return records;
    } else {
        records[id][prop] = value;
        return records;
    }
}

//console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
//console.log(updateRecords(recordCollection, 2548, "artist", ""));
//console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
//console.log(updateRecords(recordCollection, 2468, "tracks", "Free"),);
//console.log(updateRecords(recordCollection, 2548, "tracks", ""));
//console.log( updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));