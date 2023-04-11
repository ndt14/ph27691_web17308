import express from "express";

import { create, get, getAll, remove } from "../controller/category";
import { checkPreferences } from "joi";

const router = express.Router();

router.get("/categories", getAll);
router.get("/categories/:id", checkPreferences, get);
router.post("/categories", checkPreferences, create);
router.delete("/categories/:id", checkPreferences, remove);


export default router;