import likeLionMembers from '../data/likeLionMembers.js'

class likeLionMembers extends React.Component {
  state = {
    members: likeLionMembers
  };

  initialMembers = likeLionMembers;
  labCount = this.calcLabCount()

  calcLabCount() {
    //105개의 데이터를 순회해서 lab의 갯수가 몇 개인지를 확인
    let labSet = new Set();
    this.state.members.forEach(({lab}) => labSet.add(lab)); 
    return labSet.size
  }

  handleFilterLab = (labNumber) => {
    this.setState({
      members: this.initialMembers.filter(member => {
        //로직
        return member.lab === labNumber
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <h2>멋사 4기 멤버들</h2>
        <div role="group" >
          {
            Array(this.labCount).fill().map((_, index) => {
              return (
                <button type="button" style={{ marginBottom: 20}} onClick={() => this.handleFilterLab(index + 1) key={`lab-button-{index}`}}>
                  LAB {index + 1}
                </button>
              )
            })
          }
        </div>
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

export default likeLionMembers;
