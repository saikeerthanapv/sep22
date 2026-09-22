import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="page">

      <Header />

      <main>

        <section className="hero">

          <p className="date">
            Tuesday, September 22, 2026
          </p>

          <h1>
            News that gives you the full picture.
          </h1>

          <p className="subtitle">
            Clear reporting, thoughtful analysis, and stories worth your attention.
          </p>

        </section>

      </main>

      <Footer />

    </div>
  )
}

export default App
