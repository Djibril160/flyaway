import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider } from 'antd';


function Home() {
  const [size, setSize] = useState('large'); // default is 'middle'


  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">My World!</a>
        </h1>
        <Space wrap>
          <Button type="primary">Button</Button>
          <Button type="primary" icon={<DownloadOutlined />} size={size}>
            Download
          </Button>
        </Space>  
      </main>
    </div>
  );
}

export default Home;
