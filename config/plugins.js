module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("backend-kimango"),
      api_key: env("floriano2020"),
      api_secret: env("Samaluco2020"),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
});
