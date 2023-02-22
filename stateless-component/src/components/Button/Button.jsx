import classes from './Button.module.css';
import { getColor } from '@/theme/utils';

export function Button({ mode, secondary: isSecondary, disabled, ...restProps }) {

  return (
    <button type="button" className={classes.component} style={{
      backgroundColor: !isSecondary ? getColor('primary/500') : getColor('primary/50'),
      color: !isSecondary ? getColor('white') : getColor('primary/400'),
    }}
      {...restProps}
    />
  );
}

Button.defaultProps = {
  mode: 'primary', // 'secondary'
  secondary: false,
  disabled: false,
};

/* -------------------------------------------------------------------------- */
// HTML Standards Component
{
  /* <button></button> */
}

// Custom Component
{
  /* <Button></Button> */
}

// export function Button({ mode, children, onClick, ...restProps }) {
//   console.log(restProps);
//   return <button type="button" className={classes.component} {...restProps} />;
// }


// export function Button({ mode = 'primary', children }) {
//   return (
//     <button type="button" className={classes.component}>
//       {children}
//     </button>
//   );
// }

// const restProps = {
//   onClick,
//   onMounseEnter,
// }

// React.createElement('div', {
//   className: 'parent',
//   children: React.createElement('p', {
//     className: 'child',
//     children: [React.createElement('strong', null, 'Child'), ' 1'],
//     ...restProps
//   }),
// });