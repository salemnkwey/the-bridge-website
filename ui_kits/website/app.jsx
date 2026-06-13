/* The Bridge Center — Accueil page assembly (AuthModal lives in auth.jsx) */
const { useState: useAppState, useEffect: useAppEffect } = React;

function App() {
  const [auth, setAuth] = useAppState(null);
  useAppEffect(() => {
    document.body.style.overflow = auth ? "hidden" : "";
    window.lucide && window.lucide.createIcons();
  });
  useAppEffect(() => {
    let r1 = requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
    const t = setInterval(() => window.lucide && window.lucide.createIcons(), 600);
    setTimeout(() => clearInterval(t), 3500);
    return () => { cancelAnimationFrame(r1); clearInterval(t); };
  }, []);
  return (
    <React.Fragment>
      <Header onAuth={setAuth} />
      <main>
        <Hero onAuth={setAuth} />
        <StatsBand />
        <AboutPreview />
        <Method />
        <FeaturedCourses />
        <HowItWorks />
        <Testimonials />
        <BlogPreview />
        <ForumCTA />
        <FinalCTA onAuth={setAuth} />
      </main>
      <Footer />
      {auth && <AuthModal mode={auth} onClose={() => setAuth(null)} onSwitch={setAuth} />}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
