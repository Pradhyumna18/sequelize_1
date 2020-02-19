var express = require('express');
var router = express.Router();
const {createUser,
    updateUser,
    getUserDetails,
    getUsers,
    deleteUser,softDeleteUser,getProjectUsers}=require ("./users");
/* GET home page. */
router.put('/update/user/:userId', updateUser);
router.get('/project/user/:userId',getProjectUsers)
router.delete('/softdelete/user/:userId',softDeleteUser);
router.get('/nondeleted/user', getUsers);
router.post('/create/user', createUser);
router.delete('/delete/user/:userId',deleteUser);
router.get('/role/user/:userId',getUserDetails);
module.exports = router;