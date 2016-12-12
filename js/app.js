var url = 'localhost:8080/...';

// fetch data and render alchemy graph
var fetchData = fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(datasource) {
    // set datasource config data
    // call alchemy
  })
  .catch(function(error) {
    console.error(error);
  });

// simple datasource
var simpleDatasource = {
  nodes: [{ id: 1 }, { id: 2 }, { id: 3 }],
  edges: [{ source: 1, target: 2 }, { source: 1, target: 3, }]
};

var dataSourceConfig = {
  dataSource: simpleDatasource
  // set more config options
};

var alchemy = new Alchemy(dataSourceConfig);
