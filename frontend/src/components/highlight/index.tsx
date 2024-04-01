import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '360px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function Highlight() {

  return (
    <div>
      <Carousel autoplay>
        <div><h3 style={contentStyle}>1</h3></div>
        <div><h3 style={contentStyle}>2</h3></div>
        <div><h3 style={contentStyle}>3</h3></div>
        <div><h3 style={contentStyle}>4</h3></div>
      </Carousel>
    </div>
  )
}

export default Highlight
