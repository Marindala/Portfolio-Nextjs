const Layout = ({ children }) => {
  return (
    <> {/* fragment */}
     {/*  <Navbar /> */}
      <main className="container py-4">
       
       
      {children}
        
      </main>

     
    </>
  );
};

/* Layout.proptypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  footer: PropTypes.bool,
};
 */
export default Layout;
