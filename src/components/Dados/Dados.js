import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import './dados.style.css';
import  {data} from './data.js';

/**
 *  Aqui foi importado os dados para criar um gráfico utilizando a biblioteca nivo
 *  se instala usando yarn add @nivo/core
 *  para se criar o gráfico em barras usa-se yarn add @nivo/bar 
 *  O arquivo data foi importado porque ficaria muito grande aqui
 *  https://nivo.rocks/bar/
 */

const MyResponsiveBar = ({ data /* see data tab */ }) => (
  <ResponsiveBar
      data={data}
      keys={[
          'hot dog',
          'burger',
          'sandwich',
          'kebab',
          'fries',
          'donut'
      ]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      defs={[
          {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#38bcb2',
              size: 4,
              padding: 1,
              stagger: true
          },
          {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
          }
      ]}
      fill={[
          {
              match: {
                  id: 'fries'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'sandwich'
              },
              id: 'lines'
          }
      ]}
      borderColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',
                  1.6
              ]
          ]
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'country',
          legendPosition: 'middle',
          legendOffset: 32
      }}
      axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'food',
          legendPosition: 'middle',
          legendOffset: -40
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',
                  1.6
              ]
          ]
      }}
      legends={[
          {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
  />
)



export default class Dados extends React.Component{   

    render(){
        return (
         <div className='row'>
          <div className='col-md-8'>
            <div className='p-1'>
              <div style={{ height: 400, width: 750 }} className='row'>
                    <MyResponsiveBar data={data} />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='p-2'>
              <h4>Lanches</h4>
                  <p>
                  Suspendisse auctor dapibus ultrices. Suspendisse potenti. 
                  Ut et imperdiet lacus. Nulla sagittis velit nisl, sit amet viverra justo faucibus non. 
                  Integer imperdiet turpis ac laoreet pretium. Aliquam eu mattis nisl. 
                  Sed accumsan ante eu orci dictum, non molestie justo eleifend. 
                  Vivamus et ligula vitae urna mollis dictum. 
                  </p>


            </div>
          </div>         
         </div>
        );
    }
}