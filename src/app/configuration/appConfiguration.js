const CONFIG = {
  auth: {
    clientId: "35Fn4o16JWNyXaKVm4YJT2DL01qrSnF6",
    domain: "ricard0javier.eu.auth0.com",
    tokenInfo: "https://ricard0javier.eu.auth0.com/tokeninfo"
  },
  api: {
    articles: {
      list: "//static.ricardovz.com/data/articles.json",
      add: {
        url: "https://api.ricardovz.com/ricardovz_uploader",
        bucket: "static.ricardovz.com",
        prefix: "data/"
      }
    }
  }
};

if (process.env.NODE_ENV !== 'production') {
  CONFIG.api.articles.add.url = "https://pxgzx41l7b.execute-api.eu-central-1.amazonaws.com/prod/ricardovz_uploader";
}

export default CONFIG;
