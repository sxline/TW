import React from 'react';
import { Breadcrumb, Layout, Row } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { Routes, Route } from 'react-router-dom'

import { ROUTES } from '../Routes/Routes'
import Card_content from './Card_content'
import { LoginForm } from './LoginForm';
import { StudenOverview } from './StudenOverview'
import { Home } from './Home';




const homeStudent = [
    {
      firstName: "Maxim",
      secondName:"Leanca",
      gender:"male",
      age:21,
      univerity: "UTM",
      speciality:"CR",
    },
    {
      firstName: "Maxim",
      secondName:"Leanca",
      gender:"male",
      age:21,
      univerity: "UTM",
      speciality:"CR",
    },
    {
      firstName: "Maxim",
      secondName:"Leanca",
      gender:"male",
      age:21,
      univerity: "UTM",
      speciality:"CR",
    }
  
  ]

export const ContentLayout = () => {


    return (
        <>
            <Content style={ { padding: '0 50px' } }>
                
                <div className='site-layout-content'>

                    <Routes>
                      
                        <Route path={ ROUTES[0].path } element={ <Home /> } />
                        <Route path={ ROUTES[1].path } element={ <Card_content /> } />
                        <Route path={ ROUTES[2].path } element={ <StudenOverview students = {homeStudent} /> } />
                    </Routes>
                </div>
            </Content>
           
        </>

    )
}