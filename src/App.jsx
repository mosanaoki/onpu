import { useState } from 'react'
import './App.css'

const floatingNotes = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  emoji: ['🎵', '🎶', '🎀', '🩷', '✨'][i % 5],
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 10}s`,
  duration: `${10 + Math.random() * 15}s`,
  size: `${1 + Math.random() * 1.5}rem`,
}))

function App() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
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
        <div className="hero-ribbon">🎀</div>
        <h1>おんぷちゃん</h1>
        <p className="hero-sub">西中島48 リーダー</p>
        <p className="hero-catchphrase">
          「みんなのハートにおんぷをとどけるよ♪」
        </p>
      </section>

      {/* Profile */}
      <section className="section" id="profile">
        <h2 className="section-title">プロフィール</h2>
        <div className="profile-card">
          <div className="profile-avatar">
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

      {/* Likes */}
      <section className="section" id="likes">
        <h2 className="section-title">おんぷちゃんのすきなもの</h2>
        <div className="likes-grid">
          <div className="like-card">
            <div className="like-icon">🩷</div>
            <h3>ピンク色</h3>
            <p>
              おんぷちゃんの世界はピンクでいっぱい！
              衣装もお部屋もネイルもぜーんぶピンク。
              「ピンクは世界を平和にする色やねん！」
            </p>
          </div>
          <div className="like-card">
            <div className="like-icon">🎀</div>
            <h3>ハローキティ</h3>
            <p>
              キティちゃんが大好き！
              キティグッズのコレクションは100個以上。
              サンリオピューロランドは聖地巡礼やで！
            </p>
          </div>
          <div className="like-card">
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

      {/* Gallery */}
      <section className="section" id="gallery">
        <h2 className="section-title">ギャラリー</h2>
        <div className="gallery-grid">
          <div className="gallery-item">🎀</div>
          <div className="gallery-item">🩷</div>
          <div className="gallery-item">🎤</div>
          <div className="gallery-item">✨</div>
          <div className="gallery-item">🌸</div>
          <div className="gallery-item">🎵</div>
        </div>
      </section>

      {/* Schedule */}
      <section className="section" id="schedule">
        <h2 className="section-title">スケジュール</h2>
        <div className="schedule-list">
          <div className="schedule-item">
            <div className="schedule-date">2026.03.15</div>
            <div className="schedule-info">
              <h3>西中島48 春の単独ライブ</h3>
              <p>なんばグランド花月 / 開場 17:00 開演 18:00</p>
            </div>
          </div>
          <div className="schedule-item">
            <div className="schedule-date">2026.04.01</div>
            <div className="schedule-info">
              <h3>ニューシングル「ピンクの魔法」リリース</h3>
              <p>おんぷちゃん初のセンター曲！</p>
            </div>
          </div>
          <div className="schedule-item">
            <div className="schedule-date">2026.04.20</div>
            <div className="schedule-info">
              <h3>握手会 & サイン会</h3>
              <p>あべのハルカス 特設ステージ / 13:00〜17:00</p>
            </div>
          </div>
          <div className="schedule-item">
            <div className="schedule-date">2026.05.05</div>
            <div className="schedule-info">
              <h3>サンリオコラボイベント</h3>
              <p>サンリオピューロランド / キティちゃんと夢の共演！</p>
            </div>
          </div>
        </div>
      </section>

      {/* Message */}
      <section className="section" id="message">
        <h2 className="section-title">おんぷちゃんからのメッセージ</h2>
        <div className="message-box">
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

      {/* Fan Letter */}
      <section className="section" id="fan">
        <h2 className="section-title">ファンレター</h2>
        {submitted ? (
          <div className="message-box">
            <p className="message-text">
              メッセージありがとう！🎀<br />
              おんぷちゃんに届けるね♪
            </p>
          </div>
        ) : (
          <form className="fan-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="お名前（ニックネーム）" required />
            <textarea placeholder="おんぷちゃんへのメッセージを書いてね♪" required />
            <button type="submit">🩷 メッセージを送る</button>
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
    </>
  )
}

export default App
