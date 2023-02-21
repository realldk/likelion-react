import React from 'react';
import { ReactComponent as Spinner } from '../../assets/dotspinner.svg'

const API_ENDPOINT = 'https://randomuser.me/api/?results=5';
class LifeCycle extends React.Component {
  state = {
    isLoading: false,
    date: [],
    error: null,
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div
          role="alert"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          }}
        >
          <Spinner title="로딩 중..." />
        </div>
      )
    }
    return (
      <>
        <button type="button" onClick={() => this.fetchRandomPeople(API_ENDPOINT)}>다양한 사람들 보기</button>
      </>
    );
  }
  // commit 단계
  // - 실제 DOM에 접근, 조작

  // async function이용 (await, try ~ catch)인데 response.ok를 쓸 수도 있다.
  async fetchRandomPeople(endpoint) {
    this.setState({
      isLoading: true,
    })
    const response = await fetch(endpoint);

    if (!response.ok) {
      console.error(response.status, response.statusText);
      return;
    }

    const data = await response.json(); // 왜response.json()일까
    console.log(data);
  }

  // 컴포넌트가 마운트 된 이후
  componentDidMount() {

    const lifecycleElement = document.querySelector('.LifeCycle');
    const selectMeInput = document.getElementById('select-me');
    if (lifecycleElement) {
      lifecycleElement.addEventListener('click', (e) => {
        e.target.style.cssText = `
        backroud: skyblue;
        color: darkblue;
        font-size: 3rem;
        padding: 20px;
        `;
        setTimeout(() => {
          selectMeInput.value = '나 선택받았어';
          selectMeInput.select();
        }, 1500);
      });
      lifecycleElement.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          lifecycleElement.click();
        }
      })
    }
  }

  // 컴포넌트가 업데이트 된 이후
  // 업데이트 (N회)
  componentDidUpdate() {
    console.log('우리 컴포넌트가 변경되었어요');
  }
}

export default LifeCycle;