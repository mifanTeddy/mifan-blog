import Layout from 'lib/components/layout'

const links = [
  { name: 'Blog 博客', url: '/blog', description: '原博客文章列表' },
  { name: 'Daily 日报', url: 'https://daily.mifan.im/', description: '每日内容聚合' },
  { name: 'Disperse', url: 'https://disperse.mifan.im/', description: '分发工具' },
  { name: '生成艺术', url: 'https://art.mifan.im/', description: 'Generative Art' },
  { name: '猫头像', url: 'https://cat.mifan.im/', description: '随机猫头像' },
  { name: '狗头像', url: 'https://dog.mifan.im/', description: '随机狗头像' },
  { name: '猪头像', url: 'https://pig.mifan.im/', description: '随机猪头像' },
  { name: 'Muscle', url: 'https://muscle.mifan.im/', description: '训练肌肉图谱' },
  { name: '工具', url: 'https://tools.mifan.im/', description: 'Tools 集合' },
  { name: '退休', url: 'https://tuixiu.mifan.im/', description: '退休计算器' },
  { name: '这个B班值不值得上', url: 'https://worthjob.mifan.im/', description: '工作价值评估' },
  { name: 'Resume', url: 'https://resume.mifan.im/', description: '个人简历' },
]

const Page = () => (
  <Layout>
    <div className="nav-wrapper">
      <h1>站点导航</h1>
      <div className="nav-grid">
        {links.map((item) => (
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
        ))}
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

      .nav-card h3 {
        margin: 0 0 6px;
      }

      .nav-card span {
        display: block;
        opacity: 0.75;
        font-size: 0.9rem;
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
