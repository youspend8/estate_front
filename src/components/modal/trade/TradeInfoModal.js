import React, { useEffect, useState } from 'react';
import Section from '../../common/section';
import { Table, TableBody, TableColumn, TableRow } from '../../common/table/Table';
import Modal from '../Modal';
import './TradeInfoModal.scss';
import { Bar } from 'react-chartjs-2';
import Button from '../../common/Button';
import Radio from '../../common/Radio/Radio';

const TradeInfoModal = ({ title, isOpen, onClose, tradeSearchResult, tradeStatsResult, tradeStatsPeriodResult }) => {
  const [ chartCountData, setChartCountData ] = useState([]);
  const [ chartPriceLabel, setChartPriceData ] = useState([]);
  const [ chartLabel, setChartLabel ] = useState([]);

  console.log('tradeSearchResult', tradeSearchResult);
  console.log('tradeStatsResult', tradeStatsResult);
  console.log('tradeStatsPeriodResult', tradeStatsPeriodResult);

  useEffect(() => {
    if (tradeStatsPeriodResult.data) {
      const periodList = tradeStatsPeriodResult.data.periodList;
      setChartLabel(periodList.map(item => item.date));
      setChartPriceData(periodList.map(item => item.price));
      setChartCountData(periodList.map(item => item.count));
    }
  }, [ tradeStatsPeriodResult ]);

  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <div className="trade_info">
        <Section title={"날짜별 통계"}>
          <Bar data={{
            labels: chartLabel,
            datasets: [
              {
                type: 'line',
                label: '거래건수',
                borderColor: '#00bcd4',
                borderWidth: 2,
                pointBackgroundColor: '#00bcd4',
                pointBorderWidth: 2,
                fill: false,
                data: chartCountData,
                yAxisID: 'y-axis-2',
              },
              {
                type: 'bar',
                label: '평균가격',
                backgroundColor: '#ff9c44',
                data: chartPriceLabel,
                borderWidth: 0,
                yAxisID: 'y-axis-1',
              },
            ],
          }} 
          options={{
            layout: {
              padding: '10'
            },
            legend: {
              position: 'bottom'
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    maxRotation: 0,
                    minRotation: 0,
                    autoSkip: true,
                    maxTicksLimit: 10
                  },
                }
              ],
              yAxes: [
                {
                  type: 'linear',
                  display: true,
                  position: 'left',
                  id: 'y-axis-1',
                  gridLines: {
                    drawOnArea: false,
                    display: false
                  },
                  ticks: {
                    beginAtZero: true,
                  }
                },
                {
                  type: 'linear',
                  display: true,
                  position: 'right',
                  id: 'y-axis-2',
                  gridLines: {
                    drawOnArea: false,
                    display: false
                  },
                  ticks: {
                    beginAtZero: true
                  }
                },
              ],
            },
          }} />
        </Section>

        <Section title={(() => (
          <>
            실거래 상세 내역
            <Radio 
              list={[
                {
                  id: 'PRICE',
                  name: '가격 비싼 순',
                  value: 'DESC'
                },
                {
                  id: 'TRADE',
                  name: '거래일 최신 순',
                  value: 'ASC'
                }
              ]}
              onChange={item => {
                switch (item.id) {
                  case 'PRICE':
                    switch (item.value) {
                      case 'DESC':
                        item.name = '가격 싼 순'
                        item.value = 'ASC';
                        break;
                      case 'ASC':
                        item.name = '가격 비싼 순';
                        item.value = 'DESC';
                        break;
                    }
                    break;
                  case 'TRADE': 
                    switch (item.value) {
                      case 'DESC':
                        item.name = '거래일 최신 순';
                        item.value = 'ASC';
                        break;
                      case 'ASC':
                        item.name = '거래일 오래된 순';
                        item.value = 'DESC';
                        break;
                    }
                    break;
                }
              }}
            />
          </>
        ))()} scroll={"horizontal"}>
          <Table 
            headers={[
              {
                title: '이름',
                style: { minWidth: '200px', maxWidth: '400px' }
              },
              {
                title: '거래일',
                style: { minWidth: '120px' }
              },
              {
                title: '보증금',
                style: {  minWidth: '75px' }
              },
              {
                title: '건축년도',
                style: {  minWidth: '75px' }
              },
              {
                title: '면적',
                style: {  minWidth: '75px' }
              },
              {
                title: '층',
                style: { minWidth: '50px' }
              },
              {
                title: '시군구',
                style: {  minWidth: '75px' }
              },
              {
                title: '동',
                style: { minWidth: '80px' }
              }
            ]}
          >
            {
              tradeSearchResult.data ? tradeSearchResult.data.map((item, index) => {
                return (
                  <TableRow>
                    <TableColumn>{ item.name }</TableColumn>
                    <TableColumn>{ item.deal.dealDate }</TableColumn>
                    <TableColumn>{ item.amount }</TableColumn>
                    <TableColumn>{ item.buildYear }</TableColumn>
                    <TableColumn>{ item.area }</TableColumn>
                    <TableColumn>{ item.floor }</TableColumn>
                    <TableColumn>{ item.location.sigungu }</TableColumn>
                    <TableColumn>{ item.location.dong }</TableColumn>
                  </TableRow>
                )
              }) : ''
            }
          </Table>
        </Section>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button onClick={() => {}}>+ 더보기</Button>
        </div>  
      
        <Section title={"지역별 통계"}>
          <Table 
            width={"100%"}
            headers={[
              {
                title: '지역',
                style: { minWidth: '33.3%' }
              },
              {
                title: '평당가격',
                style: { minWidth: '33.3%' }
              },
              {
                title: '거래건수',
                style: {  minWidth: '33.3%' }
              },
            ]}
          >
            {
              tradeStatsResult.data ? tradeStatsResult.data.cityList.map((item, index) => {
                return (
                  <TableRow>
                    <TableColumn>{ item.dong }</TableColumn>
                    <TableColumn>{ item.price }</TableColumn>
                    <TableColumn>{ item.count }</TableColumn>
                  </TableRow>
                )
              }) : ''
            }
          </Table>
        </Section>
      </div>
    </Modal>
  )
}

export default TradeInfoModal;