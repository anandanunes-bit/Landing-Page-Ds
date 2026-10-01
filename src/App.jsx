import './App.css'

function App(){
 return(
  <>
    <header className="header">
      <div className="container">
        <div className="logo"><span>DS</span> DEV SISTEMAS • SENAI</div>
        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#tecnologias">Stack</a>
          <a href="#projetos">Projetos</a>
        </nav>
      </div>
    </header>

    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div>
          <div className="badge">TURMA 2026 • VAGAS ABERTAS</div>
          <h1>Transforme ideias em <i>sistemas reais.</i></h1>
          <p>Aprenda a construir softwares completos, do design ao deploy. O curso mais completo de Desenvolvimento de Sistemas do SENAI.</p>
          <div className="hero-actions">
            <a href="#sobre" className="btn-primary">Começar agora</a>
            <a href="#aprender" className="btn-ghost">Ver grade →</a>
          </div>
        </div>
        <div className="hero-img">
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" alt="code" />
        </div>
      </div>
    </section>

    <section id="sobre" className="secao">
      <span className="secao-label">Sobre o curso</span>
      <h2>Formação completa para o mercado</h2>
      <p className="secao-desc">Desenvolvimento de Sistemas é a arte de resolver problemas com código. Você aprende a criar desde sites até apps e APIs usadas por milhares.</p>
    </section>

    <section id="aprender" className="secao" style={{paddingTop:0}}>
      <div className="container">
        <div className="grid">
          {[
            {t:"Lógica de Programação",d:"Base sólida para qualquer linguagem."},
            {t:"Frontend Moderno",d:"React, interfaces responsivas e acessíveis."},
            {t:"Backend & APIs",d:"Node.js, regras de negócio e autenticação."},
            {t:"Banco de Dados",d:"SQL, modelagem e performance."},
            {t:"Apps",d:"Criação de aplicativos reais."},
            {t:"Git & GitHub",d:"Versionamento profissional."}
          ].map(c=>
            <div className="card-pro" key={c.t}>
              <div className="card-icon">◍</div>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          )}
        </div>
      </div>
    </section>

    <section id="tecnologias" className="secao secao-dark">
      <div className="container">
        <span className="secao-label">Stack</span>
        <h2>Tecnologias que você domina</h2>
        <div className="grid">
          {["HTML5","CSS3","JavaScript","React","Node.js","SQL","Git","GitHub"].map(t=>
            <div className="card-pro card-dark" key={t}>
              <h3>{t}</h3>
              <p>Tecnologia essencial do mercado.</p>
            </div>
          )}
        </div>
      </div>
    </section>

    <section id="projetos" className="secao">
      <div className="container">
        <span className="secao-label">Portfólio</span>
        <h2>O que você vai construir</h2>
        <div className="grid">
          {["Sistema de Clientes","Controle de Estoque","Agendamento Online","Loja Virtual","Dashboard Admin","App de Tarefas"].map(p=>
            <div className="card-pro" key={p}>
              <h3>{p}</h3>
              <p>Projeto real para seu portfólio no GitHub.</p>
            </div>
          )}
        </div>
      </div>
    </section>

    <section className="cta">
      <div className="container">
        <div className="cta-box">
          <h2>Seu futuro em tech começa aqui.</h2>
          <p>Técnico em Desenvolvimento de Sistemas - SENAI 2026</p>
          <a href="#inicio" className="btn-primary">Garantir minha vaga</a>
        </div>
      </div>
    </section>

    <footer className="footer">
      <div className="container">
        <p><b>Técnico em Desenvolvimento de Sistemas</b> | SENAI Santa Catarina - 2026</p>
        <p>Desenvolvido por Ananda Steinmetz • anandanunes-bit</p>
      </div>
    </footer>
  </>
 )
}

export default App
