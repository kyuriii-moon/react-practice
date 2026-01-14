import { useNavigate } from 'react-router';
import { Content } from '../components/Content';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Content>
        Home Page
        <button onClick={() => navigate('/cart')}>장바구니로 이동</button>
      </Content>
      <Footer />
    </div>
  );
}
