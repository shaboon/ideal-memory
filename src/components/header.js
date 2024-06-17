import resume from "../assets/link-logos/icons8-resume-50.png";
import home from "../assets/link-logos/icons8-home-90.png";
import github from "../assets/link-logos/github.png";
import linkedIn from "../assets/link-logos/linkedin.png";

export default function Header() {
  // Scroll Percentage/Progress Bar Math - Could Be Used with Modal to ask to contact me perhaps?
  // $(window).on("scroll", function () {
  //   var s = $(window).scrollTop(),
  //     d = $(document).height(),
  //     c = $(window).height();

  //   var scrollPercent = (s / (d - c)) * 100;

  //   console.clear();
  //   console.log(scrollPercent);
  // });

  return (
    <header className="header w-screen absolute bottom-0 left-0 bg-gradient-to-t from-gray-700 to-transparent z-50">
      <ul className="">
        <li className="inline home">
          <a title="Home" className="nav" href="/">
            <button>
              <img src={home}></img>
            </button>
          </a>
        </li>
        <li className="inline resume">
          <a title="My Resume" className="nav" href="/resume">
            <button>
              <img src={resume}></img>
            </button>
          </a>
        </li>
        <li className="inline linkedIn">
          <a
            title="My LinkedIn"
            className="nav"
            href="https://www.linkedin.com/in/sean-haboon-6494501a7/"
            target="_blank"
          >
            <button>
              <img src={linkedIn}></img>
            </button>
          </a>
        </li>
        <li className="inline github">
          <a
            title="My GitHub"
            className="nav"
            href="https://github.com/shaboon"
            target="_blank"
          >
            <button>
              <img src={github}></img>
            </button>
          </a>
        </li>
      </ul>

      <p className="text-gray-200 text-2xl"></p>
    </header>
  );
}
