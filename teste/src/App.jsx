import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/card'
import Produtos from './components/basicos/Repeticao'

import './App.css'
import Condicional from './components/basicos/Condicional'
import CondicionalIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicação/direta/Pai'
import Super from './components/comunicação/indireta/Super'
import Input from './components/forms/input'
import Contador from './components/contador/contador'
import Mega from './components/Mega/mega'

export default (props) => ( 

    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#01 - Primeiro Componente" color='#CADC9F'>
                <Primeiro></Primeiro>
            </Card>

            <Card titulo="#02 - Componente com Parametro" color='#0F380F'>
                <ComParametro titulo="Esse é o título"
                subtitulo="Esse é o subtítulo"/>
            </Card>

            <Card titulo="#03 - Componente com Filhos" color='#306230'>
                <ComFilhos>
                        <ul>
                            <li>Ana</li>
                            <li>Pedro</li>
                            <li>Mateus</li>
                            <li>Magaza</li>
                        </ul>
                </ComFilhos>
            </Card>

            <Card titulo="#04 - Lista os produtos" color='#8BAC0F'>
                <Produtos/>
            </Card>

            <Card titulo="#05 - Condicional" color='#9bbc0f'>
                <Condicional numero={10}/>
            </Card>

            <Card titulo="#05 - Condicional v2" color='#CADC9F'>
                <CondicionalIf numero={11}/>
            </Card>

            <Card titulo="#06 - Comunicação Direta" color='#306230'>
                <Pai sobrenome='Neves' ></Pai>
            </Card>

            <Card titulo="#07 - Comunicação Indireta" color='#9bbc0f'>
                <Super/>
            </Card>
                
            <Card titulo="#08 - Comunicação Indireta" color='#CADC9F'>
                <Input/>
            </Card>

            <Card titulo="#09 - Contador" color='#0F380F'>
                <Contador passo={10} valor={100}/>
            </Card>

            <Card titulo="#10 - Mega-Sena" color='#306230'>
                <Mega qtdNumeros={10}/>
            </Card>
        </div>

</div>
) 