import { useState, useEffect, useRef } from 'react'
import './App.css'

const floatingNotes = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  emoji: ['🎵', '🎶', '🎀', '🩷', '✨', '🌸', '💖', '⭐'][i % 8],
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 12}s`,
  duration: `${8 + Math.random() * 18}s`,
  size: `${1 + Math.random() * 1.8}rem`,
}))

const heroSparkles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  emoji: ['✨', '⭐', '💫', '🌟'][i % 4],
  top: `${10 + Math.random() * 80}%`,
  left: `${5 + Math.random() * 90}%`,
  delay: `${Math.random() * 3}s`,
  duration: `${1.5 + Math.random() * 2}s`,
}))

const heartRainDrops = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  emoji: ['🩷', '💗', '💖', '💕'][i % 4],
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 8}s`,
  duration: `${5 + Math.random() * 8}s`,
  size: `${0.8 + Math.random() * 1.2}rem`,
}))

const tickerText = '🎀 西中島48 おんぷちゃん公式ファンサイト 🩷 ニューシングル「ピンクの魔法」4/1リリース 🌸 春の単独ライブ 3/15 チケット好評発売中 ✨ サンリオコラボイベント開催決定 💖 '

function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const el = ref.current
    if (el) {
      const revealElements = el.querySelectorAll('.reveal')
      revealElements.forEach((child) => observer.observe(child))
    }

    return () => observer.disconnect()
  }, [])

  return ref
}

