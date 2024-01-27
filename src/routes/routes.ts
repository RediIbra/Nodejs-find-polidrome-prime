import { Router } from "express";
import { postNumbers } from "../controllers/controller";

const router = Router();

router.post("/findPalindrome", postNumbers);

export default router;
