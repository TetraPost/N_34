const express = require('express');
const router = express.Router();
const axios = require('axios');
const Ajv = require('ajv');
const ajv = Ajv({allErrors: true});

const userSchema = require('../files/userSchema.json');

const urlGet = 'https://api.github.com/users/octocat';


async function getData() {
  try {
    const response = await axios.get(urlGet);
    const obj = response.data;
    const valid = ajv.validate(userSchema, obj);
    let ok = '';
    if (valid) {
      ok = obj;
    } else {
      ok = ajv.errors;
    }
    const dataRes = [ok, valid];
    return dataRes;
  } catch (error) {
    console.error(error);
  }
}

router.all('/', async (req, res) => {
  return res.json(await getData());
});

module.exports = router;
