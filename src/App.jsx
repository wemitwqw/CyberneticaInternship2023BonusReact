import { useEffect, useState } from 'react'
import './App.css'

import { Table, Layout} from 'antd';
const { Content } = Layout;


function App() {

  const [data, setData] = useState();

  useEffect(() => {
    fetch('http://localhost:8080/applications')
       .then((res) => res.json())
       .then((data) => {
          console.log(data);
          setData(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
  }, []);

  const columns = [
    {
      title: 'Application ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'First Name',
      dataIndex: 'candidate',
      key: 'id',
      render: item => Object.values(item)[1],
    },
    {
      title: 'Last Name',
      dataIndex: 'candidate',
      key: 'id',
      render: item => Object.values(item)[2],
    },
    {
      title: 'Application State',
      dataIndex: 'applicationState',
      key: 'id',
    },
    {
      title: 'Interview',
      key: 'id',
      dataIndex: 'interview',
      render: item => item ? Object.values(item)[1] : null,
    },
  ];

  return (
    <div style={{ padding: 24, backgroundColor: 'rgba(0,0,0,0)' }}>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <Table columns={columns} dataSource={data} />
        </Content>
      </Layout>
      <div style={{ marginTop: 20}}>Made for Cybernetica Internship 2023</div>
    </div>
  );

}
export default App;
