function Header() {
  return (
    <header className="flex flex-col items-center gap-6">
      <div className="text-2xl text-center font-light flex flex-col gap-2">
        <p className="text-VeryDarkBlue">Reliable, efficient delivery</p>
        <p className="font-semibold">Powered by Technology</p>
      </div>
      <p className="text-GrayishBlue text-center text-sm">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </header>
  );
}

export default Header;
