import express, { Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// Middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Custom logging middleware for API routes
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined;

  const originalResJson = res.json.bind(res);
  res.json = function (body, ...args) {
    capturedJsonResponse = body;
    return originalResJson(body, ...args);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;

    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;

      if (capturedJsonResponse) {
        const responseStr = JSON.stringify(capturedJsonResponse);
        logLine += ` :: ${responseStr}`;
      }

      // Truncate if too long
      if (logLine.length > 200) {
        logLine = logLine.slice(0, 199) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Async setup function
(async () => {
  const server = await registerRoutes(app);

  // Global error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    console.error("Error:", err); // Still throw after sending response
  });

  // Serve frontend assets or setup Vite in dev
  if (process.env.NODE_ENV !== "production") {
  await setupVite(app, server); // Development mode with Vite middleware
} else {
  serveStatic(app);             // ✅ Production mode serves static files
}

  // Start server on fixed port
  const PORT = 5000;
  server.listen(PORT, "localhost", () => {
    log(`✅ Server running at http://localhost:${PORT}`);
  });
})();