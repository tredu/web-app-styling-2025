import { ConfigProvider, Layout, Typography } from 'antd';
import { ProductCard } from './components/ProductCard';
import theme from './theme';

const App = () => (
  <ConfigProvider
    theme={theme}
  >
    <div className="App">

      <Layout.Header style={{ background: '#fafafa', borderBottom: '1px solid #ccc', marginBottom: 32, padding: 16, color: '#333' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <img
            src="./vite.svg"
            alt="Vite logo"
          />
          <div>
            <Typography.Title level={2} style={{ margin: 0 }}>
              Ant Design Theme, Vite & React example
            </Typography.Title>
            <Typography.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magni.
            </Typography.Text>
          </div>
        </div>
      </Layout.Header>
      <Layout.Content style={{ maxWidth: 1200, margin: '32px auto', width: '100%' }}>
        <section style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
      </Layout.Content>
      <Layout.Footer style={{ background: '#fafafa', color: '#333', padding: 16, paddingBottom: 32 }}>
        <Typography.Text>Footer Information</Typography.Text>
      </Layout.Footer>

    </div>
  </ConfigProvider>
);

export default App;