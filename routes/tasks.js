var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json(
    {
      tasks: [
        {
          title: "Learn Express"
        },
        {
          title: "Build API"
        }
      ]
    }
  );
});

module.exports = router;
