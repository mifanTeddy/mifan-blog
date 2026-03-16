import Layout from 'lib/components/layout'

const links = [
  { name: 'Blog 博客', url: '/blog', description: '原博客文章列表' },
  { name: 'Daily 日报', url: 'https://daily.mifan.im/', description: '每日内容聚合' },
  { name: 'Games 游戏', url: 'https://games.mifan.im/', description: '小游戏与网页游戏导航' },
  { name: 'Disperse', url: 'https://disperse.mifan.im/', description: '分发工具' },
  { name: 'Avatar', url: 'https://avatar.mifan.im/', description: 'Notion 风格头像编辑器' },
  { name: 'Maple Doll', url: 'https://maple.mifan.im/', description: '冒险岛纸娃娃换装' },
  { name: '生成艺术', url: 'https://art.mifan.im/', description: 'Generative Art' },
  {
    name: '头像乐园',
    url: 'https://cat.mifan.im/',
    description: '猫 / 狗 / 猪随机头像',
    special: 'avatar-pack',
    links: [
      { name: '猫头像', url: 'https://cat.mifan.im/' },
      { name: '狗头像', url: 'https://dog.mifan.im/' },
      { name: '猪头像', url: 'https://pig.mifan.im/' },
    ],
  },
  { name: 'Meme', url: 'https://meme.mifan.im/', description: '梗图编辑与导出' },
  { name: 'Muscle', url: 'https://muscle.mifan.im/', description: '训练肌肉图谱' },
  { name: '工具', url: 'https://tools.mifan.im/', description: 'Tools 集合' },
  { name: 'Math', url: 'https://math.mifan.im/', description: '数学知识与公式工具' },
  { name: '退休', url: 'https://tuixiu.mifan.im/', description: '退休计算器' },
  { name: '这个B班值不值得上', url: 'https://worthjob.mifan.im/', description: '工作价值评估' },
  { name: 'Focus', url: 'https://focus.mifan.im/', description: '专注计时与配置导入导出' },
  { name: 'Draw', url: 'https://draw.mifan.im/', description: '权重抽签和多人分组' },
  { name: 'Streak', url: 'https://streak.mifan.im/', description: '习惯打卡与连续天数追踪' },
  { name: 'Meal', url: 'https://meal.mifan.im/', description: '餐食推荐' },
  { name: 'Resume', url: 'https://resume.mifan.im/', description: '个人简历' },
]

const Page = () => (
  <Layout>
    <div className="nav-wrapper">
      <h1>站点导航</h1>
      <div className="nav-grid">
        {links.map((item) =>
          item.special === 'avatar-pack' ? (
            <div key={item.name} className="nav-card nav-card-special">
              <h3>{item.name}</h3>
              <span>{item.description}</span>
              <div className="avatar-links">
                {item.links.map((avatar) => (
                  <a
                    key={avatar.url}
                    href={avatar.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="avatar-link"
                  >
                    {avatar.name}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a
              key={item.url}
              className="nav-card"
              href={item.url}
              target={item.url.startsWith('http') ? '_blank' : undefined}
              rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <h3>{item.name}</h3>
              <span>{item.description}</span>
            </a>
          ),
        )}
      </div>
    </div>
    <style jsx>{`
      .nav-wrapper {
        margin: 20px 0 0;
      }

      h1 {
        margin: 0;
      }

      .nav-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
      }

      .nav-card {
        display: block;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        padding: 14px 16px;
        text-decoration: none;
        transition: all 0.2s ease;
      }

      .nav-card:hover {
        border-color: #111;
        transform: translateY(-1px);
      }

      .nav-card-special {
        border-color: #cfd7e6;
        background: linear-gradient(145deg, #f4f8ff, #ffffff);
      }

      .nav-card h3 {
        margin: 0 0 6px;
      }

      .nav-card span {
        display: block;
        opacity: 0.75;
        font-size: 0.9rem;
      }

      .avatar-links {
        margin-top: 10px;
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      .avatar-link {
        border: 1px solid #d5deef;
        border-radius: 999px;
        padding: 6px 10px;
        font-size: 0.82rem;
        text-decoration: none;
        color: inherit;
      }

      .avatar-link:hover {
        border-color: #111;
      }

      @media only screen and (max-width: 767px) {
        .nav-grid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </Layout>
)

export default Page
