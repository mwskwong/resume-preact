export default {
  plugins: [
    "preact-cli-plugin-env-vars"
  ],
  webpack: (config, env) => {
    config.resolve.modules.push(env.src);
  }
};