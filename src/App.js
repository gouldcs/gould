import './App.css';
import Card from 'react-bootstrap/Card';
import { Badge, Container, Navbar, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="root">
      <div className='topper'/>
      <Navbar bg='light' expand='lg' style={{'width': '100%'}}>
        <Container>
          <Navbar.Brand>Cameron Gould</Navbar.Brand>
        </Container>
      </Navbar>
      <br/>
        <Container>
          <div style={{"display":"flex", "flex-direction":"row", "alignItems":"center"}}>
            <h1>I'm a Software Engineer</h1><Badge bg="success" style={{marginLeft:"10px"}}>In Los Angeles</Badge>
          </div>
          <div style={{"display":"flex", "flex-direction":"row", "alignItems":"center", justifyContent:"space-between", "maxWidth": '330px'}}>
            <Button variant="outline-primary" href="https://linkedin.com/in/cameron-gould">LinkedIn</Button>
            <Button variant="outline-primary" href="https://github.com/gouldcs">GitHub</Button>
            <Button variant="outline-primary" href="https://stackoverflow.com/users/14180968/cameron-gould">StackOverflow</Button>
          </div>
          <br/>
          <p>
            Hello to you, the viewer of my beautiful website. There are only a few reasons you could possibly be reading this website right now. It could be that you clicked this link after visiting one of my social media pages. If so, welcome! I hope you at least followed me. If you're looking for someone to hire, hello! I love money. If you're a friend or coworker, thanks for giving me clicks? If for some reason this website ever gets featured in the news or has an ungodly amount of visitors one day and you are one of them, I hope it's because I am a billionaire or something, but hello to you too. Honestly, I have gone through like a dozen iterations of personal websites at this point with only like 3 of them ever getting published to the web. This is I think iteration 4 that made it off figma and into a React app. This one wasn't designed, just some bootstrap components and a lot of words. I honestly gave up on the professional looking stuff and found that these more esoteric sites are way more fun anyways. I don't do great at updating this thing either. If you're reading this anywhere past the date of <b><i>{"<insert date I will forget to update each time i make changes to this site>"}</i></b> then the information on here is probably already outdated. Anyways, I think that's all I'm gonna do in terms of introductions. Feel free to follow me on my social media, if of course you're from group 2 or 3. If you are from group 1 or 4 then I'm sure you already do, and thank you for your future money.
          </p><br/>
          <h2>About Me</h2>
          <p>
            I'll save the fun and clever monologue for another page. Here's the boring industry stuff that makes me look good... I did four years of computer science in high school. I got rejected by UCLA so I went to George Fox University for a couple of years and completed a lot of intro courses in CS. After that, I transferred to Loyola Marymount University for my final two years of my bachelors degree. I studied web development, AI, and mobile app development. Core tech I learned was PostgreSQL, JavaScript, Python, Swift, some C {"(I do not desire to ever touch that language again... but ask again when I am more mature)"}, and frameworks/libraries such as SwiftUI, React.js, a little Vue, and got to use Jupyter a little.
          </p>
          <p>
            As for work experience, I spent a trecherous two semesters as a React frontend "engineer" for some failed startup that checks your code for plagiarism, kinda like how existing free software does, for free. My personal projects were enough to carry me to an Intel internship though and that lasted a solid 11 months. During that internship, I took a horribly written Ruby data pipeline and completely redesigned it to be a horribly written Python data pipeline, but with unit tests. Honestly it's fine though, it's not like Intel is trying to overtake TSMC to save us from having a really violent war with China or anything. Geopolitics aside, I got a job at Amazon after that and worked on Alexa for a while before switching to their Audible subsidiary so I could work in office and get free lunch. It is a pretty rad setup. Honestly if you are reading this and thinking about recruiting me for my great job history and awesome personality, it would be hard to convince me. Unless... I <i>guess,</i> you expensed a $400 keyboard and gave me a 40% raise or something. And a horse. I demand a horse. I know what you're probably thinking. <i>Cameron, you live in Los Angeles. Where are you gonna put a horse???</i> In the words of Jeff Goldblumm, <i>life finds a way.</i>
          </p>
          <br/>
          <h2>Work Experience</h2>
          <Card
            bg='light'
            className='card'
          >
            <Card.Header>Amazon | Audible</Card.Header>
            <Card.Body>
              <Card.Title>Software Development Engineer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2022-Present</Card.Subtitle>
              <Card.Text>
                Revamping the Audible Creator Exchange website, acx.com. Responsibilities include building a orchestration layer to enable the migration from legacy architecture to new, AWS-based architecture; developing new full-stack features; improving developer operations; designing new solutions.
              </Card.Text>
            </Card.Body>
          </Card>
          <br/>
          <Card
            bg='light'
            className='card'
          >
            <Card.Header>Amazon | Alexa</Card.Header>
            <Card.Body>
              <Card.Title>Software Development Engineer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2022-2022</Card.Subtitle>
              <Card.Text>
                Worked on Alexa's context and memory team, enabling improved latency features. Responsibilities included reducing operational expenses by up to $70,000 per month; implementing archetectural changes; improving developer operations.
              </Card.Text>
            </Card.Body>
          </Card>
          <br/>
          <br/>
          <h2>Personal Endeavors</h2>
          <Card
            bg='light'
            className='card'
          >
            <Card.Header>Mobile Application Development</Card.Header>
            <Card.Body>
              <Card.Title>Hyprlink</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2022-Present</Card.Subtitle>
              <Card.Text>
                A couple friends and I made a mobile app. We're still kinda working on it, but we all got jobs. You know how it is, burnout at the end of the day. Plus, after getting jobs we all learned that our architecture kinda sucks and doesn't scale at all so we are just gonna have to redo a lot of it. Not to mention I have other ideas I like better. This thing was a good learning experience but definitely a money sink.
              </Card.Text>
            </Card.Body>
          </Card>
          <br/>
          <Card
            bg='light'
            className='card'
          >
            <Card.Header>Mobile Application Development</Card.Header>
            <Card.Body>
              <Card.Title>TBA: Another mobile app</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2022-Present</Card.Subtitle>
              <Card.Text>
                Not gonna lie, I really do like Swift and mobile apps. This is a cool concept, more unique and more challenging than an events app. Ok well the events app was challenging for its own reasons. Honestly it was more of just a personnel issue for some of it but as soon as the rest of us figured out the maps API and ditched React Native it was pretty smooth. Anyways, this one has some cool people thinking about it. Still in the concept stage but has some designs. Idk, maybe it happens maybe not. I think it will dabble in wearables a bit too and everyone RAVES about wearables. I do not get the hype but that's just me I guess.
              </Card.Text>
            </Card.Body>
          </Card>
          <br/>
          <br/>
          <h2>Education</h2>
          <Card
            bg='light'
            className='card'
          >
            <Card.Header>Undergraduate</Card.Header>
            <Card.Body>
              <Card.Title>George Fox University</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2018-2020</Card.Subtitle>
              <Card.Text><Badge bg='secondary'>Transferred</Badge></Card.Text>
              {[
                "Data Structures", "Algorithms", "Object-Oriented Analysis & Design", "Python & Java Labs", "Software Engineering", "Calculus I", "Proofs"
              ].map(course => (
                <Badge pill bg="primary" style={{margin:'4px 4px', userSelect:'none'}}>{course}</Badge>
              ))}
            </Card.Body>
          </Card>
          <br/>
          <Card
            bg='light'
            className='card'
          >
            <Card.Header>Undergraduate</Card.Header>
            <Card.Body>
              <Card.Title>Loyola Marymount University</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2020-2022</Card.Subtitle>
              <Card.Text><Badge bg='success'>B.Sc. Computer Science</Badge></Card.Text>
              {[
                "Compilers", "Programming Languages", "Databases", "Artificial Intelligence", "Cognitive Systems Design", "Computer Graphics", "Computer Systems Organization", "Logic Design", "Microprocessors", "Theory of Computation"
              ].map(course => (
                <Badge pill bg="primary" style={{margin:'4px 4px', userSelect:'none'}}>{course}</Badge>
              ))}
            </Card.Body>
          </Card>
          <br/>
          <br/>
          <h2>Footnotes</h2>
          <ul>
              <li>
                I just really wanted to have a footnotes section for funny quotes or something, but I have nothing right now.
              </li>
          </ul>
          
        </Container>
        <br/><br/>
    </div>
  );
}

export default App;
