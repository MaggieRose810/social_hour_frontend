import React from 'react'
import PropTypes from 'prop-types';

const Company = (props) => {
  return (<div>
    <h1>{props.name}</h1>
    <p>{props.description}</p>
  </div>)
}

Company.propTypes = {
  name: PropTypes.string.isRequired
}
export default Company