import { Alert, Layout, Menu } from "antd";
import React, {useState} from "react";
import Student from "../interface/extendsInterface"
import StudentContent from "./StudentContent"


const { SubMenu } = Menu;
const {  Content, Sider } = Layout;


export interface StudentProps{
    students: Student[];
}

export const StudenOverview = ({students}:StudentProps) => {
  
 
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputSecondName, setInputSecondName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputGender, setInputGender] = useState("");
  const [inputUniversity, setInputUniversity] = useState("");
  const [inputSpeciality, setInputSpeciality] = useState("");



  

  const submitHandler = (e:React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>):void =>{
    e.preventDefault();
    console.log(inputFirstName);
    
    alert("Data from interface" + inputFirstName +" " + inputSecondName+" " + inputAge+" "+inputGender )

    
    
    setInputFirstName("");
    setInputSecondName("");
    setInputAge("");
    setInputUniversity("");
    setInputSpeciality("");
    
};

  



    if(students.length !== 0){
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
            {/*   <SubMenu key="sub1"  title="Add new card:">*/}
            {/*     <div className="card_input"><input className='input_field' value={inputFirstName} onChange={(e)=> setInputFirstName(e.target.value)} placeholder="Nume"  type="text" /></div>*/}
            {/*     <div className="card_input"><input className='input_field' value={inputSecondName} onChange={(e)=> setInputSecondName(e.target.value)} placeholder="Prenume"  type="text" /></div>*/}
            {/*     <div className="card_input"><input className='input_field' value={inputAge} onChange={(e)=> setInputAge(e.target.value)} placeholder="Varsta"  type="text" /></div>*/}
            {/*     <div className="card_input"><input className='input_field' value={inputUniversity} onChange={(e)=> setInputUniversity(e.target.value)} placeholder="Universitatea"  type="text" /></div>*/}
            {/*     <div className="card_input"><input className='input_field' value={inputSpeciality} onChange={(e)=> setInputSpeciality(e.target.value)} placeholder="Specialitatea"  type="text" /></div>*/}
            {/*     <div onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setInputGender(e.target.value)}>*/}
            {/*        <input className="radio" type="radio" value="Male" name="gender" defaultChecked={true}   /> Male*/}
            {/*        <input className="radio" type="radio" value="Female" name="gender"   /> Female*/}
            {/*        */}
            {/*    </div>*/}
            {/*     <div className="card_input"> <button onClick={submitHandler}  className="button-3" type="submit" >Add</button></div>*/}
            {/*    */}
            {/*    </SubMenu>*/}
            
            {/*  </Menu>*/}
            {/*</Sider>*/}
    
              <StudentContent students= {students}/>
            
    
            
          </Layout>
        </Content>
       
      </Layout>
    
        )
    }
    else 
    return null
    
    
    
    
    

}

