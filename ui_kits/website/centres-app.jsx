/* The Bridge Center — Centres page mount */
const { useState: useCeAppState, useEffect: useCeAppEffect } = React;

function CentresApp() {
  const [auth, setAuth] = useCeAppState(null);
  useCeAppEffect(() => {
    document.body.style.overflow = auth ? "hidden" : "";
    window.lucide && window.lucide.createIcons();
  });
  useCeAppEffect(() => {
    let r1 = requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
    const t = setInterval(() => window.lucide && window.lucide.createIcons(), 600);
    setTimeout(() => clearInterval(t), 3500);
    return () => { cancelAnimationFrame(r1); clearInterval(t); };
  }, []);
  return (
    <React.Fragment>
      <Header onAuth={setAuth} active="Nos centres" />
      <main>
        <CentresHeader />
        <CentresGrid />
        <OrganisationCours />
        <CentresCTA onAuth={setAuth} />
      </main>
      <Footer />
      {auth && <AuthModal mode={auth} onClose={() => setAuth(null)} onSwitch={setAuth} />}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CentresApp />);
requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
