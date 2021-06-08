import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/card'
import Produtos from './components/basicos/Repeticao'

import './App.css'
import Condicional from './components/basicos/Condicional'
import CondicionalIf from './components/basicos/CondicionalComIf'

export default (props) => (

    <div className="App">
    <Card titulo="#01 - Primeiro Componente">
        <Primeiro></Primeiro>
    </Card>

    <Card titulo="#02 - Componente com Parametro">
        <ComParametro titulo="Esse é o título"
        subtitulo="Esse é o subtítulo"/>
   </Card>

   <Card titulo="#03 - Componente com Filhos">
    <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Pedro</li>
                <li>Mateus</li>
                <li>Magaza</li>
            </ul>
        </ComFilhos>
   </Card>

   <Card titulo="#04 - Lista os produtos">
       <Produtos/>
   </Card>

   <Card titulo="#05 - Condicional">
       <Condicional numero={10}/>
   </Card>

   <Card titulo="#05 - Condicional v2">
       <CondicionalIf numero={11}/>
   </Card>
    
</div>
) 