import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; 
import { Dropdown, Menu, Space ,Button} from 'antd';
import './index.css'
const menu = (
  <Menu
    items={[
      {
        label: <Button onClick={()=>{
          window.m = 0
        }}>执黑</Button>,
        key: '0',
      },
      {
        label: <Button onClick={()=>{
          window.m = 1
        }}>执白</Button>,
        key: '1',
      },
      {
        type: 'divider',
      },
      {
        label: <Button onClick={()=>{
          window.m = 3
        }}>复原</Button>,
        key: '3',
      },
    ]}
  />
);

const App = () => (
  <Dropdown className='btn' overlay={menu} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Button>
        练习模式
        <DownOutlined />
      </Button>
    </a>
  </Dropdown>
);

export default App;