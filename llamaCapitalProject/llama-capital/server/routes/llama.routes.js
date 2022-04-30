const LlamaController = require('../controllers/llama.controller');
const { authenticate } = require('../config/jwt.config');
const fetch = require('node-fetch');
const secret = process.env.GORDON;

module.exports = (app) => {
   app.get("/api", (req, res) => {
      res.send("Our express api server is now sending this over to the browser");
   });

   // routes for CoinGecko
   app.get("/api/markets", async (req, res) => {
      const options = {
         method: 'GET',
         headers: {
            'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
            'X-RapidAPI-Key': secret
         }
      };
      
      const response = await fetch('https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&order=market_cap_desc', options)
         .then(res => res.json());

      return res.json(response);
   });

   app.get("/api/currency/:id", async (req, res) => {
      const id = req.params.id;
      const options = {
         method: 'GET',
         headers: {
            'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
            'X-RapidAPI-Key': secret
         }
      };
      
      const response = await fetch('https://coingecko.p.rapidapi.com/coins/' + id, options)
         .then(res => res.json());

      return res.json(response);
   });
   // routes for CoinGecko with user authentication
   // app.get("/api/markets", authenticate, async (req, res) => {
   //    const options = {
   //       method: 'GET',
   //       headers: {
   //          'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
   //          'X-RapidAPI-Key': secret
   //       }
   //    };
      
   //    const response = await fetch('https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&order=market_cap_desc', options)
   //       .then(res => res.json());

   //    return res.json(response);
   // });

   // app.get("/api/currency/:id", authenticate, async (req, res) => {
   //    const id = req.params.id;
   //    const options = {
   //       method: 'GET',
   //       headers: {
   //          'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
   //          'X-RapidAPI-Key': secret
   //       }
   //    };
      
   //    const response = await fetch('https://coingecko.p.rapidapi.com/coins/' + id, options)
   //       .then(res => res.json());

   //    return res.json(response);
   // });

   // routes for app users
   app.get("/api/user/:id", LlamaController.findOneSingleUser);
   app.get("/api/user/login", LlamaController.login);
   app.get("/api/user/logout", LlamaController.logout);
   app.post("/api/user/new", LlamaController.createNewUser);
   app.put("/api/user/:id/update", authenticate, LlamaController.updateExistingUser);
   app.delete("/api/user/:id/delete", authenticate, LlamaController.deleteAnExistingUser);
}