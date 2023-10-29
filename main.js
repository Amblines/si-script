const xhr = new XMLHttpRequest();

xhr.open('POST', window.siMetrics.server + window.siMetrics.pageViewUrl, true);
xhr.setRequestHeader('Content-Type', 'application/json');

const data = {
  key: window.siMetrics.key,
  url: window.location.href,
};

const jsonData = JSON.stringify(data);

xhr.send(jsonData);
