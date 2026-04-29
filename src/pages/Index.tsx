const Index = () => {
  return (
    <iframe
      src={`/lp/index.html?v=${Date.now()}`}
      title="Inpullse - Marmorarias"
      className="fixed inset-0 h-screen w-screen border-0"
    />
  );
};

export default Index;
