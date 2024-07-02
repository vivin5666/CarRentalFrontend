import dotenv from 'dotenv';
import { connectDB } from './DbConfig';

dotenv.config();

(async () => {
  try {
    await connectDB();
    console.log("MongoDB Connection Established. Application is running.");
    // Add more initialization logic here if needed.
  } catch (error) {
    console.error("Error initializing the application:", error);
    process.exit(1);
  }
})();