function App() {
  const [submitted, setSubmitted] = useState(false)
  const appRef = useScrollReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div ref={appRef}>
      {/* Floating background decorations */}
      <div className="floating-notes">
        {floatingNotes.map((note) => (
          <span
            key={note.id}
            className="note"
            style={{
              left: note.left,
              animationDelay: note.delay,
              animationDuration: note.duration,
              fontSize: note.size,
            }}
          >
            {note.emoji}
          </span>
        ))}
      </div>

      {/* Ticker */}
      <div className="ticker">
        <div className="ticker-inner">
          {tickerText}{tickerText}
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <a href="#" className="header-logo">
          🎀 おんぷちゃん<span>Official Fan Site</span>
        </a>
        <nav>
          <ul className="nav-links">
            <li><a href="#profile">プロフィール</a></li>
            <li><a href="#likes">すきなもの</a></li>
            <li><a href="#gallery">ギャラリー</a></li>
            <li><a href="#schedule">スケジュール</a></li>
            <li><a href="#message">メッセージ</a></li>
            <li><a href="#fan">ファンレター</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-sparkles">
          {heroSparkles.map((s) => (
            <span
              key={s.id}
              className="sparkle"
              style={{
                top: s.top,
                left: s.left,
                animationDelay: s.delay,
                animationDuration: s.duration,
              }}
            >
              {s.emoji}
            </span>
          ))}
        </div>
        <div className="heart-rain">
          {heartRainDrops.map((h) => (
            <span
              key={h.id}
              className="heart-drop"
              style={{
                left: h.left,
                animationDelay: h.delay,
                animationDuration: h.duration,
                fontSize: h.size,
              }}
            >
              {h.emoji}
            </span>
          ))}
        </div>
        <div className="hero-ribbon">🎀</div>
        <h1>おんぷちゃん</h1>
        <p className="hero-sub">西中島48 リーダー</p>
        <p className="hero-catchphrase">
          「みんなのハートにおんぷをとどけるよ♪」
        </p>
      </section>

      <div className="kawaii-divider">🩷 🎀 🩷 🎀 🩷</div>

      {/* Profile */}
      <section className="section" id="profile">
        <h2 className="section-title reveal" data-icon="🎀">プロフィール</h2>
        <div className="profile-card reveal">
          <div className="profile-avatar">
            <div className="avatar-ring" />
            <div className="avatar-placeholder">🎀</div>
          </div>
          <div className="profile-info">
            <h3 className="profile-name">おんぷ</h3>
            <p className="profile-role">西中島48 リーダー / センター</p>
            <table className="profile-table">
              <tbody>
                <tr>
                  <th>グループ</th>
                  <td>西中島48</td>
                </tr>
                <tr>
                  <th>ポジション</th>
                  <td>リーダー / センター</td>
                </tr>
                <tr>
                  <th>出身地</th>
                  <td>大阪府</td>
                </tr>
                <tr>
                  <th>身長</th>
                  <td>150cm</td>
                </tr>
                <tr>
                  <th>好きな色</th>
                  <td>ピンク 🩷</td>
                </tr>
                <tr>
                  <th>好きなキャラ</th>
                  <td>ハローキティ 🎀</td>
                </tr>
                <tr>
                  <th>チャームポイント</th>
                  <td>笑顔とピンクのリボン</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="kawaii-divider">✨ 💖 ✨ 💖 ✨</div>

      {/* Likes */}
      <section className="section" id="likes">
        <h2 className="section-title reveal" data-icon="🩷">おんぷちゃんのすきなもの</h2>
        <div className="likes-grid">
          <div className="like-card reveal">
            <div className="like-icon">🩷</div>
            <h3>ピンク色</h3>
            <p>
              おんぷちゃんの世界はピンクでいっぱい！
              衣装もお部屋もネイルもぜーんぶピンク。
              「ピンクは世界を平和にする色やねん！」
            </p>
          </div>
          <div className="like-card reveal">
            <div className="like-icon">🎀</div>
            <h3>ハローキティ</h3>
            <p>
              キティちゃんが大好き！
              キティグッズのコレクションは100個以上。
              サンリオピューロランドは聖地巡礼やで！
            </p>
          </div>
          <div className="like-card reveal">
            <div className="like-icon">🎤</div>
            <h3>歌とダンス</h3>
            <p>
              西中島48のセンターとして
              毎日レッスンに励んでるよ！
              ライブでファンのみんなに会えるのが一番の幸せ。
            </p>
          </div>
        </div>
      </section>

      <div className="kawaii-divider">🌸 🎵 🌸 🎵 🌸</div>

      {/* Gallery */}
      <section className="section" id="gallery">
        <h2 className="section-title reveal" data-icon="📸">ギャラリー</h2>
        <div className="gallery-grid">
          {['🎀', '🩷', '🎤', '✨', '🌸', '🎵'].map((emoji, i) => (
            <div key={i} className="gallery-item reveal">
              {emoji}
            </div>
          ))}
        </div>
      </section>

      <div className="kawaii-divider">💫 🎀 💫 🎀 💫</div>

      {/* Schedule */}
      <section className="section" id="schedule">
        <h2 className="section-title reveal" data-icon="📅">スケジュール</h2>
        <div className="schedule-list">
          <div className="schedule-item reveal">
            <div className="schedule-date">2026.03.15</div>
            <div className="schedule-info">
              <h3>
                西中島48 春の単独ライブ
                <span className="schedule-new">NEW</span>
              </h3>
              <p>なんばグランド花月 / 開場 17:00 開演 18:00</p>
            </div>
          </div>
          <div className="schedule-item reveal">
            <div className="schedule-date">2026.04.01</div>
            <div className="schedule-info">
              <h3>
                ニューシングル「ピンクの魔法」リリース
                <span className="schedule-new">NEW</span>
              </h3>
              <p>おんぷちゃん初のセンター曲！</p>
            </div>
          </div>
          <div className="schedule-item reveal">
            <div className="schedule-date">2026.04.20</div>
            <div className="schedule-info">
              <h3>握手会 & サイン会</h3>
              <p>あべのハルカス 特設ステージ / 13:00〜17:00</p>
            </div>
          </div>
          <div className="schedule-item reveal">
            <div className="schedule-date">2026.05.05</div>
            <div className="schedule-info">
              <h3>サンリオコラボイベント</h3>
              <p>サンリオピューロランド / キティちゃんと夢の共演！</p>
            </div>
          </div>
        </div>
      </section>

      <div className="kawaii-divider">🩷 ✨ 🩷 ✨ 🩷</div>

      {/* Message */}
      <section className="section" id="message">
        <h2 className="section-title reveal" data-icon="💌">おんぷちゃんからのメッセージ</h2>
        <div className="message-box reveal">
          <div className="message-deco">
            <span style={{ top: '10%', left: '5%', animationDelay: '0s' }}>🎀</span>
            <span style={{ top: '20%', right: '8%', animationDelay: '1s' }}>🩷</span>
            <span style={{ bottom: '15%', left: '10%', animationDelay: '2s' }}>✨</span>
            <span style={{ bottom: '10%', right: '5%', animationDelay: '1.5s' }}>🌸</span>
          </div>
          <p className="message-text">
            いつも応援してくれてほんまにありがとう！<br />
            みんながおってくれるから、おんぷは毎日がんばれるねん。<br />
            ピンクのリボンに願いをこめて、<br />
            みんなに最高の笑顔とおんぷをとどけるよ♪<br />
            これからも西中島48をよろしくな！
          </p>
          <p className="message-sign">--- おんぷ 🎀</p>
        </div>
      </section>

      <div className="kawaii-divider">💖 🎵 💖 🎵 💖</div>

      {/* Fan Letter */}
      <section className="section" id="fan">
        <h2 className="section-title reveal" data-icon="💌">ファンレター</h2>
        {submitted ? (
          <div className="message-box success-box reveal visible">
            <p className="message-text">
              メッセージありがとう！🎀<br />
              おんぷちゃんに届けるね♪<br />
              🩷💖🩷
            </p>
          </div>
        ) : (
          <form className="fan-form reveal" onSubmit={handleSubmit}>
            <input type="text" placeholder="お名前（ニックネーム）" required />
            <textarea placeholder="おんぷちゃんへのメッセージを書いてね♪" required />
            <button type="submit">🩷 メッセージを送る 🩷</button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-hearts">🩷 🎀 🩷</div>
        <p>&copy; 2026 おんぷちゃん公式ファンサイト | 西中島48</p>
        <div className="footer-links">
          <a href="#">ホーム</a>
          <a href="#profile">プロフィール</a>
          <a href="#schedule">スケジュール</a>
        </div>
      </footer>
    </div>
  )
}

export default App
