const axios = require('axios');

axios
  .get('https://api.github.com/users/mariorizki')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
