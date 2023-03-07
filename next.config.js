const {
  DATABASE_URL,
  NEXT_PUBLIC_APP_ID,
  NEXT_PUBLIC_APP_KEY,
  NEXTAUTH_SECRET,
  NEXTAUTH_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  NEXT_PUBLIC_UPLOAD_URL,
  NEXT_PUBLIC_IMAGE_UPLOAD_URL,
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  STRIPE_SECRET_KEY,
  OPENAI_API_KEY,
  APP_URL,
  WS_URL
} = process.env;

module.exports = {
  env: {
    DATABASE_URL,
    NEXT_PUBLIC_APP_ID,
    NEXT_PUBLIC_APP_KEY,
    NEXTAUTH_SECRET,
    NEXTAUTH_URL,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    FACEBOOK_APP_ID,
    FACEBOOK_APP_SECRET,
    NEXT_PUBLIC_UPLOAD_URL,
    NEXT_PUBLIC_IMAGE_UPLOAD_URL,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    STRIPE_SECRET_KEY,
    OPENAI_API_KEY,
    APP_URL,
    WS_URL
  }
};
