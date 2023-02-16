import likeLionMembers from '../data/likeLionMembers.js'

class Home extends React.Component {
  state = {
    member: likeLionMembers
  };

  render() {

    const { member } = this.state;

    return (
      <React.Fragment>
        <h2>멋사 4기 멤버들</h2>
        <ul>
          {
            member.map(({ id, lab, name, gender }) => 
              <li key={id}>
                <span>LAB {lab} - </span>
                <span>{name}</span>
                <span>({gender})</span>
              </li>
            )
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default Home;
