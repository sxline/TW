import React, {useEffect, useState} from 'react';
import Card_box from './Card_box';
import { Layout, Menu,  } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import {card$} from '../mst/stores/Cardbox.store'




const Card_content = () =>{
    
    const [inputName, setInputName] = useState("");
    const [inputUniversity, setInputUniversity] = useState("");
    const [inputAge, setInputAge] = useState("");
    const [inputText, setInputText] = useState("");
 
    const submitHandler = (e:React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>):void =>{
      e.preventDefault();
      card$.addCard(Math.random()*1000,inputName,inputUniversity,inputAge,inputText )
      
      setInputName("");
      setInputUniversity("");
      setInputAge("");
      setInputText("");
      
  };
  
  // it's calls once
useEffect( () => {
  console.log("what")
  getLocalTodos();
},[])


  // it's calls every time than component
useEffect( () => {
  console.log("why")
  saveLocalTodos();
}, [submitHandler])


const saveLocalTodos = () => {
  localStorage.setItem("Cards",JSON.stringify(card$.cards));
  
};

const getLocalTodos = () => {
if(localStorage.getItem("Cards") === null){
  localStorage.setItem("Cards", JSON.stringify([]))
}else{
  let cardLocal =  JSON.parse(localStorage.getItem("Cards")|| "")
  
  card$.addLocal(cardLocal)
}
};


    return(
        <Layout>
  

    <Content style={{ padding: '0 50px' }}>

      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        {/*<Sider className="site-layout-background" width={200}>*/}
        {/*  <Menu*/}
        {/*    mode="inline"*/}
        {/*    defaultSelectedKeys={['1']}*/}
        {/*    defaultOpenKeys={['sub1']}*/}
        {/*    style={{ height: '100%' }}*/}
        
        {/*  >*/}
        {/*   <SubMenu key="sub1" icon={<UserOutlined />} title="Add new card:">*/}
        {/*     <div className="card_input"><input className='input_field' value={inputName} onChange={(e)=> {setInputName(e.target.value);}} placeholder="Nume/prenume"  type="text" /></div>*/}
        {/*     <div className="card_input"><input className='input_field' value={inputUniversity} onChange={(e)=> {setInputUniversity(e.target.value);}} placeholder="Universitate"  type="text" /></div>*/}
        {/*     <div className="card_input"><input className='input_field' value={inputAge} onChange={(e)=> {setInputAge(e.target.value);}} placeholder="Varsta"  type="text" /></div>*/}
        {/*     <div className="card_input"><input className='input_field' value={inputText} onChange={(e)=> {setInputText(e.target.value);}} placeholder="Text"  type="text" /></div>*/}
        {/*     <div className="card_input"> <button onClick={submitHandler} className="button-3" type="submit" >Add</button></div>*/}

        {/*    </SubMenu>*/}
        {/*  </Menu>*/}
        {/*</Sider>*/}
        <Content style={{ padding: '0 24px', minHeight: 280 }}>

         <Card_box
         />
         
        </Content>
      </Layout>
    </Content>
  </Layout>

    )
}



export default Card_content;

