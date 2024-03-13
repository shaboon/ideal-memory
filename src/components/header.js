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
    <header className="header w-screen absolute bottom-0 left-0 bg-black bg-gradient-to-t from-current to-gray-700">
      <ul>
        <li className="github">
          <a className="" href="">
            <button>
              <img></img>
            </button>
          </a>
        </li>
        <li className="resume">
          <a className="" href="/resume">
            <button>
              <img></img>
            </button>
          </a>
        </li>
        <li className="home">
          <a className="" href="/">
            <button>
              <img></img>
            </button>
          </a>
        </li>
        <li className="linkedIn">
          <a className="">
            <button>
              <img></img>
            </button>
          </a>
        </li>
      </ul>

      <p className="text-gray-200 text-2xl"></p>
    </header>
  );
}
