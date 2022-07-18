import React from "react";

class Content extends React.Component{
    render() {
        const conteudos = [
            {
              conteudo: 'High Order Functions',
              bloco: 8,
              status: 'Aprendido'
            },
            {
              conteudo: 'Composicao de Componentes',
              bloco: 11,
              status: 'Aprendendo',
            },
            {
              conteudo: 'Composicao de Estados',
              bloco: 12,
              status: 'Aprenderei'
            },
            {
              conteudo: 'Redux',
              bloco: 16,
              status: 'Aprenderei'
            },
        ];
        const result = conteudos.map(({conteudo, bloco, status}) => {
            return <li key={1}>O conteúdo é: {conteudo}, Status: {status}, Bloco: {bloco}</li>
        })
        return (
            <div>
                <ol>{result}</ol>
            </div>
        )
    }
}

export default Content;