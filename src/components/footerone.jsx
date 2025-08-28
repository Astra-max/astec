import { faStar, faTrophy } from '@fortawesome/free-solid-svg-icons';
import '../styles/footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    const footerData = [
        {
            name: 'More about AsTec',
            content: {
                id: 1,
                description1: 'converse with our grads', link1: 'link',
                description2: 'Sponsored by 5 companies',
                description3: 'Successfully mentored 11K grads',
                description4: 'Commensed our journey 2021 Nov',
                description5: 'Most of programs are free for everyone',
            },
        },
        {
            name: 'Trending on Technology',
            content: {
                id: 2,
                description1: 'Latest Hacker news', link: 'link',
                description2: 'Trending on Articial intelligence',
                description3: 'GIT CI/CD ai integration',
                description4: 'AWS secure access key',
                description5: 'Redis caching updates',
            },
            link: 'link',
        },
        {
            name: 'Coming soon!!',
            content: {
                id: 3,
                description1: 'Calculus for Ml',
                description2: 'Systems design patterns',
                description3: 'Linear Algebra for Ml',
                description4: 'Probability and statistics',
                description5: 'AsTec version control (AsTecHub)',
            },
        },
    ]
    return (
      <div className="footer-container">
        <div className='subscribe-cont'>
            <p>Subscribe for more amaizing News and Tech opportunities</p>
          <form className="subscribe">
            <input type="email" placeholder="Please enter your email here...................." required />
            <button type='submit'>Subscribe</button>
          </form>
        </div>
        <div className="footer-display">
          <div className="footer-items">
            <h2 className="footer-logo">AsTec Academy</h2>
            <div className="footer-elements">
              <FontAwesomeIcon icon={faTrophy} color='brown-red' size='4x' style={{paddingLeft: '2rem'}}/>
              <div className='three-star'>
                <FontAwesomeIcon icon={faStar} color='gold'/>
                <FontAwesomeIcon icon={faStar} color='gold'/>
                <FontAwesomeIcon icon={faStar} color='gold'/>
              </div>
              <p>Celebrating our 5th Anniversary</p>
            </div>
          </div>
          {footerData.map((data) => (
            <div className="footer-items">
              <h2>
                <p className='footer-titles' key={data.content.id}>{data.name}</p>
              </h2>
              <div className="footer-elements">
                <p className={data.content.link1||data.content.link} key={data.content.id+1}>{data.content.description1}</p>
                <p className={data.content.link} key={data.content.id+2}>{data.content.description2}</p>
                <p key={data.content.id+3}>{data.content.description3}</p>
                <p className={data.link} key={data.content.id+4}>{data.content.description4}</p>
                <p className={data.content.link} key={data.content.id+5}>{data.content.description5}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="social-media">&copy;Astratec 2025</div>
      </div>
    );
}