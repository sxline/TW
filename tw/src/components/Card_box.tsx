import React from 'react';
import { Card } from 'antd';
import {card$} from '../mst/stores/Cardbox.store'
import { observer } from 'mobx-react-lite';



const Card_box = observer(() =>{

    return(
    <div className='grid-3'>
       
        {card$.cards.map((card: any) => (
            <div className="site-card-border-less-wrapper ">
            <Card title={card.name} bordered={false} style={{ width: 300 }} >
            <a href="#" className="close" onClick={()=>(card$.delCard(card))} />
            <p> {card.university} </p>
            <p> {card.age}</p>
            <p> {card.text}</p>
        </Card>
         </div>
        ))}
        
    </div>
        
    )
})

export default  Card_box;