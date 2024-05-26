"use strict";

var pessoas = [{
  nome: "luis",
  casado: "sim"
}, {
  nome: "luis",
  casado: function casado() {
    console.log("chames");
  }
}];
var vetor = [].concat(pessoas);
