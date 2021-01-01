import './Home.css';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="contenedor">
      <h1>
        Hello. I'm{' '}
        <span id="myName">
          Yarod Chanca
        </span>
        . I'm a full-stack javascript developer
      </h1>
      <Link
        to="/portfolio"
        style={{ margin: '0px' }}
      >
        <button>View my work -&gt;</button>
      </Link>
    </div>
  );
}
