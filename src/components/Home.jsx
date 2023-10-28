import '../assets/style/App.css'

function Home() {
  return (
    <div className="Background">
      <div className="NavBar">
        <a className="NavBar-Itens">About</a>
        <a className="NavBar-Itens">Projects</a>
        <a className="NavBar-Itens">Midias</a>
        <a className="NavBar-Itens">Resume</a>
      </div>
      <header className="TitleSection">
        <div className="Name">
          Gustavo Freitas
        </div>
        <div className="Title">
          Software Developer
        </div>
      </header>
    </div>
  );
}

export default Home;
