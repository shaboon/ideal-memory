export default function Header() {
  // Scroll Percentage/Progress Bar Math - Could Be Used with Modal to ask to contact me perhaps?
  $(window).on("scroll", function () {
    var s = $(window).scrollTop(),
      d = $(document).height(),
      c = $(window).height();

    var scrollPercent = (s / (d - c)) * 100;

    console.clear();
    console.log(scrollPercent);
  });

  return (
    <footer className="footer w-screen absolute bottom-0 left-0 bg-black bg-gradient-to-t from-current to-gray-700">
      <ul>
        <li className="">
          <a className="">
            <img></img>
          </a>
        </li>
        <li className="">
          <a className="">
            <img></img>
          </a>
        </li>
        <li className="">
          <a className="">
            <img></img>
          </a>
        </li>
        <li className="">
          <a className="">
            <img></img>
          </a>
        </li>
      </ul>

      <p className="text-gray-200 text-2xl"></p>
    </footer>
  );
}
