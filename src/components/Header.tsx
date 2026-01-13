import { Link } from 'react-router';

export function Header() {
  return (
    <div>
      <div>Logo</div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="text-slate-300 hover:text-slate-400">
              홈
            </Link>
          </li>
          <li>
            <Link to="/product-detail" className="text-slate-300 hover:text-slate-400">
              상품 상세
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-slate-300 hover:text-slate-400">
              장바구니
            </Link>
          </li>
          <li>
            <Link to="/order" className="text-slate-300 hover:text-slate-400">
              주문
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
