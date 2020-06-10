module.exports = {
  mongoURI: "mongodb://localhost:27017/crmpfe",
  secretOrKey: "changeme", 
  SENDGRID_API_KEY:"apikey", 
  SMTP_HOST: "localhost", 
  SMTP_PORT: 25,
  SMTP_SSL: false, // upgrade later with STARTTLS
  SMTP_USER:"anonymous", 
  SMTP_PASS: "anonymous", 
  APP_URI: "localhost:5000", 
  FACEBOOK_APP_ID: "2615115432077261", 
  FACEBOOK_APP_SECRET: "3e1b493e86ce61e57c9d68023139938f", 
  FACEBOOK_CALLBACK_URL: "http://localhost:5000/auth/facebook/callback", 
  TWITTER_CONSUMER_KEY: "loremipsumdolorsitamet", 
  TWITTER_CONSUMER_SECRET: "loremipsumdolorsitamet", 
  TWITTER_CALLBACK_URL: "http://localhost:5000/auth/twitter/callback"
};
