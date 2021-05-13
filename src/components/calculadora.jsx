
import React, { useState } from "react";    

const tudo = {
    textAlign: 'center',
    fontSize: '20px',
    boxSizing: 'border-box'
}
const tabela = {
    borderStyle: 'solid',
    borderColor: 'black',
    backgroundColor: 'white',
    padding: '5px',
    width: 350,
    height:400
}

const Numero ={
    border: '2px solid black',
    textAlign: 'right',
    fontSize: '25px',
    fontWeight: 'bold'
}

const operacao = {
    border: '1px solid black',
    backgroundCOlor: 'rgb(164,164,164)',
    width: '100%',
    fontSize: '15px',
    height: '100%',
}

const numeros = {
    backgroundColor: 'rgb(224,224,224)',
    padding: '5px, 15px',
    border: '1px solid black',
    width: '100%',
    fontSize: '15px',
    height: '100%'
}

const igual = {
    color: 'white',
    border: '1px solid black',
    backgroundColor: 'rgb(51, 51, 255)',
    padding: '5px, 15px',
    fontSize: '15px',
    height: '100%',
    width: '100%'
}

const Calculadora = (props) => {
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [op, setOp] = useState('');

    const adicionar = (e) => {
        if(op === ''){
            setN1(n1 + e.target.value);
        }
        else{
            setN2(n2 + e.target.value);
        }
    }

    const reset = () =>  {
        setN1('');
        setN2('');
        setOp('');
    }

    const result = () =>  {
        if(op === ''){
            return n1 === '' ? 0 : n1;
        }
        else{
            return n2 === '' ? 0 : n2;
        }
    }

    const Opcao = (e) => {
        if(op === ''){
            setOp(op + e.target.value);
        }
        else{
            alert('So pode selecionar uma opção(+,-,*,/)');
        }
    }

    const calcular = () => {
        if ( n1 !== '' && n2 !== '' && op !== '')
        {
            let nu1 = parseFloat(n1);
            let nu2 = parseFloat(n2);
            if(op === '+'){
                setN1(nu1 + nu2);
            }
            else if(op === '-'){
                setN1(nu1 - nu2);
            }
            else if(op === 'x'){
                setN1(nu1 * nu2);
            }
            else if(op === '/'){
                setN1(nu1 / nu2);
            }

            setN2('');
            setOp('');
        }
        else alert('Falta informação para o calculo!');
    }

        return(
            <div style={tudo}>
                <table cellSpacing="10" style={tabela}>
                    <thead>
                        <tr>
                            <th colSpan="4"><input style={Numero} type="text" readOnly="true" value={result()}/></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input style={operacao} type="button" value="+" onClick={Opcao} /></td>
                            <td><input style={operacao} type="button" value="-" onClick={Opcao} /></td>
                            <td><input style={operacao} type="button" value="x" onClick={Opcao} /></td>
                            <td><input style={operacao} type="button" value="/" onClick={Opcao} /></td>
                        </tr>
                        <tr>
                            <td><input style={numeros} type="button" value="7" onClick={adicionar} /></td>
                            <td><input style={numeros} type="button" value="8" onClick={adicionar} /></td>
                            <td><input style={numeros} type="button" value="9" onClick={adicionar} /></td>
                            <td rowSpan="4"><input style={igual} type="button" value="=" onClick={calcular} /></td>
                        </tr>
                        <tr>
                            <td><input style={numeros} type="button" value="4" onClick={adicionar} /></td>
                            <td><input style={numeros} type="button" value="5" onClick={adicionar} /></td>
                            <td><input style={numeros} type="button" value="6" onClick={adicionar} /></td>
                        </tr>
                        <tr>
                            <td><input style={numeros} type="button" value="1" onClick={adicionar} /></td>
                            <td><input style={numeros} type="button" value="2" onClick={adicionar} /></td>
                            <td><input style={numeros} type="button" value="3" onClick={adicionar} /></td>
                        </tr>
                        <tr>
                            <td><input style={numeros} type="button" value="0" onClick={adicionar} /></td>
                            <td><input style={numeros} type="button" value="." onClick={adicionar} /></td>
                            <td><input style={numeros} type="button" value="C" onClick={reset} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
};
export default Calculadora;


