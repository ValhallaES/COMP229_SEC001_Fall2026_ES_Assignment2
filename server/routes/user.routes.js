import express from "express";
import userCtrl from "../controllers/user.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

// Public: sign up (add new user) and list users
// Protected: delete all users requires a signed-in user
router
  .route("/api/users")
  .get(userCtrl.list)
  .post(userCtrl.create)
  .delete(authCtrl.requireSignin, userCtrl.removeAll);

// Protected: read needs a token; update / delete need the token of that same user
router
  .route("/api/users/:userId")
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);

router.param("userId", userCtrl.userByID);

export default router;
