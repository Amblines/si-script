(function (window, document) {
  try {
    window.siMetrics = {
      key: import.meta.env.VITE_TEST_KEY,
      server: import.meta.env.VITE_SERVER_URL,
      pageViewUrl: import.meta.env.VITE_PAGE_VIEW_URL,
    };
  } catch (err) {
    console.log(err);
  }

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = import.meta.env.VITE_MAIN_SCRIPT;

  document.head.appendChild(script);
})(window, document);
