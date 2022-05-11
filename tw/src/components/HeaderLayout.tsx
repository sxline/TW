import React from 'react';
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

import { ROUTES } from '../Routes/Routes'

const { Header } = Layout

export const HeaderLayout = () => {
    return (
        <Header>
            <div className='logo' />
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={ [ '2' ] }>
                { ROUTES.map((route) => {
                    return <Menu.Item key={ route.id }><Link to={ `${ route.path}` }>{ route.name }</Link></Menu.Item>
                }) }
            </Menu>
        </Header>
    )
}
