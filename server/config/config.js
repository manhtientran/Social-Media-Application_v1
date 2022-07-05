const config = {
    port: process.env.PORT || 5000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_SECRET_KEY",
    mongoUri: process.env.MONGODB_URI || "mongodb://localhost:27017/socialMediaApp"    
}

export default config;