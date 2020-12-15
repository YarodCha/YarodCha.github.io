import './Home.css';
import { NavLink } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      <div className="contenedor">
        <h1>
          Hello. I'm{' '}
          <span id="myName" style={{ color: 'orange' }}>
            Yarod Chanca
          </span>
          . I'm a full-stack javascript developer
        </h1>
        <NavLink activeClassName="activeLink" to="/portfolio" style={{margin:'0px'}}>
          <button onClick={() => console.log('click')}>
            View my work -&gt;
          </button>
        </NavLink>
      </div>
    </div>
  );
}
