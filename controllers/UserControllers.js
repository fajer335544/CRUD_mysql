const User=require('../model/User');

exports.adduser=async(req,res,next)=>{
   const first=  req.params.firstName
   const last=req.params.lastName

  if(!(last &&first))
  {
   res.status(400).json({message:" you should insert lastName + firstName"})
  }
  //res.send({message:{first , last}})
    const user= await User.create({
        userFirstName:first,
        
        userLastName: last

    })
    res.send({message:user,status:true})
}
exports.getuser= async(req,res,next)=>{

    const id=req.params.id;
    await User.findOne({where:{user_id:id}}).then(data=>{
      if(!data)
      {
        res.status(400).json({message:" data not found "})
        

      }
      else
        res.send(data)
    })
}


exports.deleteUser = async(req, res, next) => {
    const id = req.params.id;
  await  User.findOne({where:{user_id:id}})
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
       res.send({data:result,message:" UPDATED SUCCESS"})
      });
    })
    .catch(err => {
        res.status(500).json({ message: 'update user failed.' });
    });


  }