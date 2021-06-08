import React, {useState} from 'react'

export default (props) =>{
    const [numeros,setNumeros] = useState(Array(props.qtdNumeros).fill(0))

    function gerarNumerosNaoContidos(array){
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min)) + min
        return array.includes(novoNumero) 
            ? gerarNumerosNaoContidos(array) : novoNumero
    }
    
    function GerarNumeros(){
        const novoArray = Array(props.qtdNumeros)
        .fill(0)
        .reduce(a => [...a, gerarNumerosNaoContidos(a)], [])
        .sort((a,b)=> a-b)
       setNumeros(novoArray)
    }

    return(
    <div>
        <h3>Mega Sena</h3>
        <h4>{numeros.join(' ')}</h4>
        <button onClick={GerarNumeros}>Gerar os Numeros</button>
    </div>)
}
    