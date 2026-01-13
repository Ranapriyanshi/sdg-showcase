import './MotivationLetter.css'

const MotivationLetter = () => {
  return (
    <section id="motivation" className="motivation-letter section">
      <div className="container">
        <h2 className="section-title">Motivation Letter</h2>
        <div className="motivation-content">
          <div className="letter-container">
            <div className="letter-paper">
              <div className="letter-header">
                <div className="letter-lines"></div>
              </div>
              <div className="letter-content">
                <div className="motivation-text">
                  <p>
                    I am <strong>Priyanshi Rana</strong>, a Computer Science student from Haryana, India — a region where gender inequality and limited opportunities for women still shape many lives. Growing up in this environment made me deeply aware that education, independence, and access to opportunity can determine whether a girl is able to shape her own future or have it decided for her. These realities did not discourage me; instead, they inspired me to pursue learning, leadership, and technology as tools for empowerment and social change.
                  </p>
                  <p>
                    My academic background in Computer Science has strengthened my belief that innovation must be inclusive. I am particularly interested in how digital platforms, data, and technology can be used to reduce social and economic gaps. Alongside my studies, I have actively engaged in community-based initiatives that reflect this belief. My mother is a teacher at a school serving students from economically disadvantaged families, and through her, I regularly visit the school to organize learning activities, creative sessions, and festival celebrations. These moments allow children to feel seen, valued, and motivated, and they have reinforced my commitment to education as a foundation for equality.
                  </p>
                  <p>
                    In addition, I use my voice in the digital space to advocate for change. With over <strong>2,000 followers on LinkedIn</strong>, I consistently share content related to gender equality, inclusive workplaces, and women's empowerment. I see social media as a powerful tool to influence mindsets, encourage dialogue, and inspire young professionals to think beyond traditional limitations. I have also participated in technology outreach programs where I helped students understand digital tools and basic technical concepts, giving them confidence to engage with technology rather than feel excluded by it.
                  </p>
                  <p>
                    These efforts align strongly with the United Nations Sustainable Development Goals, particularly <span className="sdg-highlight sdg-4">SDG 4 (Quality Education)</span>, <span className="sdg-highlight sdg-5">SDG 5 (Gender Equality)</span>, and <span className="sdg-highlight sdg-9">SDG 9 (Industry, Innovation, and Infrastructure)</span>. My long-term goal is to become a technology-driven changemaker who designs solutions that improve access to education, digital skills, and employment opportunities for young people, especially women.
                  </p>
                  <p>
                    The Future Action Summit Australia is a platform where I can learn from global leaders, collaborate with diverse youth, and develop actionable ideas for sustainable impact. As a student from a middle-class Indian family, international exposure of this scale is financially difficult to access, yet it is crucial for my growth and for amplifying voices from regions like mine. By participating, I will bring back knowledge, networks, and strategies that I can apply to my community and future projects. I seek this opportunity not just to grow personally, but to strengthen my ability to contribute meaningfully to a more just and sustainable world.
                  </p>
                </div>
              </div>
              <div className="letter-footer">
                <div className="letter-signature">
                  <div className="signature-line"></div>
                  <p>Priyanshi Rana</p>
                </div>
              </div>
            </div>
            <div className="letter-shadow"></div>
          </div>
          <div className="motivation-sdg-visual">
            <div className="sdg-card sdg-card-4">
              <div className="sdg-icon">4</div>
              <h3>Quality Education</h3>
              <p>Ensuring inclusive and equitable quality education for all</p>
            </div>
            <div className="sdg-card sdg-card-5">
              <div className="sdg-icon">5</div>
              <h3>Gender Equality</h3>
              <p>Achieving gender equality and empowering all women and girls</p>
            </div>
            <div className="sdg-card sdg-card-9">
              <div className="sdg-icon">9</div>
              <h3>Innovation & Infrastructure</h3>
              <p>Building resilient infrastructure and fostering innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MotivationLetter
