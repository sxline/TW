import { Layout, Menu, Breadcrumb } from "antd";
import { ContentLayout } from './ContentLayout';
import './LayoutC.css';
import { Forms } from '../Form/Forms';

const { Header, Content, Footer } = Layout;

const Informations = [
    {
        id: 1,
        title: "A title",
        description: "A description"
    },
    {
        id: 2,
        title: "B title",
        description: "B description"
    },
    {
        id: 3,
        title: "C title",
        description: "C description"
    },
]


export const LayoutCustom = () =>{
    return(
        <>
            <Layout className="layout">
                <Header>
                    {/*<div className="logo" />*/}
                    <Menu mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item >{`Home`}</Menu.Item>
                        <Menu.Item >{`Menu`}</Menu.Item>
                        <Menu.Item >{`Info`}</Menu.Item>
                        <Menu.Item >{`Contacts`}</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>Titles</Breadcrumb.Item>
                        <Breadcrumb.Item>Description</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className="site-layout-content" >
                        {   Informations.map((el, index) =>{
                            return(
                                <ContentLayout key={el.id} title={el.title} description={el.description} />
                            )
                        })
                        }

                    </div>
                    <Forms></Forms>
                </Content>
            </Layout>,
        </>
    )
}