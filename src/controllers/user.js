function getAllUsers(req,res) {
    res.send([
        {name:'Abc',age:20},
        {name: 'Def',age:25}
    ]);
}

function getUserById(req,res){
    const userId=req.params.userId
    console.log("userID: ",userId);
    res.send
    (
        {userId}
        );
}


//v1/getUserByNameAndAge?name="Name"&age=20
function getUserByNameAndAge(req,res){
    const {name,age }=req.query;
    console.log("Name: ", name);
    console.log("Age: ", age);
    res.send({
        name,age
    })

}
function createUser(req,res){
    const {username,password,age}=req.body;
    res.send({
        username,
        password,
        age
    })
}

function createManyUsers(req, res) {
    const users = req.body; // users là một mảng chứa thông tin của từng người dùng
  
    const createManyUsers = users.map(user => {
      const { ID,username, password, age } = user;
      return ({
        ID,
        username,
        password,
        age,
      });
    });
  
    res.send(createManyUsers);
  }
module.exports={
    getAllUsers,
    getUserById,
    getUserByNameAndAge,
    createUser,
    createManyUsers,
}