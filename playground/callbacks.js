var getUser = (id, callback)=> {
  var user = {
    id:id,
    name:'tagore'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};


getUser(31, (userObject) => {

  console.log(userObject);
});
