/* The Bridge Center — Formations page mount */
const { useState: useFAppState, useEffect: useFAppEffect } = React;

function FormationsApp() {
  const [auth, setAuth] = useFAppState(null);
  useFAppEffect(() => {
    document.body.style.overflow = auth ? "hidden" : "";
    window.lucide && window.lucide.createIcons();
  });
  useFAppEffect(() => {
    let r1 = requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
    const t = setInterval(() => window.lucide && window.lucide.createIcons(), 600);
    setTimeout(() => clearInterval(t), 3500);
    return () => { cancelAnimationFrame(r1); clearInterval(t); };
  }, []);
  return (
    <React.Fragment>
      <Header onAuth={setAuth} active="Formations" />
      <main>
        <FormationsHeader />
        <FormationsCatalogue />
        <FinalCTA onAuth={setAuth} />
      </main>
      <Footer />
      {auth && <AuthModal mode={auth} onClose={() => setAuth(null)} onSwitch={setAuth} />}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<FormationsApp />);
requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
