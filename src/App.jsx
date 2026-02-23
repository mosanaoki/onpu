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

const shopItems = [
  {
    id: 1,
    emoji: '📸',
    name: 'オリジナルチェキ（サイン入り）',
    price: '¥1,500',
    description: 'おんぷちゃん直筆サイン入り！ライブ衣装ver.',
    badge: '大人気',
  },
  {
    id: 2,
    emoji: '📸',
    name: 'チェキ 2ショット券',
    price: '¥2,000',
    description: 'イベント限定！おんぷちゃんと一緒に撮れるよ♪',
    badge: '限定',
  },
  {
    id: 3,
    emoji: '👕',
    name: '推しTシャツ（ピンク）',
    price: '¥3,500',
    description: 'おんぷちゃんデザインのオリジナルTシャツ',
    badge: 'NEW',
  },
  {
    id: 4,
    emoji: '🎀',
    name: 'おそろいリボン',
    price: '¥1,200',
    description: 'おんぷちゃんとおそろいのピンクリボン',
    badge: null,
  },
  {
    id: 5,
    emoji: '🩷',
    name: 'ペンライト（ピンク）',
    price: '¥2,500',
    description: 'ライブ必須アイテム！おんぷカラーのペンライト',
    badge: null,
  },
  {
    id: 6,
    emoji: '✉️',
    name: 'ランダムブロマイドセット',
    price: '¥800',
    description: '全5種からランダムで3枚入り！コンプしてね',
    badge: 'おすすめ',
  },
]

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const closeMenu = () => setMenuOpen(false)

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
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#profile" onClick={closeMenu}>プロフィール</a></li>
            <li><a href="#likes" onClick={closeMenu}>すきなもの</a></li>
            <li><a href="#poem" onClick={closeMenu}>ポエム</a></li>
            <li><a href="#gallery" onClick={closeMenu}>ギャラリー</a></li>
            <li><a href="#shop" onClick={closeMenu}>グッズ</a></li>
            <li><a href="#schedule" onClick={closeMenu}>スケジュール</a></li>
            <li><a href="#message" onClick={closeMenu}>メッセージ</a></li>
            <li><a href="#fan" onClick={closeMenu}>ファンレター</a></li>
          </ul>
        </nav>
        {menuOpen && <div className="nav-overlay" onClick={closeMenu} />}
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

      {/* Thailand Live Announcement */}
      <section className="announce-banner">
        <div className="announce-sparkles">
          <span className="sparkle">✨</span>
          <span className="sparkle">🌟</span>
          <span className="sparkle">✨</span>
          <span className="sparkle">💫</span>
          <span className="sparkle">✨</span>
          <span className="sparkle">🌟</span>
          <span className="sparkle">✨</span>
          <span className="sparkle">💫</span>
        </div>
        <div className="announce-content">
          <div className="announce-badge">🎉 BIG NEWS 🎉</div>
          <h2 className="announce-title">
            🇹🇭 タイでライブ決定！！🇹🇭
          </h2>
          <p className="announce-text">
            おんぷちゃん、ついにタイ・バンコクでの<br />
            初海外ワンマンライブが決定しました！！
          </p>
          <div className="announce-details">
            <span>📅 2026.06.14（日）</span>
            <span>📍 バンコク・Thunder Dome</span>
          </div>
          <p className="announce-sub">詳細は後日発表！お楽しみに♪</p>
        </div>
        <div className="announce-sparkles">
          <span className="sparkle">✨</span>
          <span className="sparkle">🌟</span>
          <span className="sparkle">✨</span>
          <span className="sparkle">💫</span>
          <span className="sparkle">✨</span>
          <span className="sparkle">🌟</span>
          <span className="sparkle">✨</span>
          <span className="sparkle">💫</span>
        </div>
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
                  <th>好きな食べ物</th>
                  <td>冷やしラタトゥーユ、辛ラタトゥーユ 🍅</td>
                </tr>
                <tr>
                  <th>好きな映画</th>
                  <td>アバター、レミーのおいしいレストラン 🎬</td>
                </tr>
                <tr>
                  <th>特技</th>
                  <td>猫耳をつけて走り回る、SHEINでの買い物 🐱</td>
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
            <div className="like-icon">🍅</div>
            <h3>ラタトゥーユ</h3>
            <p>
              おんぷの大好物はラタトゥーユ！
              冷やしラタトゥーユも辛ラタトゥーユもどっちも好き。
              「レミーに作ってもらうのが夢やねん♪」
            </p>
          </div>
          <div className="like-card">
            <div className="like-icon">🎬</div>
            <h3>映画鑑賞</h3>
            <p>
              アバターの世界観に憧れてるの！
              あとレミーのおいしいレストランは何回観ても泣いちゃう。
              推し映画についてはいくらでも語れるで！
            </p>
          </div>
          <div className="like-card">
            <div className="like-icon">🐱</div>
            <h3>猫耳 & SHEIN</h3>
            <p>
              特技は猫耳つけて走り回ること！にゃー！
              あとSHEINで可愛い服を見つけるのが得意やねん。
              掘り出しもの見つけたときの喜びはライブ級！
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

      {/* Poem */}
      <section className="section" id="poem">
        <h2 className="section-title">おんぷの秘密のポエム</h2>
        <div className="poem-container">
          <div className="poem-card">
            <div className="poem-deco">🌙</div>
            <p className="poem-text">
              夜空を見上げたら<br />
              一番光ってる星みつけたの<br />
              あれはきっと、きみが<br />
              おんぷのこと応援してくれてる光だね
            </p>
            <span className="poem-tag">#夜空のきみへ</span>
          </div>
          <div className="poem-card">
            <div className="poem-deco">🎀</div>
            <p className="poem-text">
              リボンを結ぶとき いつも思うの<br />
              きょうも可愛くなきゃって<br />
              だって…きみに「可愛い」って<br />
              言ってほしいから…なんてね♪
            </p>
            <span className="poem-tag">#リボンの秘密</span>
          </div>
          <div className="poem-card">
            <div className="poem-deco">🩷</div>
            <p className="poem-text">
              「好き」って気持ちは<br />
              ピンク色に似てると思うねん<br />
              見てるだけでドキドキして<br />
              世界がぜんぶキラキラするから
            </p>
            <span className="poem-tag">#ピンクの気持ち</span>
          </div>
          <div className="poem-card">
            <div className="poem-deco">✨</div>
            <p className="poem-text">
              ステージから見える景色はね<br />
              きみのペンライトの海なの<br />
              その光ひとつひとつが<br />
              おんぷの宝物やねん…えへ
            </p>
            <span className="poem-tag">#ステージの景色</span>
          </div>
          <div className="poem-card">
            <div className="poem-deco">💌</div>
            <p className="poem-text">
              もしも魔法が使えたら<br />
              きみの隣にワープしたいな<br />
              …って、それは魔法じゃなくても<br />
              ライブに来てくれたら叶うよね？
            </p>
            <span className="poem-tag">#魔法よりも</span>
          </div>
          <div className="poem-card">
            <div className="poem-deco">🌸</div>
            <p className="poem-text">
              春風がおんぷの髪をゆらすたび<br />
              きみのこと考えてるの バレちゃうかな<br />
              桜みたいに儚くない<br />
              ずっとずっと応援しててね
            </p>
            <span className="poem-tag">#春風とひみつ</span>
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

      {/* Shop */}
      <section className="section" id="shop">
        <h2 className="section-title">おんぷちゃんグッズ</h2>
        <p className="shop-subtitle">
          オリジナルチェキ・グッズ販売中！ライブ会場 & オンラインで買えるよ♪
        </p>
        <div className="shop-grid">
          {shopItems.map((item) => (
            <div className="shop-card" key={item.id}>
              {item.badge && <span className="shop-badge">{item.badge}</span>}
              <div className="shop-icon">{item.emoji}</div>
              <h3 className="shop-name">{item.name}</h3>
              <p className="shop-desc">{item.description}</p>
              <p className="shop-price">{item.price}</p>
              <button className="shop-btn">🛒 カートに入れる</button>
            </div>
          ))}
        </div>
        <div className="shop-notice">
          <p>※ オンラインショップは準備中です。ライブ会場の物販ブースでお買い求めください。</p>
          <p>※ チェキ撮影券はイベント当日のみ有効です。</p>
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
          <a href="#shop">グッズ</a>
          <a href="#schedule">スケジュール</a>
        </div>
      </footer>
    </>
  )
}

export default App
