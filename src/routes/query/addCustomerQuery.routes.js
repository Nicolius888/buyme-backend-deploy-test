const { Router } = require("express");
const showErrors = require("../../messageConsole");
const router = Router();
const createQuery = require("../../controllers/query/addCustomerQuery.controller");

//Ruta para llamar al controlador que agrega la query del cliente
router.post("/", async (req, res) => {
  const { query, date, time, idCustomer } = req.body;
  //   idCustomer
  console.log("im in route");
  if (query) {
    try {
      const create = await createQuery(query, date, time, idCustomer);
      res.json({ message: "Query created", data: create });
    } catch (error) {
      showErrors("post/addCustomerQuery", error);
      res.send(500);
    }
  }
});

module.exports = router;
