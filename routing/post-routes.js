import express from "express";
import { addPost, deletePost, getAllPosts, getPostById, updatePost } from "../controllers/post-controller";
import { protect } from "../middleware/authMiddleware";

const postRouter = express.Router();

postRouter.get("/", getAllPosts);
postRouter.get("/:id", getPostById);

// Adaugă protect middleware înainte de controller
postRouter.post("/", protect, addPost);
postRouter.put("/:id", protect, updatePost);
postRouter.delete("/:id", protect, deletePost);

export default postRouter;