import { forwardRef } from 'react';
import { createElement as h } from 'react';
import classes from './A11yHidden.module.css';

export const A11yHidden = forwardRef(function A11yHidden({
  // 컴포넌트 이름 설정
  // React는 브라우저가 인식할 수 없는 HTML 표준 요소가 아닌 경우
  // 컴포넌트 이름의 첫글자를 대문자로 구분한다.
  // React를 속여(trick) 보자!
  as: Component = 'span',
  // 비 표준 속성이므로 restProps에서 제외해야 한다.
  focusable = false,
  className = '', // 아무것도 입력하지 않으면 undefined가 나올 수 있기 때문
  ...restProps
}, ref) {
  // h 함수는 React.createElement의 별칭 함수입니다.
  // React.createElement(type[, props][, ...children])
  // h(type[, props][, ...children])
  // h(태그이름, props 객체(children 포함))
  // return h(as, restProps);

  // 변수(문자 값) + ' ' + 변수(문자 값)
  // `${개발자의 클래스이름} ${사용자의 클래스이름}`
  const combinedClassNames = `${className} ${focusable ? classes.focusable : ''} ${classes.srOnly}`.trim(); //trim으로 공백을 없애준다.
  return <Component ref={ref} className={combinedClassNames} {...restProps} />;
});

// props (외부에서 전달되는 함수의 인자 집합)
// 함수 내부에서는 기본 값 설정
// A11yHidden.defaultProps = {
//   as: 'span',
// }

export const srOnlyClassName = classes.srOnly;