import { useEffect, useState } from 'react';

const LEETCODE_USERNAME = 'xWUWlV65OV';
const LEETCODE_API = `https://alfa-leetcode-api.onrender.com/userProfile/${LEETCODE_USERNAME}`;

export default function Competitive() {
  const [leetcode, setLeetcode] = useState(null);
  const [leetcodeError, setLeetcodeError] = useState(false);

  useEffect(() => {
    let active = true;

    fetch(LEETCODE_API)
      .then(response => {
        if (!response.ok) throw new Error('Unable to load LeetCode data');
        return response.json();
      })
      .then(data => {
        if (active) setLeetcode(data);
      })
      .catch(() => {
        if (active) setLeetcodeError(true);
      });

    return () => {
      active = false;
    };
  }, []);

  const solved = leetcode?.totalSolved ?? 196;
  const totalQuestions = leetcode?.totalQuestions ?? 4069;
  const easySolved = leetcode?.easySolved ?? 82;
  const mediumSolved = leetcode?.mediumSolved ?? 88;
  const hardSolved = leetcode?.hardSolved ?? 26;
  const recentQuestions = (leetcode?.recentSubmissions ?? [])
    .filter(submission => submission.statusDisplay === 'Accepted')
    .filter((submission, index, submissions) => (
      submissions.findIndex(item => item.titleSlug === submission.titleSlug) === index
    ))
    .slice(0, 8);

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
          <article className="comp-card" data-reveal="true" style={{ '--ring': '#f59e0b', '--progress': `${(solved / totalQuestions) * 100}%` }}>
            <div className="comp-top">
              <div className="comp-platform comp-platform--leetcode">
                <span className="comp-platform-dot" aria-hidden="true"></span>
                LeetCode
              </div>
            </div>

            <div className="comp-ring" aria-hidden="true">
              <div className="comp-ring-inner">
                <div className="comp-ring-value">{solved}/{totalQuestions}</div>
                <div className="comp-ring-label">Solved</div>
              </div>
            </div>

            <div className="comp-stats" aria-label="LeetCode breakdown">
              <span className="stat-pill stat-pill--easy">Easy {easySolved}/{leetcode?.totalEasy ?? 968}</span>
              <span className="stat-pill stat-pill--med">Med {mediumSolved}/{leetcode?.totalMedium ?? 2122}</span>
              <span className="stat-pill stat-pill--hard">Hard {hardSolved}/{leetcode?.totalHard ?? 979}</span>
            </div>

            <div className="recent-questions">
              <div className="recent-questions-heading">
                <span>Recent accepted questions</span>
                {leetcode && <span className="live-indicator">LIVE</span>}
              </div>
              {recentQuestions.length > 0 ? (
                <ul className="recent-question-list">
                  {recentQuestions.map(question => (
                    <li key={`${question.titleSlug}-${question.timestamp}`}>
                      <a href={`https://leetcode.com/problems/${question.titleSlug}/`} target="_blank" rel="noreferrer">
                        {question.title}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="recent-questions-status">
                  {leetcodeError ? 'Recent questions are temporarily unavailable.' : 'Loading recent questions...'}
                </p>
              )}
            </div>

            <div className="comp-actions">
              <a className="button small" href="https://leetcode.com/u/xWUWlV65OV/" target="_blank" rel="noreferrer">View Profile</a>
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
