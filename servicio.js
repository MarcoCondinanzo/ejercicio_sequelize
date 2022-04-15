const {User} = require('./database/models/index');


User.create(
    {
        name: 'Pedro',
        email: 'pedro@mail.com',
        password: '123',
        rol: 1,
        phoneNumber: '123456789',
        cretedAt: new Date(),
        updatedAt: new Date()
    })

async function getAllUsers() {
    const users = await User.findAll();
   // users.forEach(user => {
     //   console.log(user.name);
        
   // });
   return users;
}

getAllUsers().then();

// User.findAll()
//     .then((users) => {
//         users.forEach(user => {
//             console.log(user.name);
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// create a new user

async function getUserByID (id){
    const user=await User.findByPk(id);
    return user;        
    }

module.exports={ 
    getAllUsers, 
    getUserByID
    }