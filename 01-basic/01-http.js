/**
 *  Core Module: HTTP
 *
 *  Kita belajar membuat server sederhana dengan menggunakan module http (module yang sudah masuk ke dalam nodejs tidak diinstal menggunakan npm, cukup di require)
 */

// // ini sudah menjadi template
// // Import module http dengan require
const http = require("http"); // import httpnya, package yg dibutuhkan yaitu http

// const server1 = http.createServer((req,res) => { // masukin logic disini yaitu arrow function
 
// }); // membuat variable namanya server, diakan akan membuat server, disitu ada arrow function berisi property req dan res
// server1.listen(5000); // mau pake port yang mana, biasanya 80 atau 442, karena kita belajar jadi pake 5000 untuk localhost


// -----------


// buat server dengan method createServer
const server = http.createServer((req, res) => {
  // Inisiasi variabel yang akan dipakai
  let data; // - nilainya undefined, karena kita pake let maka datanya bisa diubah ubah

  // tampilkan pada console.log request yang diterima oleh server
  console.log(req); // menampilkan request/ data dari user 

  /**
   *  object req terdiri dari banyak data, namun yang paling sering dipakai ada 3
   *  Yaitu url, method, headers
   */
  // buat object data berisi url, method, dan header
  data = {
    url: req.url,
    method: req.method,
    header: req.headers,
  };

  // console.log(data);

  // Set response header berupa json
  // - kalau kita set respon berupa json, maka otomatis browser akan tahu bahwa ini adalah json, atau ketika membuat app android maka akan tahu bahwa ini bukan html tapi json, jadi bisa memudahkan developer front-end dalam menangani data tsb
  res.setHeader("Content-Type", "application/json");

  // Kirim data berupa Json
  // - mengubat 'data' object kedalam bentuk JSON
  res.end(JSON.stringify(data));
});

// set port server
server.listen(3000);
