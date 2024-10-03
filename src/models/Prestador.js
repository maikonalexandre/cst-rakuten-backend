// src/models/Prestador.js
const mongoose = require("mongoose");

// Esquema de Endereço
const enderecoSchema = new mongoose.Schema({
  rua: String,
  numero: String,
  complemento: String,
  cidade: String,
  estado: String,
  cep: { type: String, match: /^\d{8}$/ },
});

// Esquema de Dados Bancários
const dadosBancariosSchema = new mongoose.Schema({
  banco: String,
  agencia: String,
  conta: String,
  tipoConta: { type: String, enum: ["corrente", "poupanca"] },
});

// Esquema Principal do Prestador
const prestadorSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    tipo: { type: String, enum: ["pj", "pf"], required: true },
    documento: { type: String, match: /^\d{11}$|^\d{14}$/, required: true },
    dadosBancarios: dadosBancariosSchema,
    email: { type: String, required: true },
    validacaoEmail: { type: Boolean, default: false },
    validacaoDadosCadastrais: { type: Boolean, default: false },
    validacaoDadosTributarios: { type: Boolean, default: false },
    endereco: enderecoSchema,
    pessoaFisica: {
      dataNascimento: {
        type: Date,
        required: function () {
          return this.tipo === "pf";
        },
      },
      pis: String,
      nomeMae: {
        type: String,
        required: function () {
          return this.tipo === "pf";
        },
      },
    },
    pessoaJuridica: {
      nomeEmpresa: String,
      codCNAE: String,
      nomeCNAE: String,
      codServicoNacional: String,
      regimeTributario: String,
    },
    status: { type: String, enum: ["ativo", "inativo", "arquivado"], default: "ativo" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Prestador", prestadorSchema);