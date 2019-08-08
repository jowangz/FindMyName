import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync'

// set up db
const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ count:0, currentTask:"", availableNames: [], unavailableNames: [], nameList: []}).write();

export default db;