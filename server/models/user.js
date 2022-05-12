const users = [
    {
    userId: 12345,
    userName: "cathy123"
    },
    {
    userId: 55555,
    userName: "fredburger54"
    }
   ];
   let getUsers = () => users;
   function login(username, password) 
   {
    const user = await userExists(username);
    if(!user[0]) throw Error('User not found')
    if(user[0].user_password !== password) throw Error("Password is incorrect");
  
    return user[0];
  }
   module.exports = { getUsers };