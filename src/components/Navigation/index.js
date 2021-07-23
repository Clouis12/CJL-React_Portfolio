import "./style.css"; 


export function Navigation(props){

    return (
      <header className="cjl-Navigation">
        <nav className="cjl-Navigation">
          <a className="cjl-Navigation" href="#about">
            About Me
          </a>
          <a className="cjl-Navigation" href="#work">
            Work
          </a>
          <a className="cjl-Navigation" href="#contact">
            Contact Me
          </a>
          <a
            className="cjl-Navigation"
            href="./assets/pdfs/resume.docx"
            download
          >
            Resume
          </a>
        </nav>
      </header>
    );
}