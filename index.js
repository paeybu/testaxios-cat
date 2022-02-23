const axios = require('axios');

const fetchAndLogCatFacts = async () => {
  const res = await axios.get('https://cat-fact.herokuapp.com/facts');
  console.log(res.data);
};

fetchAndLogCatFacts();
