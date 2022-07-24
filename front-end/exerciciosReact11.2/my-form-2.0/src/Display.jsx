import React, { Component } from 'react';

class Display extends Component {
  render() {
    const {
      currentState: {
        nome,
        cpf,
        box,
        house,
        endereco,
        cidade,
        curriculo,
        cargo,
        descricao,
      }
    } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <div> Name: { nome }</div>
        <div> CPF: { cpf }</div>
        <div> Endereço: { endereco }</div>
        <div> Cidade: { cidade }</div>
        <div> Estado: { box }</div>
        <div> Tipo de residência: { house }</div>
        <h3>Profissional</h3>
        <div> Currículo: { curriculo }</div>
        <div> Cargo: {cargo}</div>
        <div> Descrição do Cargo: { descricao }</div>
      </div>
    );
  }
}

export default Display;