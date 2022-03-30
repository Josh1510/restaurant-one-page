const { v4: uuidv4 } = require('uuid');

const menuRoutes = (app, fs) => {
  const dataPath = 'server/data/menu.json';

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
  app.get('/menu', (req, res) => {
    readFile((data) => {
      res.send(data);
    }, true);
  });

  // WRITE
  app.post('/menu', (req, res) => {
    readFile((data) => {
      // Generate unique ID
      const newItemId = uuidv4();

      // add the new item
      data[newItemId] = req.body;

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send('new menu item added');
      });
    }, true);
  });

  // UPDATE
  app.put('/menu/:id', (req, res) => {
    readFile((data) => {
      // add the new menu item
      const menuId = req.params['id'];
      data[menuId] = req.body;

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`menu item id:${menuId} updated`);
      });
    }, true);
  });

  // DELETE
  app.delete('/menu/:id', (req, res) => {
    readFile((data) => {
      // add the new user
      const menuId = req.params['id'];
      delete data[menuId];

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`menu id:${menuId} removed`);
      });
    }, true);
  });
};
module.exports = menuRoutes;
