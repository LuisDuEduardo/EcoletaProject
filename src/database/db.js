// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// utilizar o objeto de banco de dados, para nossas operações
//db.serialize(  () => {

  // criar tabela (Com comando SqL)
//  db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//        id INTEGER PRIMARY KEY AUTOINCREMENT,
//        image TEXT,
//        name TEXT,
//        address TEXT,
//        address2 TEXT,
//        state TEXT,
//        city TEXT,
//        items TEXT
//     );
//  `)

  // inserir dados na tabela

//  const query = `
//     INSERT INTO places (
//     image,
//     name,
//     address,
//     address2,
//     state,
//     city,
//     items
//  ) VALUES (?,?,?,?,?,?,?);
//`

//  const values = [
//   "https://images.unsplash.com/photo-1587613755309-e8293efe70f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80",
//  "Colectoria",
//   "Guilherme Gembella, Jardim América",
//   "Nº 260",
//   "Santa Catarina",
//   "Rio do Sul",
//   "Resíduos Eletrônicos, Lâmpadas"
//]

//  function afterInsertData(err) {
//   if(err) {
//      return console.log(err)
//   }

//   console.log("Cadastro concluido com sucesso")
//   console.log(this)
// }

//  db.run(query, values, afterInsertData)

  //consultar os dados da tabela

//   db.all(`SELECT name FROM places`, function(err, rows){
//    if(err) {
//    return console.log(err)}

//    console.log("Aqui estão seus registros: ")
//    console.log(rows)
//  })

  // deletar um dado na tabela

// db.run(`DELETE FROM places WHERE id = ?`, [10], function(err){
//   if(err) {
//    return console.log(err)
//   }

//   console.log("Registro deletado com sucesso")
//   })

//})