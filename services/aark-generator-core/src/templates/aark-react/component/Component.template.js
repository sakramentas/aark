export const componentTemplate = name => `
import react, { useState } from 'react';
import propTypes from 'prop-types';

export const ${name} = props => {
  const [state, setState] = useState('Sample Component');

  return (
    <div className="${name}">
      {state}
    </div>
  )
}

${name}.propTypes = {
  prop1: PropTypes.string,
}

${name}.defaultProps = {
  prop1: 'prop1 sample',
}
`;
