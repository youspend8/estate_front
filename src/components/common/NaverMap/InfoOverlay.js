import React from 'react';
import { renderToNodeStream, renderToString } from 'react-dom/server';
import { numberWithComma } from '../../../lib/util/StringUtil';

const InfoOverlayWrapper = ({ city, amountAverage, count }) => {
  const amountFormat = (() => {
    if (amountAverage >= 10000) {
      return (amountAverage / 10000).toFixed(1)
    } else {
      return (amountAverage / 1000).toFixed(1)
    }
  })();

  return (
    <>
      <div className="info_overlay_city">
        { city }
      </div>
      <div className="info_overlay_content">
        <span>
          { amountFormat }억
        </span>
        <span>
          { numberWithComma(count) }건
        </span>
      </div>
    </>
  )
}

export default class InfoOverlay extends window.naver.maps.OverlayView {
  constructor(props) {
    super(props);

    const { map, position, onClick } = props;

    const contentString = renderToString(<InfoOverlayWrapper {...props.content} />);

    const div = document.createElement('div');
    div.className = 'info_overlay';
    div.onmouseover = e => {
      div.className = 'info_overlay bounce';
    }
    div.onmouseleave = e => {
      const { classList } = e.target;
      if (classList.contains('info_overlay') && classList.contains('bounce')) {
        div.className = 'info_overlay';
      }
    }
    div.onclick = onClick;
    div.innerHTML = contentString;

    this._element = div;

    this.setPosition(position);
    this.setMap(map || null);
  };

  setPosition = (position) => {
    this._position = position;
    this.draw();
  };

  getPosition = () => {
    return this._position;
  };

  onAdd = () => {
    const overlayLayer = this.getPanes().overlayLayer;
    overlayLayer.append(this._element);
  };

  onRemove = () => {
    this._element.remove();
  };

  draw = () => {
    if (!this.getMap()) {
        return;
    }
    const projection = this.getProjection();
    const position = this.getPosition();
    const pixelPosition = projection.fromCoordToOffset(position);
  
    this._element.style.left = pixelPosition.x + 'px';
    this._element.style.top = pixelPosition.y + 'px';
  }
}