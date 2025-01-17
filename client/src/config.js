const config = {
  API_BASE_URL:
    process.env.NODE_ENV === "production"
      ? "https://notes-app-2noq.onrender.com/"
      : "http://localhost:5000",
};

export default config;
