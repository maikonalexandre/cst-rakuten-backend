// src/controllers/prestadorController.js
const Prestador = require('../models/Prestador');

// Criar um novo Prestador
exports.criarPrestador = async (req, res) => {
  try {
    const prestador = new Prestador(req.body);
    await prestador.save();
    res.status(201).json(prestador);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar prestador', detalhes: error.message });
  }
};

// Listar todos os Prestadores
exports.listarPrestadores = async (req, res) => {
  try {
    const prestadores = await Prestador.find();
    res.status(200).json(prestadores);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao listar prestadores' });
  }
};

// Obter um Prestador por ID
exports.obterPrestador = async (req, res) => {
  try {
    const prestador = await Prestador.findById(req.params.id);
    if (!prestador) return res.status(404).json({ error: 'Prestador não encontrado' });
    res.status(200).json(prestador);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao obter prestador' });
  }
};

// Atualizar um Prestador
exports.atualizarPrestador = async (req, res) => {
  try {
    const prestador = await Prestador.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!prestador) return res.status(404).json({ error: 'Prestador não encontrado' });
    res.status(200).json(prestador);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar prestador' });
  }
};

// Excluir um Prestador
exports.excluirPrestador = async (req, res) => {
  try {
    const prestador = await Prestador.findByIdAndDelete(req.params.id);
    if (!prestador) return res.status(404).json({ error: 'Prestador não encontrado' });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Erro ao excluir prestador' });
  }
};
