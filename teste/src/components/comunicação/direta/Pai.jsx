import React from 'react'
import Filho from './Filho'

export default props =>
    <div>
        <Filho {...props}><strong>Ygor</strong></Filho>
        <Filho sobrenome={props.sobrenome}><strong>Yago</strong></Filho>
        <Filho sobrenome="Delfino"><strong>Dalva</strong></Filho>
    </div>