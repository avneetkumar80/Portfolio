export default function GitHubStats() {
  const username = "avneetkumar80";

  return (
    <section className="section" id="github">
      <div className="container">
        <div className="section-head" data-reveal="true">
          <div className="section-kicker">
            <span className="kicker-line" aria-hidden="true"></span>
            <span>OPEN SOURCE</span>
          </div>
          <h2>GitHub Activity</h2>
          <p className="muted">My contributions and coding activity on GitHub.</p>
        </div>

        <div className="github-grid" data-reveal="true">
          <div className="github-card">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=22d3ee&icon_color=a78bfa&text_color=e5e7eb`}
              alt="GitHub Stats"
              loading="lazy"
            />
          </div>
          <div className="github-card">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=22d3ee&text_color=e5e7eb`}
              alt="Top Languages"
              loading="lazy"
            />
          </div>
          <div className="github-card github-card--wide">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0d1117&ring=22d3ee&fire=a78bfa&currStreakLabel=22d3ee`}
              alt="GitHub Streak"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
