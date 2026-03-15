import express from "express";
import {
  getHomePage,
  getAboutPage,
  getEventsPage,
  getContactPage,
} from "../controllers/pages.controllers.js";

const router = express.Router();

router.get("/", getHomePage);
router.get("/about", getAboutPage);
router.get("/events", getEventsPage);
router.get("/contact", getContactPage);

export default router;