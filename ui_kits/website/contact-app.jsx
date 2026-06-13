/* The Bridge Center — Contact page mount */
const { useState: useCoAppState, useEffect: useCoAppEffect } = React;

function ContactApp() {
  const [auth, setAuth] = useCoAppState(null);
  useCoAppEffect(() => {
    document.body.style.overflow = auth ? "hidden" : "";
    window.lucide && window.lucide.createIcons();
  });
  useCoAppEffect(() => {
    let r1 = requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
    const t = setInterval(() => window.lucide && window.lucide.createIcons(), 600);
    setTimeout(() => clearInterval(t), 3500);
    return () => { cancelAnimationFrame(r1); clearInterval(t); };
  }, []);
  return (
    <React.Fragment>
      <Header onAuth={setAuth} active="Contact" />
      <main>
        <ContactHeader />
        <ContactMain />
        <MapPlaceholder />
        <ContactFAQ />
      </main>
      <Footer />
      {auth && <AuthModal mode={auth} onClose={() => setAuth(null)} onSwitch={setAuth} />}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ContactApp />);
requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
