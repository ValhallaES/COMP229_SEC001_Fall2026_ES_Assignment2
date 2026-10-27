const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "MyPortfolio_secret_key",
  // Paste your own MongoDB Atlas connection string below.
  // Keep "/Portfolio" before the "?" so the app uses the Portfolio database.
  mongoUri:
    process.env.MONGODB_URI ||
    "mongodb+srv://valhalla0zero_db_user:Lwl3uaJYceEdhv59@cluster0.nes2lnv.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=Cluster0",
};

export default config;
