/* The Bridge Center — À propos page mount */
const { useState: useApAppState, useEffect: useApAppEffect } = React;

function AproposApp() {
  const [auth, setAuth] = useApAppState(null);
  useApAppEffect(() => {
    document.body.style.overflow = auth ? "hidden" : "";
    window.lucide && window.lucide.createIcons();
  });
  useApAppEffect(() => {
    let r1 = requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
    const t = setInterval(() => window.lucide && window.lucide.createIcons(), 600);
    setTimeout(() => clearInterval(t), 3500);
    return () => { cancelAnimationFrame(r1); clearInterval(t); };
  }, []);
  return (
    <React.Fragment>
      <Header onAuth={setAuth} active="À propos" />
      <main>
        <AboutHeader />
        <Story />
        <Values />
        <Methodology />
        <Team />
        <AboutStats />
        <FinalCTA onAuth={setAuth} />
      </main>
      <Footer />
      {auth && <AuthModal mode={auth} onClose={() => setAuth(null)} onSwitch={setAuth} />}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AproposApp />);
requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
