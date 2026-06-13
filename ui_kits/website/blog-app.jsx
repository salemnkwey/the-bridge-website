/* The Bridge Center — Blog page mount */
const { useState: useBlAppState, useEffect: useBlAppEffect } = React;

function BlogApp() {
  const [auth, setAuth] = useBlAppState(null);
  useBlAppEffect(() => {
    document.body.style.overflow = auth ? "hidden" : "";
    window.lucide && window.lucide.createIcons();
  });
  useBlAppEffect(() => {
    let r1 = requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
    const t = setInterval(() => window.lucide && window.lucide.createIcons(), 600);
    setTimeout(() => clearInterval(t), 3500);
    return () => { cancelAnimationFrame(r1); clearInterval(t); };
  }, []);
  return (
    <React.Fragment>
      <Header onAuth={setAuth} active="Blog" />
      <main>
        <BlogHeader />
        <BlogPage />
        <FinalCTA onAuth={setAuth} />
      </main>
      <Footer />
      {auth && <AuthModal mode={auth} onClose={() => setAuth(null)} onSwitch={setAuth} />}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<BlogApp />);
requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
