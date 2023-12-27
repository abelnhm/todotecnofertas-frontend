import { Link } from 'react-router-dom';
import './button.back.scss';

export function BackToHome() {
  return (
    <section className="section-back">
      <Link to="/" className="btn-back">
        Back to home
      </Link>
    </section>
  );
}
