import * as path from "path";
// import doczPluginNetlify from "docz-plugin-netlify";

const STATIC = path.resolve(__dirname, "docs/static");

export default {
  title: "Learn Anything | Docs",
  description: "",
  // theme: "",
  themeConfig: {
    colors: {
      primary: "#34495e"
    }
  },
  public: "./docs/static",
  // menu: [
  //   {
  //     name: "Help",
  //     menu: ["Support", "Contributing"]
  //   }
  // ]
  onCreateWebpackChain: config => {
    config.resolve.alias.set("@images", `${STATIC}/images`);

    return config;
  }
  // plugins: [doczPluginNetlify()]
};
