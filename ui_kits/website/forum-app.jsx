/* The Bridge Center — Forum page mount */
const { useState: useFoAppState, useEffect: useFoAppEffect } = React;

function ForumApp() {
  const [auth, setAuth] = useFoAppState(null);
  useFoAppEffect(() => {
    document.body.style.overflow = auth ? "hidden" : "";
    window.lucide && window.lucide.createIcons();
  });
  useFoAppEffect(() => {
    let r1 = requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
    const t = setInterval(() => window.lucide && window.lucide.createIcons(), 600);
    setTimeout(() => clearInterval(t), 3500);
    return () => { cancelAnimationFrame(r1); clearInterval(t); };
  }, []);
  return (
    <React.Fragment>
      <Header onAuth={setAuth} active="Forum" />
      <main>
        <ForumHeader />
        <ForumPage onAuth={setAuth} />
        <FinalCTA onAuth={setAuth} />
      </main>
      <Footer />
      {auth && <AuthModal mode={auth} onClose={() => setAuth(null)} onSwitch={setAuth} />}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ForumApp />);
requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
