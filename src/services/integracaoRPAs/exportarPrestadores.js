exports.criarPrestadorParaExportacao = ({
  documento,
  nome,
  cep,
  tipoLogradouro,
  nomeDaRua,
  numero,
  complemento,
  bairro,
  codigoCidadeIBGE,
  siglaEstado,
  codigoDeAreaTelefonico,
  telefoneFixo,
  email,
  dataNascimento,
  codigoNascimentoIBGE,
  estadoNascimento,
  nomeMae,
  grauInstrução,
  sexo,
  estadoCivil,
  rg,
  orgaoEmissorRG,
  dataEmissaoRG,
  estadoEmissaoRG,
  numeroCarteiraTrabalho,
  pisNis,
  tipoResidencia,
  codigoLocalizacao,
  cnpjOuNumeroFiscal,
  CBO,
  CFIP,
  eSocial,
  dddOutroTelefone,
  informacaoDesconhecida,
}) => {
  const data = {
    documento,
    nome,
    cep,
    tipoLogradouro,
    nomeDaRua,
    numero,
    complemento,
    bairro,
    codigoCidadeIBGE,
    siglaEstado,
    codigoDeAreaTelefonico,
    telefoneFixo,
    email,
    dataNascimento,
    codigoNascimentoIBGE,
    estadoNascimento,
    nomeMae,
    grauInstrução,
    sexo,
    estadoCivil,
    rg,
    orgaoEmissorRG,
    dataEmissaoRG,
    estadoEmissaoRG,
    numeroCarteiraTrabalho,
    pisNis,
    tipoResidencia,
    codigoLocalizacao,
    cnpjOuNumeroFiscal,
    CBO,
    CFIP,
    eSocial,
    dddOutroTelefone,
    informacaoDesconhecida,
  };

  const campos = [
    "documento",
    "nome",
    "cep",
    "tipoLogradouro",
    "nomeDaRua",
    "numero",
    "complemento",
    "bairro",
    "codigoCidadeIBGE",
    "siglaEstado",
    "codigoDeAreaTelefonico",
    "telefoneFixo",
    "campo-vazio-ou-não-informado",
    "campo-vazio-ou-não-informado",
    "email",
    "dataNascimento",
    "codigoNascimentoIBGE",
    "estadoNascimento",
    "nomeMae",
    "grauInstrução",
    "sexo",
    "estadoCivil",
    "rg",
    "orgaoEmissorRG",
    "dataEmissaoRG",
    "estadoEmissaoRG",
    "numeroCarteiraTrabalho",
    "pisNis",
    "tipoResidencia",
    "codigoLocalizacao",
    "campo-vazio-ou-não-informado",
    "codigoInterno",
    "campo-vazio-ou-não-informado",
    "campo-vazio-ou-não-informado",
    "campo-vazio-ou-não-informado",
    "campo-vazio-ou-não-informado",
    "cnpjOuNumeroFiscal",
    "CBO",
    "CFIP",
    "eSocial",
    "dddOutroTelefone",
    "informacaoDesconhecida",
  ];

  const txtTemplate = campos
    .map((campo) => {
      return data[campo]
        ? `${data[campo]}`
        : ""
          ? "campo-vazio-ou-não-informado"
          : "";
    })
    .join(";");

  return txtTemplate + ";";
};
