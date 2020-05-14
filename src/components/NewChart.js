import React from 'react';
import ReactApexChart  from 'react-apexcharts'

export default class ApexChart extends React.Component {
    constructor(props) {
      super(props);
      let data = null;
      if(this.props.candle){
        data = this.datamining(this.props.candle)
      }
      this.state = {
        ticker: this.props.candle.ticker,
        series: data,

        options: {
          chart: {
            type: 'candlestick',
            height: 350
          },
          title: {
            text: 'CandleStick Chart',
            align: 'left'
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            tooltip: {
              enabled: true
            }
          }
        },
      
      
      };
    }
    datamining(data) {
        const stockdata2 = data;
        console.log(stockdata2)
        
        let stockdata = [];
        stockdata2.t.forEach((data, idx) => {
            let a ={}
            a["o"] = stockdata2.o[idx];
            a["h"] = stockdata2.h[idx];
            a["l"] = stockdata2.l[idx];
            a["c"] = stockdata2.c[idx];
            a["t"] = data;
            stockdata.push(a)
        }) 

        let list =[];
        stockdata.map(stock=>{
            let a1 = {}
            a1["x"] = new Date(stock.t * 1000)
            a1["y"] = [stock.o, stock.h, stock.l, stock.c]
            list.push(a1);
        })
        return [{data:list}]

    }


    shouldComponentUpdate(nextProps, nextState){
      if(nextProps.candle.ticker !== this.state.ticker ){
        console.log(nextProps.candle.ticker)
        console.log(this.state.ticker)

        let data = this.datamining(nextProps.candle)
        this.setState({
          ticker:nextProps.candle.ticker,
          series:data
        })
        return true;
      }
      return true;
  }

    render() {
        console.log(this.state.series)
        return (
            (this.state.series &&
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="candlestick" height={350} />
            </div>)
            
        )
    }
}






// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(ApexChart), domContainer)

