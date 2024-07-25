
function App2 () {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <div className="skill-list">
          <SkillList name="HTML+CSS" colour="blue" />
          <SkillList name="Javascript" colour="yellow" />
          <SkillList name="webdesign" colour="grey" />
          <SkillList name="Git and Github" colour="red" />
          <SkillList name="React" colour="blue" />
          <SkillList name="Svelte" colour="orange" />
        </div>
      </div>
    </div>
  );
}

function Intro () {
    return <div className="body">
        
        <h1> Jonas Schmedtmann</h1>
        <p> Lorem ipsum ghjh nhjhf nbfgf ghjgfg mnhgytf mnghgh mnhgytf
        hgjhgjhgj mnhtgj mhuhkkjfgg ghu huygd hjhkjhk jhk jhjhfgdtr jhjhfgdtr
        hgjh mjkljlk gjhkn fh.mk </p>

         
    </div>
    
}

function SkillList(props) {
    return (
      <div className="skill" style={{ backgroundColor: `${props.colour}` }}>
        {props.name}
      </div>
    );
}


function Avatar() {
    return (
        <image  />
    )
    
}

export default App2