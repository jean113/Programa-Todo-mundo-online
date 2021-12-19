import React, { Component } from 'react';
import Lottie from 'react-lottie';

interface AnimacaoProps
{
    img: object ;
    height?:number;
    width?:number;
}

class Animacao extends Component<AnimacaoProps> {

  render() {

    const {width, height} = this.props;

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: this.props.img ,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <>
        
        <Lottie
          options={defaultOptions}
          height={height}
          width={width}
        />
      </>
    );
  }
}

export default Animacao;