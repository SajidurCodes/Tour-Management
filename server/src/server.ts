import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";

let server: Server;

const startServer = async () => {
  try {
    console.log("Environment:", envVars.NODE_ENV);

    const mongoUri = `mongodb+srv://${envVars.DB_USER}:${envVars.DB_PASS}@cluster0.rjmheis.mongodb.net/Tour-Management-System`;

    await mongoose.connect(mongoUri);

    console.log("✅ Connected to DB");

    server = app.listen(Number(envVars.PORT), () => {
      console.log(`🚀 Server running on port ${envVars.PORT}`);
    });
  } catch (error) {
    console.error("❌ Error starting server:", error);
    process.exit(1);
  }
};

startServer();

/* =======================
   GRACEFUL SHUTDOWN
======================= */

const shutdown = (signal: string, err?: unknown) => {
  console.log(`⚠️ ${signal} detected. Shutting down server...`);

  if (err) {
    console.error(err);
  }

  if (server) {
    server.close(() => {
      console.log("🛑 Server closed");
      process.exit(signal === "SIGTERM" ? 0 : 1);
    });
  } else {
    process.exit(1);
  }
};

process.on("unhandledRejection", (err) =>
  shutdown("Unhandled Rejection", err)
);

process.on("uncaughtException", (err) =>
  shutdown("Uncaught Exception", err)
);

process.on("SIGTERM", () => shutdown("SIGTERM"));
