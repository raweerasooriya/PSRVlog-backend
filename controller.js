const users = [
  {  
    id: 1,
    name:'Rashaan',
  },
  {
    id: 2,
    name:'RA',
  },
];

const getUsers= (cb) => {
    cb(users);
};

const getUsersBYId = (id, cb) => {
    const user = users.find(user => user.id == id);
    cb(user);
};

exports.getUsers = getUsers;
exports.getUsersBYId = getUsersBYId;