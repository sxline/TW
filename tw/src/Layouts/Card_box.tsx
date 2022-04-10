import React from 'react';
import { Card } from 'antd';
import Student from "../Interface/Student";



export interface StudentsProp{
    Students: Student[];
}



const Card_box = ({Students}:StudentsProp) =>{

    return(
        <div className='grid-3'>
            {Students.map((card: any) => (
                <div className="site-card-border-less-wrapper ">
                    <Card title={card.nickname} bordered={false} style={{textAlign:"center", width: 300 }} >
                        <p> Name : {card.name} </p>
                        <p> Surname :  {card.surname}</p>
                        <p> Faculty : {card.faculty}</p>
                        <p> Group : {card.group}</p>
                        <p> AverageGrade : {card.averageGrade}</p>
                        <p> Gender : {card.gender}</p>
                        <p> Age : {card.age}</p>
                        <p> Iq : {card.iq}</p>

                    </Card>
                </div>
            ))}

        </div>

    )
}

export default  Card_box;