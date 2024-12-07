const currentPage = document.body.dataset.page;
switch (currentPage) {
  case "amazon":
    import("./amazon.js").then((module) => {
      if (module.initializeAmazonPage) module.initializeAmazonPage();
    });
    break;
  case "checkout":
    import("./checkout.js").then((module) => {
      if (module.initializeCheckoutPage) module.initializeCheckoutPage();
    });
    break;
  default:
    console.error("No page-specific script found.");
}
