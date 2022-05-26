import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button, Layout } from 'antd'
export default function App() {

  const { Header, Footer, Sider, Content } = Layout;
  return (
    <>
      <Layout>
        <Header>
          <Link to='/19lu' state={{ length: 19 }}>
            <Button type="dashed">19路</Button>
          </Link>
          <Link to='/19lu' state={{ length: 13 }}>
            <Button type="dashed">13路</Button>
          </Link>
          <Link to='/19lu' state={{ length: 9 }}>
            <Button type="dashed">9路</Button>
          </Link>
        </Header>
        <Layout>
          <Content><Outlet /></Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

    </>
  )
}
