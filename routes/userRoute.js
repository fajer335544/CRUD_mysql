const UserController=require('../controllers/UserControllers');
const express = require('express');
const router = express.Router();



router.post('/add/:firstName/:lastName',UserController.adduser);

router.get('/get/:id',UserController.getuser)
router.put('/update/:id',UserController.updateuser)

router.put('/delete/:id',UserController.deleteUser)




module.exports = router;