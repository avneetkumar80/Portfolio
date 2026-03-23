export default function Competitive() {
  return (
    <section className="section" id="competitive">
      <div className="container">
        <div className="section-head" data-reveal="true">
          <div className="section-kicker">
            <span className="kicker-line" aria-hidden="true"></span>
            <span>CODING PROFILE</span>
          </div>
          <h2>Coding Fortune</h2>
          <p className="muted">LeetCode and HackerRank stats and quick links.</p>
        </div>

        <div className="comp-grid" aria-label="Competitive programming profiles">
          <article className="comp-card" data-reveal="true" style={{ '--ring': '#f59e0b', '--progress': '35%' }}>
            <div className="comp-top">
              <div className="comp-platform comp-platform--leetcode">
                <span className="comp-platform-dot" aria-hidden="true"></span>
                LeetCode
              </div>
            </div>

            <div className="comp-ring" aria-hidden="true">
              <div className="comp-ring-inner">
                <div className="comp-ring-value">35/3878</div>
                <div className="comp-ring-label">Solved</div>
              </div>
            </div>

            <div className="comp-stats" aria-label="LeetCode breakdown">
              <span className="stat-pill stat-pill--easy">Easy 25/933</span>
              <span className="stat-pill stat-pill--med">Med 9/2029</span>
              <span className="stat-pill stat-pill--hard">Hard 1/916</span>
            </div>

            <div className="comp-actions">
              <a className="button small" href="https://leetcode.com/u/xWUWlV65OV/" target="_blank" rel="noreferrer">View Profile</a>
              <a className="button small ghost" href="https://leetcode.com/u/xWUWlV65OV/" target="_blank" rel="noreferrer">Download Questions (CSV)</a>
            </div>
          </article>

          <article className="comp-card" data-reveal="true" style={{ '--ring': '#22c55e', '--progress': '64%' }}>
            <div className="comp-top">
              <div className="comp-platform comp-platform--hackerrank">
                <span className="comp-platform-dot" aria-hidden="true"></span>
                HackerRank
              </div>
            </div>

            <div className="comp-ring" aria-hidden="true">
              <div className="comp-ring-inner">
                <div className="comp-ring-value">2</div>
                <div className="comp-ring-label">SQL Certs</div>
              </div>
            </div>

            <div className="comp-stats" aria-label="HackerRank breakdown">
              <span className="stat-pill stat-pill--easy">SQL (Basic) Verified</span>
              <span className="stat-pill stat-pill--med">SQL (Intermediate) Verified</span>
              <span className="stat-pill stat-pill--hard">Badges: CPP, Python, C</span>
            </div>

            <div className="comp-actions">
              <a className="button small" href="https://www.hackerrank.com/profile/avneetchaudhary1" target="_blank" rel="noreferrer">View Profile</a>
              <a className="button small ghost" href="https://www.hackerrank.com/profile/avneetchaudhary1" target="_blank" rel="noreferrer">Download Domains (CSV)</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
