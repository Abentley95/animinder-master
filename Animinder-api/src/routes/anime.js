import express from 'express';
import Anime from '../models/Anime';
import User from '../models/User';
import authenticate from "../middlewares/authenticate";

const router = express.Router();
router.use(authenticate);

router.get("/", (req, res) => {
    Anime.find({ userId: req.currentUser._id }).then(anime => res.json({ anime }));
});

router.post("/liked_anime", (req, res) => {
    User.findOne({ email: req.body.email }).then( user => {
        if(user) {
            user.likedAnime(req.body.title);
            res.json({ user: user.toAuthJSON()  });
        } else {
            res.status(400).json({ errors: { global: "Invalid Credentials"}});
        }
    });
});

router.post("/unlike_anime", (req, res) => {
    User.findOne({ email: req.body.email }).then( user => {
        if(user) {
            user.unlikeAnime(req.body.title);
            res.json({ user: user.toAuthJSON()  });
        } else {
            res.status(400).json({ errors: { global: "Invalid Credentials"}});
        }
    });
});

router.post("/all_liked_anime", (req, res) => {
    User.findOne({ email: req.body.email }).then( user => {
        if(user) {
            user.unlikeAnime(req.body.title);
            res.json({ user: user.toAuthJSON()  });
        } else {
            res.status(400).json({ errors: { global: "Invalid Credentials"}});
        }
    });
});

export default router;