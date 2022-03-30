const { v4: uuidv4 } = require('uuid');

const siteDataRoutes = (app, fs) => {
  const dataPath = 'server/data/siteData.json';

  // helper methods
  const readFile = (
    callback,
    returnJson = false,
    filePath = dataPath,
    encoding = 'utf8'
  ) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        throw err;
      }

      callback(returnJson ? JSON.parse(data) : data);
    });
  };

  const writeFile = (
    fileData,
    callback,
    filePath = dataPath,
    encoding = 'utf8'
  ) => {
    fs.writeFile(filePath, fileData, encoding, (err) => {
      if (err) {
        throw err;
      }

      callback();
    });
  };

  // READ
  app.get('/siteData', (req, res) => {
    readFile((data) => {
      res.send(data);
    }, true);
  });

  // WRITE
  app.post('/siteData', (req, res) => {
    readFile((data) => {
      // Generate unique ID
      const newItemId = uuidv4();

      // add the new item
      data[newItemId] = req.body;

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send('new siteData item added');
      });
    }, true);
  });

  // UPDATE
  app.put('/siteData:id', (req, res) => {
    readFile((data) => {
      // add the new siteData item
      const siteDataId = req.params['id'];
      data[siteDataId] = req.body;

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`siteData item id:{siteDataId} updated`);
      });
    }, true);
  });

  // DELETE
  app.delete('/siteData/:id', (req, res) => {
    readFile((data) => {
      // add the new user
      const siteDataId = req.params['id'];
      delete data[siteDataId];

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`siteData id:${siteDataId} removed`);
      });
    }, true);
  });
};
module.exports = siteDataRoutes;
