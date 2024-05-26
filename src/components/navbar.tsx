import Container from "./container";

const Navbar = async () => {
  return (
    <>
      <div className="border-b">
        <Container>
          <nav>
            <div className="relative pl-0 px-2 sm:px-2 md:px-4 flex justify-between h-16 items-center font-bold text-xl">
              WSWF
            </div>
          </nav>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
