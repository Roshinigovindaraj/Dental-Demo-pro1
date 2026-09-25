import './App.css'

function App() {
  return (
    <main className="canva-page">
      <div className="canva-embed-wrapper">
        <iframe
          loading="lazy"
          className="canva-embed"
          src="https://www.canva.com/design/DAHWMsC3diQ/SbrD8uJWTJabL_WCOpghwQ/view?embed"
          title="Untitled (1024 x 1536 px) by Roshini"
          allowFullScreen
          allow="fullscreen"
        />
      </div>
      <p className="canva-credit">
        <a
          href="https://www.canva.com/design/DAHWMsC3diQ/SbrD8uJWTJabL_WCOpghwQ/view?utm_content=DAHWMsC3diQ&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Untitled (1024 x 1536 px)
        </a>{' '}
        by Roshini
      </p>
    </main>
  )
}

export default App
