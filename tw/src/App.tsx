
import React, { useEffect, useState } from 'react';
import './App.css';
import { HeaderLayout } from './components/HeaderLayout';
import {ContentLayout} from './components/Content_layout'
import { Layout } from 'antd';
import { card$ } from './mst/stores/Cardbox.store';
import { useLoginStore } from ".";
import { LoginForm } from './components/LoginForm';
import { Footer } from 'antd/lib/layout/layout';




function App() {
  const loginS = useLoginStore();
  
  useEffect(() => {
    loginS.setInitialStorageContents()
  }, [])

  return (
    <div className="App">
      <LoginForm/>
      <Layout className='layout'>
      <HeaderLayout/>
      <ContentLayout/>
      <Footer style={{ textAlign: 'center' }}>Maxim Leanca CR-191</Footer>
      </Layout>
    </div>
  );
}

export default App;
