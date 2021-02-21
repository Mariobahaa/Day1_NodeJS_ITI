const { createUser, displayUser, deleteUser } = require('./Task1lib.js');
const ulib = require('./Task1lib.js');

switch(process.argv[2])
{
    case 'create':
        createUser(process.argv[3],process.argv[4],process.argv[5]);
    break;
    case 'update':
        updateUser(process.argv[3],process.argv[4],process.argv[5]);
    break;
    case 'delete':
        deleteUser(process.argv[3]);
    break;
    case 'display':
        displayUser(process.argv[3]);
    break;
}
//console.log(ls);