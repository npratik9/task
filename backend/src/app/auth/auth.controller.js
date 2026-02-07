const bcrypt= require('bcryptjs')
const jwt = require('jsonwebtoken');


const users = [];

class AuthController {
    registerUser= async(req, res, next) =>{
        try{
        const {email, password, confirmPassword} = req.body;
        if(password !== confirmPassword){
            return res.json({
                message:"Password and confirm password should be same"
            })
        }

        const exists= users.find(user=> user.email === email)
        if(exists){
            return res.status(422).json({
                message:"email already exist",
                status:"Validation_ERR"
            })
        }

        const hashedpwd = await bcrypt.hash(password, 12);

        users.push({email, password: hashedpwd})

        res.status(200).json({
            data: null,
            message: "User registered successful",
            status:"USER_REGISTERED"
        })
        }catch(exception){
            return res.status(500).json({
                message:"Internal server error",
                status:"SERVER_ERR"
            })
        }
        

    };

    loginUser=async (req, res, next)=>{
        try{
        const {email, password} = req.body;
        const exists = users.find(user=> user.email === email)
        if(!exists){
            return res.json({
                message:"User not registered"
            })
        }
        
        const matchPwd = await bcrypt.compare(password, exists.password)
        if(!matchPwd){
            return res.json({
                message:"Invalid Credentials"
            })
        }

        const accessToken = jwt.sign(
          { sub: exists.email },
          process.env.JWT_SECRET,
          {
            expiresIn: "10m",
          },
        );

        res.json({
            data: accessToken,
            message:"login Successful"
        })
    }catch(exception){
        console.log(exception)
        return res.status(500).json({
             message:"Server Error",
        })
    }



    };

    loggedInUser=(req, res, next)=>{
        res.status(200).json({
            message:"WELCOME TO DASHBOARD"
        })

    };

}

const authCtrl= new AuthController();
module.exports= authCtrl;