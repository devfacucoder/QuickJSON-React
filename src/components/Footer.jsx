function Footer() {
  return (
    <footer className="bg-slate-800 w-screen flex flex-col items-center justify-center h-32 p-4 ">
      <h3 className="text-white">
        Repo
        <a
          className="text-blue-600"
          href="https://github.com/devfacucoder/QuickJSON"
        >
          QuickJSON
        </a>
      </h3>
      <h3 className="text-white">
        My github{" "}
        <a className="text-blue-600" href="https://github.com/devfacucoder">
          devfacucoder
        </a>
      </h3>
    </footer>
  );
}

export default Footer;
