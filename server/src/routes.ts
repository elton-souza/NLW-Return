import express from "express";
import { SubmitFeedback } from "./services/submitFeedback";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prismaFeedbacksRepository";
import { NodeMailerAdapter } from "./adapters/nodemailer/nodeMailerAdapter";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodeMailerAdapter(); 
  
  const submitFeedback = new SubmitFeedback(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  ); 

  await submitFeedback.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});
