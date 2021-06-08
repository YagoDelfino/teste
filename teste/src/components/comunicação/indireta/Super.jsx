import React, {useState} from 'react'
import Sub from './Sub'

export default props =>{

    const[num,SetNum] = useState(0);
    const[texto,SetTexto] = useState('Valor');

    function OnClick(valorGerado, texto){
        SetNum(valorGerado);
        SetTexto(texto);
    }
    return(    
    <div>
        <h4> {texto}: {num}</h4>
        <Sub clicou={OnClick}></Sub>
    </div>
    );
}
