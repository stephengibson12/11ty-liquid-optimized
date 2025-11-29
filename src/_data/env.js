export default {
  apiUrl:
    process.env.NODE_ENV === "production"
      ? "https://production-example.com"
      : "http://localhost:8081",
};
