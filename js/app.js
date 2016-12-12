var url = '';

var data = fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  })
  .then(function(response) {
    return response.json()
      .then(function(json) {

      });
  })
  .catch(function(error) {
    console.error(error);
  });

alchemy.begin({
  dataSource: {
    nodes: [{
      id: 1
    }, {
      id: 2
    }, {
      id: 3
    }],
    edges: [{
      source: 1,
      target: 2
    }, {
      source: 1,
      target: 3,
    }]
  }
});
