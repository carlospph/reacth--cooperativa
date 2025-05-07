import './Home.css';

export default function Home() {
  return (
    <section id="hero">
      <div className="hero__container">
        <h1>Criando site com react intermediário</h1>
        <p>Que tal ter vários sites pelo preço de apenas um?</p>
        <div className="buttons__container">
          <button>Explore nossa arte</button>
          <button>Cadastre-se</button>
        </div>
      </div>
    </section>
  );
}
