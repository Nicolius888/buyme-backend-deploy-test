const { Query } = require("../../database/db");
const showErrors = require("../../messageConsole");

//Función para que el cliente agrege una consulta
//recibe del front [{query, respuesta,fecha,hora,idAdmin,idCustomer}]
async function addQuery(query, date, time, idCustomer) {
  // idCustomer
  try {
    //crea el objeto query
    const objectQuery = {
      query: query,
      date: date,
      time: time,
    };
    //convierte a json
    let jsonQuery = JSON.stringify(objectQuery);
    //crea la query
    console.log(jsonQuery);
    let newQuery = await Query.create({
      queryHistory: [jsonQuery],
    });
    console.log(newQuery);
    //agrega la relacion.
    await newQuery.addClient(idCustomer);
    return newQuery;
  } catch (error) {
    showErrors("addCustomQuery.controller", error);
    return error;
  }
}

module.exports = addQuery;
