
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'
import { signUpModel } from "../signup/signup-model";
import * as config from '../../envirements/index'




/**
 * adds user in User Table.
 * @param req
 * @param res
 * @returns
 */
export const login = async function (req: any, res: any) {
  req.body.email = (req.body.email).toLowerCase();
  try {
    const { email,  password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await signUpModel.findOne({
      $or: [{
        "email": email
      }, {
        "cellPhone": email
      }]
    });
    console.log(user,'userv')

    if (user && (await bcrypt.compare(password, user.password as string))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY || config.TOKEN_KEY,
        {
          expiresIn: "24h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    } else {
    res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }

 
}




