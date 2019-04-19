/**
 * Created by 胡晓慧 on 2019/4/13.
 */
import React, { memo } from "react";
import { Col, List, Row } from 'antd';
import { Axis, Chart, Coord, Geom, Legend, Tooltip } from "bizcharts";
import { COURSE_FULLNAME_ALIAS } from "@/constants";


// const SingleLineChart  =  React.lazy(()=> import ('@/components/Charts'));


const ScoreLineChart = memo(
  ({ lineData, radarViewData, subData }) => (
    <React.Fragment>
      <div>
        <Row>
          <Col span={8}>
            <Chart
              height={300}
              data={radarViewData}
              padding={[20, 20, 95, 20]}
              scale={{
                'score': {
                  min: 0,
                  max: 100,
                  tickCount: 5
                }
              }}
              forceFit
            >
              <Coord type="polar" radius={0.8}/>
              <Axis
                name="item"
                line={null}
                tickLine={null}
                grid={{
                  lineStyle: {
                    lineDash: null
                  },
                  hideFirstLine: false
                }}
              />
              <Tooltip/>
              <Axis
                name="score"
                line={null}
                tickLine={null}
                grid={{
                  type: "polygon",
                  lineStyle: {
                    lineDash: null
                  },
                  alternateColor: "rgba(0, 0, 0, 0.04)"
                }}
              />
              <Legend name="user" marker="circle" offset={30}/>
              <Geom type="line" position="item*score" color="user" size={2}/>
              <Geom
                type="point"
                position="item*score"
                color="user"
                shape="circle"
                size={4}
                style={{
                  stroke: "#fff",
                  lineWidth: 1,
                  fillOpacity: 1
                }}
              />
            </Chart>
          </Col>
          <Col span={16}>
            <Chart
              height={300} data={lineData} forceFit
              scale={{
                exam: {
                  tickCount: 10
                }
              }}
            >
              <p style={{ textAlign: 'center' }}>
                总分变化趋势
              </p>
              <Axis
                name="exam"
                label={{
                  offset: 30,
                  formatter(text, item, index) {
                    const pos = text.length / 3;
                    return `${text.slice(0, pos)}\n${text.slice(pos, 2 * pos)}\n${text.slice(2 * pos)}`;
                  },
                }}
              />
              <Axis name="score"/>
              <Tooltip
                crosshairs={{
                  type: "y"
                }}
              />
              <Geom type="line" position="exam*score" size={2}/>
              <Geom
                type="point"
                position="exam*score"
                size={4}
                shape={"circle"}
                style={{
                  stroke: "#fff",
                  lineWidth: 1
                }}
              />
            </Chart>
            {/*todo 企图把单折线图变成component,但是后来觉得似乎没有必要*/}
            {/*<SingleLineChart*/}
            {/*data = {lineData}*/}
            {/*/>*/}
          </Col>
        </Row>
        {/*利用list进行布局*/}
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={subData}
          renderItem={item => (
            <List.Item>
              <Chart
                height={300} data={item.lineData}
                scale={{
                  exam: {
                    tickCount: 8
                  }
                }}
                forceFit
              >
                <p style={{ textAlign: 'center' }}>
                  {`${COURSE_FULLNAME_ALIAS[item.title]} 考试趋势分析`}
                </p>
                <Axis
                  name="exam"
                  label={{
                    offset: 30,
                    formatter(text, item, index) {
                      const pos = text.length / 3;
                      return `${text.slice(0, pos)}\n${text.slice(pos, 2 * pos)}\n${text.slice(2 * pos)}`;
                    },
                  }}
                />
                <Axis name="score"/>
                <Tooltip
                  crosshairs={{
                    type: "y"
                  }}
                />
                <Geom type="line" position="exam*score" size={2}/>
                <Geom
                  type="point"
                  position="exam*score"
                  size={4}
                  shape={"circle"}
                  style={{
                    stroke: "#fff",
                    lineWidth: 1
                  }}
                />
              </Chart>
            </List.Item>
          )}
        />
      </div>
    </React.Fragment>
  )
);

export default ScoreLineChart;
