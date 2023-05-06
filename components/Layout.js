const Layout = ({ children }) => {
  return (
    <div className={classNames({ "bg-dark": dark, "bg-light": !dark })}>
      <Navbar />
      <main className="container py-4">
       
        
        {children}
      </main>

     
    </div>
  );
};

/* Layout.proptypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  footer: PropTypes.bool,
};
 */
export default Layout;
