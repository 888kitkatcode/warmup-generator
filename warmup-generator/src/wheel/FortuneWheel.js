import React from 'react';

import './styles.css';

export default class FortuneWheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      visibility: "hidden",
    };
    this.selectItem = this.selectItem.bind(this);
    this.setVisibility = this.setVisibility.bind(this);
  }

  selectItem() {
    this.state.visibility = 'hidden'
    if (this.state.selectedItem === null) {
      this.state.visibility = 'hidden'
      const selectedItem = Math.floor(Math.random() * this.props.items.length);
      setTimeout(this.setVisibility, 4000)    
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
    } else {
      this.state.visibility = 'hidden'
      this.setState({ selectedItem: null });
      setTimeout(this.setVisibility, 5000) 
    } 
    
  }

  setVisibility() {
    this.setState({ visibility: "unset" })
  }

  getColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b},0.7)`;
  }

  render() {
    const { selectedItem } = this.state;
    const { items, instructions, time, language } = this.props;

    const wheelVars = {
      '--nb-item': items.length,
      '--selected-item': selectedItem
    };
    const spinning = selectedItem !== null ? 'spinning' : '';

    const headingSelected = items[selectedItem]
    const instructionsSelected = instructions[selectedItem]
    const timeSelected = time[selectedItem]
    const languageSelected = language[selectedItem]
    
    return (
      <div className="Warmup">
        <div className="wheel-container">
          <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
            {items.map((item, index) => (
              <div className="wheel-item" key={index} style={{ '--item-nb': index,background:`${this.getColor()}`,height:'3%'}}>
                {item}
              </div>
            ))}
          </div>
        </div>
        
        <div className="display-container" style={ {visibility: this.state.visibility} }
        >
          <div className="display">
            <a href={instructionsSelected} target="_blank" className="Warmup-heading">{headingSelected}</a>
            <p className="Warmup-time">Estimated time to solve:<p className="time">{timeSelected}</p> 
            </p>
            <p className="Warmup-language">{languageSelected}</p>
          </div>
      </div>
    
      </div>
    );
  }
}
