import React from 'react'

export default class RightContainer extends React.Component {
  render() {
    var cnt = 0;

    return (
      <div className="right-container">
        {
          this.props.position.map(function(item){
            let pos = cnt % 2;
            let row = parseInt(cnt / 2, 0) + 1;
            cnt++;
            return (<div key={item} className={"item-" + pos}> {pos === 0 ? row + ': ' : ''} {item}</div>)
          })
        }
      </div>
    )
  }
}
