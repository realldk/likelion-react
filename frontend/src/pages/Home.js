
class Home extends React.Component {
  state = {
    members: this.props.likeLionMembers ?? []
  };

  handleFilterLab = (labNumber) => {
    this.setState({
      members: this.state.members.filter(member => {
        //로직
        return member.lab === labNumber
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <h2>멋사 4기 멤버들</h2>
        <button type="button" style={{ marginBottom: 20}} onClick={() => this.handleFilterLab(10)}>
          LAB 10 조 모여!
        </button>
        <button type="button" style={{ marginBottom: 20}} onClick={() => this.handleFilterLab(6)}>
          LAB 6 조 모여!
        </button>
        <ul>
          {
            this.state?.members.map(({ id, lab, name, gender }) => 
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
