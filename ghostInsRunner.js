require('dotenv').config(); // If using dotenv
const GhostInspector = require('ghost-inspector')(
  process.env.GHOST_INSPECTOR_API_KEY = `731dfb45fa7f9feb4875186fcc10f4ce58c58ed9`;
);

GhostInspector.executeSuite('654007795d4962e44b958aa8', { startUrl: 'https://dashboard.mileiq.com/signup?' }, (err, results) => {
  if (err) return console.error(err);
  console.log('Suite results:', results);
});