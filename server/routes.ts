import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the contact form data
      const contactData = insertContactSchema.parse(req.body);
      
      // Store the contact form submission
      const contact = await storage.createContact(contactData);
      
      res.status(201).json({
        message: "Contact form submitted successfully!",
        contact,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation failed", 
          errors: validationError.details
        });
        return;
      }
      
      res.status(500).json({
        message: "Failed to submit contact form. Please try again later.",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
