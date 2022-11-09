module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '579e858a98bfe80902246d444c68c40e'),
  },
});
