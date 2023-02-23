
import classes from './Nav.module.scss';
import { A11yHidden } from '@/components';
import { arrayOf, number, string, oneOfType, oneOf, exact } from 'prop-types';

export function Nav({ as, headline, list, ...restProps }) {
  return (
    <nav {...restProps}>
      <A11yHidden as={as}>{headline}</A11yHidden>
      <ul>
        {
          list.map((item) => {
            <li key={item.id}>
              <a href={item.to}>{item.text}</a>
            </li>
          })
        }
      </ul>
    </nav>
  )
}

Nav.defaultProps = {
  list: [], /* [{ id: string, to: string, text: string}]  이렇게 받고 싶고, 필수값으로 설계한 것*/
  as: 'h2',
}

Nav.propTypes = {
  // list: arrayOf(oneOfType([PropTypes.string, PropTypes.number]))를 shape()로
  list: arrayOf(
    exact({
      id: string,
      to: string,
      text: string,
    })
  ).isRequired,

  // [{ id: string, to: string, text: string}]
  headline: string.isRequired,
  // 이것들 중 하나 'h2', 'h3', 'h4', 'h5', 'h6'
  as: oneOf(['h2', 'h3', 'h4', 'h5', 'h6'])
}