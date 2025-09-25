const { response } = require('./app');
const User = require('./model');

const getUsers= (req, res, next) => {
    User.find()
    .then(response =>{
        res.json({response})
    })
    .catch(error =>{
        res.jason({error})
    })
};

const addUser = (req, res, next) =>{
    const user = new User({
        id: req.body.id,
        name: req.body.name,
    });
    user.save()
        .then(response =>{
            res.json({response})
        })
        .catch(error =>{
            res.jason({error})
        });
}

const updateUser = async (req, res) => {
    try {
        const { id, name } = req.body;

        const result = await User.updateOne(
            { id: id },               // match your custom id field
            { $set: { name: name } }  // update name
        );

        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User updated successfully', result });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.body;

        const result = await User.deleteOne({ id: id });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User deleted successfully', result });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;