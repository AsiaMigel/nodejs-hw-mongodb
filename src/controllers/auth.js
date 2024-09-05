import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUserSession,
  // requestResetToken
} from '../services/auth.js';

//Реєстрація 
export async function registerUserController(req, res) {
    const payload = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };

    const registeredUser = await registerUser(payload);
    res.send({
      status: 201,
      message: 'Successfully registered a user!',
      data: registeredUser,
    });

    //login
    
}