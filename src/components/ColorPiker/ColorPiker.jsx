import { Component } from 'react';
import { Box, Title, ColorBox, Color } from './ColorPiker.styled';

export default class ColorPiker extends Component {
  state = {
    activeIdx: 0,
  };

  currentIdx = index => {
    this.setState({
      activeIdx: index,
    });
  };

  render() {
    const { activeIdx } = this.state;
    const { data } = this.props;
    return (
      <Box>
        <Title>Color Piker</Title>
        <ColorBox>
          {data.map(({ color, label }, index) => {
            return (
              <Color
                onClick={() => {
                  this.currentIdx(index);
                }}
                key={label}
                index={index}
                currentIdx={activeIdx}
                style={{ backgroundColor: color }}
              ></Color>
            );
          })}
        </ColorBox>
        <p>Color: {data[[activeIdx]].label}</p>
      </Box>
    );
  }
}
