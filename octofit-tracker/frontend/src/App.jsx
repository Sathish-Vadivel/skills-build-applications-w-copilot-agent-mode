import './App.css'

function App() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              <h1 className="display-6 fw-bold mb-3">OctoFit Tracker</h1>
              <p className="lead text-muted mb-4">
                A modern multi-tier fitness and team tracking experience.
              </p>
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="p-3 rounded bg-light">
                    <h2 className="h6">Activities</h2>
                    <p className="small text-muted mb-0">Log workouts and progress.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3 rounded bg-light">
                    <h2 className="h6">Teams</h2>
                    <p className="small text-muted mb-0">Create and manage groups.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3 rounded bg-light">
                    <h2 className="h6">Leaderboard</h2>
                    <p className="small text-muted mb-0">Stay motivated with rankings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
