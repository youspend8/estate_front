import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import NaverMap from '../../components/common/NaverMap';
import { tradeAggregate } from '../../store/actions';
import InfoOverlay from '../../components/common/NaverMap/InfoOverlay';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import SearchInput from '../../components/common/SearchInput';

const TradeAggregateContainer = ({ state, tradeAggs, tradeAggregate, onOpenInfo }) => {
  const [ map, setMap ] = useState({});
  const [ overlayList, setOverlayList ] = useState([]);

  const naver = window.naver;

  useEffect(() => {
    console.log(state)
    if (overlayList.length != 0) {
      overlayList.forEach(overlay => {
        overlay.setMap(null);
      })
    }

    if (tradeAggs.data) {
      const list = [];

      tradeAggs.data.forEach(item => {
        const { name, amountAverage, count, coordinate } = item;
        const infoOverlay = new InfoOverlay({
          map: map,
          position: new naver.maps.LatLng(coordinate.latitude, coordinate.longitude),
          content: {
            city: name,
            amountAverage: amountAverage,
            count: count
          },
          onClick: () => {
            onOpenInfo(item);
          }
        })
        list.push(infoOverlay);
      })

      setOverlayList(() => list);
    }
  }, [ tradeAggs ]);

  const onMapChange = map => {
    const { bounds, center } = map;

    const { _max, _min } = bounds;

    tradeAggregate({
      eastLong: _max._lng,
      lat: center._lat,
      lon: center._lon,
      northLat: _max._lat,
      southLat: _min._lat,
      tradeType: 'TRADE',
      westLong: _min._lng,
      zoom: map.zoom,
    });
  }

  const onCreateMap = map => {
    setMap(map);
    onMapChange(map);
  }

  return (
    <>
      <SearchInput />
      <NaverMap onCreate={onCreateMap} onIdle={onMapChange} />
    </>
  )
}

const mapStateToProps = state => ({
  tradeAggs: state.trade.tradeAggs,
  state
});

const mapDispatchToProps = dispatch => ({
  tradeAggregate: bindActionCreators(query => tradeAggregate(query), dispatch),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TradeAggregateContainer));