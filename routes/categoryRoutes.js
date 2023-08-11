import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import { categoryControlller, createCategoryController,deleteCategoryCOntroller,singleCategoryController,updateCategoryController } from "./../controllers/categoryController.js";

const router = express.Router();

//routes
// create category check in postman 
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);


//update category using column id value of table we will update that particular row or category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//getALl category
router.get("/get-category", categoryControlller);


//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryCOntroller
);
export default router;
