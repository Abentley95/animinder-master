import express from 'express';
import User from '../models/User';
import parseErrors from '../utils/parseErrors';
import { sendConfirmationEmail } from '../mailer';

const router = express.Router(); 

router.post("/", (req, res) => {
    const { email, password } = req.body.user;
    const user = new User({ email });
    user.setPassword(password);
    user.setConfirmationToken();
    user
      .save()
      .then(userRecord => {
        sendConfirmationEmail(userRecord);
        res.json({ user: userRecord.toAuthJSON() });
      })
      .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
});

router.post("/liked_anime", (req, res) => {
    User.findOne({ email: req.body.email }).then( user => {
        if(user) {
            user.likeAnime(req.body.title);
            res.json({ user: user.toAuthJSON()  });
        } else {
            res.status(400).json({ errors: { global: "Invalid Credentials"}});
        }
    });
});

export default router;