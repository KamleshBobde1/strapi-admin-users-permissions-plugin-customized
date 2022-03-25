module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5cdc85c90f46220641f64dbf65818162'),
  },
});
