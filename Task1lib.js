//crud create update delete 
const fs = require('fs');

/*
function load(usersList){

    try{
       usersList = fs.readFileSync('users.txt',{encoding: 'utf8'});
       return usersList = JSON.parse(usersList);
    }
    catch(err){
        console.log(err.message);
    }
    return usersList;
}*/

function save(usersList){
    if(usersList!= undefined && usersList != [] && usersList != null)
    fs.writeFile('users.txt',JSON.stringify(usersList),()=> {
        console.log('written successfully');
    });

    //fs.writeFileSync('users.txt',JSON.stringify(usersList));
}

function createUser(name, age , phone){
    
    fs.readFile('users.txt',{encoding: 'utf8'},(err,data)=>{
        if(err ==undefined || err== null){
            usersList = JSON.parse(data);
            

        }
        else{
            usersList = [];
            console.log(err.message);
        }

        let newUser = {
            name, age, phone
        };
      
        //fs.appendFileSync('users.txt',JSON.stringify(newUser));
        usersList.push(newUser);
        save(usersList);
        });
    
}

function displayUser(name){
    let usersList = [];
    //usersList = load(usersList);
    fs.readFile('users.txt',{encoding: 'utf8'},(err,data)=>{
    if(err ==undefined || err== null){
        usersList = JSON.parse(data);
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
    else{
        usersList = [];
        console.log(err.message);
    }
    });
    
}

function updateUser(name,age,phone){
    let usersList = [];
    //usersList = load(usersList);
    fs.readFile('users.txt',{encoding: 'utf8'},(err,data)=>{
    if(err ==undefined || err== null){
        usersList = JSON.parse(data);
        if(arguments.length > 0){
            for(u of usersList){
                    if(u.name == name){
                        u.age = age;
                        u.phone = phone;
                    }
            }
            save(usersList);
        }
        else {
            return;
        }
    }
    else{
        usersList = [];
        console.log(err.message);
    }
    });
    
}

function deleteUser(name){
    let usersList = [];
    let users = [];
    //usersList = load(usersList);
    fs.readFile('users.txt',{encoding: 'utf8'},(err,data)=>{
    if(err ==undefined || err== null){
        usersList = JSON.parse(data);
        if(arguments.length > 0){
            for(u of usersList){
                    if(u.name != name){
                        users.push(u);
                    }
            }
            save(users);
        }
        else {
            return;
        }
    }
    else{
        usersList = [];
        console.log(err.message);
    }
    });
    
}

module.exports ={
    createUser: createUser,
    displayUser: displayUser,
    updateUser: updateUser,
    deleteUser: deleteUser
};