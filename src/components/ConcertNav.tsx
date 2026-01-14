import { NavLink } from 'react-router';

export function ConcertNav() {
  return (
    <ul className="flex flex-row gap-8">
      <li>
        <NavLink to="/concerts" className="text-slate-300 hover:text-slate-400">
          콘서트 홈
        </NavLink>
      </li>
      <li>
        <NavLink to="/concerts/seoul" className="text-slate-300 hover:text-slate-400">
          콘서트 도시별
        </NavLink>
      </li>
      <li>
        <NavLink to="/concerts/trending" className="text-slate-300 hover:text-slate-400">
          콘서트 트렌딩
        </NavLink>
      </li>
    </ul>
  );
}
