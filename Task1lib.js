//crud create update delete 
const fs = require('fs');


function load(usersList){

    try{
       usersList = fs.readFileSync('users.txt',{encoding: 'utf8'});
       return usersList = JSON.parse(usersList);
    }
    catch(err){
        console.log(err.message);
    }
    return usersList;
}

function save(usersList){
    if(usersList!= undefined && usersList != [] && usersList != null)
    fs.writeFileSync('users.txt',JSON.stringify(usersList));
}

function createUser(name, age , phone){
    
    let usersList = [];
    usersList = load(usersList);
    //console.log(usersList);
    let newUser = {
        name, age, phone
    };
  
    //fs.appendFileSync('users.txt',JSON.stringify(newUser));
    usersList.push(newUser);
    save(usersList);
}

function displayUsers(name){
    let usersList = [];
    usersList = load(usersList);
    if(arguments.length > 0){
        for(u of usersList){
            if(u.name == name) console.log(u);
        }
    }
    else {
        for(u of usersList){
            console.log(u);
        }
    }
}


module.exports ={
    createUser: createUser,
    displayUsers: displayUsers
};