import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import NaverMap from '../components/common/NaverMap';
import PageFrame from '../components/common/PageFrame';
import TradeInfoModal from '../components/modal/trade/TradeInfoModal';
import TradeAggregateContainer from '../containers/trade/TradeAggregateContainer';
import { isOpen, setOpen } from '../components/modal/Modal';
import { connect } from 'react-redux';
import { tradeSearch, tradeStats, tradeStatsPeriod } from '../store/actions';
import { bindActionCreators } from 'redux';

const Main = ({ tradeSearchResult, tradeStatsResult, tradeStatsPeriodResult, tradeSearch, tradeStats, tradeStatsPeriod }) => {
  const [ isInfoShow, setInfoShow ] = useState(false);
  const [ modalTitle, setModalTitle ] = useState('');

  const onCloseInfo = e => {
    setInfoShow(false);
  }

  const onOpenInfo = query => {
    setInfoShow(true);

    const { name, type, regionCode, sigunguCode, umdCode, fullname } = query;

    setModalTitle(fullname);

    tradeSearch({
      name: name,
      region: regionCode,
      sigungu: sigunguCode,
      dong: umdCode,
      cityType: type,
      page: 0,
      size: 10,
      sortType: 'amount',
      sortMode: 'desc',
      tradeType: 'TRADE',
      fromDate: '2020-10-01',
      toDate: '2020-11-30'
    });
    
    tradeStats({
      name: name,
      region: regionCode,
      sigungu: sigunguCode,
      dong: umdCode,
      cityType: type,
      tradeType: 'TRADE',
      fromDate: '2020-10-01',
      toDate: '2020-11-30'
    })

    tradeStatsPeriod({
      name: name,
      region: regionCode,
      sigungu: sigunguCode,
      dong: umdCode,
      cityType: type,
      tradeType: 'TRADE',
      fromDate: '2020-10-01',
      toDate: '2020-11-30'
    });
  }

  return (
    <PageFrame>
      <Helmet>
        <title>제목</title>
      </Helmet>

      <TradeAggregateContainer onOpenInfo={onOpenInfo} />

      <TradeInfoModal 
        title={modalTitle}
        isOpen={isInfoShow} 
        onClose={onCloseInfo} 
        tradeStatsResult={tradeStatsResult}
        tradeSearchResult={tradeSearchResult}
        tradeStatsPeriodResult={tradeStatsPeriodResult} 
      />
    </PageFrame>
  )
}

const mapStateToProps = ({ trade }) => ({
  tradeSearchResult: trade.tradeSearch,
  tradeStatsResult: trade.tradeStats,
  tradeStatsPeriodResult: trade.tradeStatsPeriod
});

const mapDispatchToProps = dispatch => ({
  tradeSearch: bindActionCreators(query => tradeSearch(query), dispatch),
  tradeStats: bindActionCreators(query => tradeStats(query), dispatch),
  tradeStatsPeriod: bindActionCreators(query => tradeStatsPeriod(query), dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);