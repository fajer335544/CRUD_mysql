const User=require('../model/User');

exports.adduser=async(req,res,next)=>{
    const user= await User.create({
        userFirstName:"fajer",
        
        userLastName: "ALHAMAD"

    })
    res.send({message:"hi"})
}
exports.getuser= async(req,res,next)=>{

    const id=req.params.id;
    await User.findOne({user_id:id}).then(data=>{
        res.send(data)
    })
}


exports.deleteUser = async(req, res, next) => {
    const id = req.params.id;
  await  User.findOne({user_id:id})
      .then(data => {
        if (!data) {
         res.send({message:"no data"})
        }
        if(data){
       console.log(data)
        return User.destroy({where:{ user_id: id} });
        }
        
      })
      .then(() => {
        console.log('DESTROYED PRODUCT');
        res.status(200).json({ message: 'Success!' });
      })
      .catch(err => {
        res.status(500).json({ message: 'Deleting user failed.' });
      });
  };
  exports.updateuser =async(req,res,next)=>{

    const id = req.params.id;
    await  User.findOne({where:{user_id:id}})
    .then(user => {
      
      user.userFirstName = req.body.userFirstName;
      user.userLastName = req.body.userLastName;
    
    
      return user.save().then(result => {
        console.log('UPDATED PRODUCT!');
       res.send({message:" UPDATED SUCCESS"})
      });
    })
    .catch(err => {
        res.status(500).json({ message: 'update user failed.' });
    });


  }