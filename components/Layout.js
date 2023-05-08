const Layout = ({ children, footer = true }) => {
  return (
    <div>
      {/* <Components.Navbar /> */}
      <main className="container py-4">{children}</main>

      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; Marina López</h1>
            <p>2000 - {new Date().getFullYear()}</p>{" "}
            {/* obtiene del 200 al año actual */}
            <p>All rights Reserved.</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
