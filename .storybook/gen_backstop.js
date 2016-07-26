require('babel-core/register');
require('babel-polyfill');
require('./config');

var fs = require('fs');
var path = require('path');
var storybook = require('@kadira/storybook');

var book = storybook.getStorybook();
var scenarios = [];

book.forEach(function (kindInfo) {
  kindInfo.stories.forEach(function (storyInfo) {
    scenarios.push({
      "label": kindInfo.kind + ": " + storyInfo.name,
      "url": 'http://localhost:9010/iframe.html?dataId=db161d67&selectedKind=' + encodeURIComponent(kindInfo.kind) + '&selectedStory=' + encodeURIComponent(storyInfo.name),
      "selectors": [ "#root" ],
      "delay": 500,
      "misMatchThreshold" : 0.1,
    })
  });
});

var backstopConfig = {
  "viewports": [ { "name": "desktop", "width": 800, "height": 600 } ],
  "scenarios": scenarios,
  "paths": {
    "bitmaps_reference": "../../backstop_data/bitmaps_reference",
    "bitmaps_test": "../../backstop_data/bitmaps_test",
    "compare_data": "../../backstop_data/bitmaps_test/compare.json"
  },
  "engine": "phantomjs",
  "report": ["CLI"]
};

var configStr = JSON.stringify(backstopConfig, null, 2);
fs.writeFileSync(path.resolve(__dirname, '../backstop.json'), configStr);
