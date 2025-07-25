import React from "react";
import { Radio, ConfigProvider, Row, Col } from "antd";
import type { DirectionType } from "antd/lib/config-provider";
import fa_IR from "antd/lib/locale/fa_IR";
import en_US from "antd/lib/locale/en_US";
import { JalaliLocaleListener, DatePicker, Calendar } from "./index.ts";
import "./index.css";
import { RadioChangeEvent } from "antd/lib";

const App = () => {
  const [direction, setDirection] = React.useState<DirectionType>("rtl");
  const [locale, setLocale] = React.useState(fa_IR);

  const changeDirection = (e: RadioChangeEvent) => {
    const directionValue = e.target.value;
    setDirection(directionValue);
  };
  const changeLocale = (e: RadioChangeEvent) => {
    const localeValue = e.target.value;
    setLocale(localeValue);
  };

  return (
    <ConfigProvider locale={locale} direction={direction}>
      <JalaliLocaleListener />
      <Row justify="center">
        <Col span={18}>
          <Row><h2> Ant-Design Jalali Date picker </h2></Row>

          <Row>
            <div style={{ marginBottom: 16 }}>
              <span style={{ marginRight: 16 }}>Change direction of components: </span>
              <Radio.Group defaultValue={direction} onChange={changeDirection}>
                <Radio.Button key="ltr" value="ltr">
                  LTR
                </Radio.Button>
                <Radio.Button key="rtl" value="rtl">
                  RTL
                </Radio.Button>
              </Radio.Group>
            </div>
          </Row>
          <Row>
            <div style={{ marginBottom: 16 }}>
              <span style={{ marginRight: 16 }}>Change locale of components: </span>
              <Radio.Group defaultValue={locale} onChange={changeLocale}>
                <Radio.Button key="en" value={en_US}>
                  EN
                </Radio.Button>
                <Radio.Button key="fa" value={fa_IR}>
                  FA_IR
                </Radio.Button>
              </Radio.Group>
            </div>
          </Row>

          <hr style={{ marginBottom: 24 }} />

          <Row>
            <div style={{ marginBottom: 16 }}>
              <span style={{ marginRight: 16 }}>DatePicker: </span>
              <DatePicker />
            </div>
          </Row>
          <Row>
            <div style={{ marginBottom: 16 }}>
              <span style={{ marginRight: 16 }}>RangePicker: </span>
              <DatePicker.RangePicker />
            </div>
          </Row>
          <Row>
            <div style={{ marginBottom: 16 }}>
              <div style={{ marginBottom: 16 }}>
                <span style={{ marginRight: 16 }}>Calendar: </span>
              </div>
              <Calendar />
            </div>
          </Row>
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default App;
