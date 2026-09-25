import './App.css'

const CANVA_EMBED_URL =
  'https://www.canva.com/design/DAHWL5bZ3oo/LO1B40JFQen3UCZxMsSGFQ/view?embed'

function App() {
  return (
    <main className="canva-page">
      <iframe
        className="canva-embed"
        src={CANVA_EMBED_URL}
        title="Canva design by Jai Ramachandran"
        loading="eager"
        allow="fullscreen"
        allowFullScreen
      />
    </main>
  )
}

export default App
