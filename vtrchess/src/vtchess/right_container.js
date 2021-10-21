import React from 'react'
import PropTypes from 'prop-types';

export default class RightContainer extends React.Component {
  render() {
    let cnt = 0;

    return (
      <div className="right-container">
        {
          this.props.position.map(function(item){
            const pos = cnt % 2;
            const row = parseInt(cnt/2, 10) + 1;
            cnt++;
            return (<div key={item} className={`item-${pos}`}> {pos === 0 ? `${row}:` : ''} {item}</div>)
          })
        }
        <h4>{this.props.endGame}</h4>
      </div>
    )
  }
}

RightContainer.propTypes = {
  position: PropTypes.any,
  endGame: PropTypes.any
}
