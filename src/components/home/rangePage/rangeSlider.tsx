import { Container, Row, Col } from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import "./rangeSlider.scss";
const RangeSlider = () => {
  const [range, setRaneg] = useState<any>({
    firstRange: "",
    secondRange: "",
    thirdRange: "",
    forthRange: "",
  });

  const totalValue = range?.firstRange + range?.secondRange;
  const per = (totalValue / 100) * range.thirdRange;

  const grandValue = totalValue + per;

  const bidSuccess = range?.forthRange * 100;
  return (
    <>
      <Container>
        <div  className="range-slider-container" id='slider' >
        <Row className="bidding-section">
          <p id="headingTitle">
            Check To See if Youre
            <br /> Bidding Enough!
          </p>
          <Col className="rangeCol">
            <div className="col-lg-12">
              <p>Fixed Overhead Cost Per Year</p>
              <Slider
                min={0}
                trackStyle={{ backgroundColor: "darkblue", height: 10 }}
                railStyle={{
                  backgroundColor: "rgba(25, 25, 25, 0.12)",
                  height: 10,
                }}
                dotStyle={{ display: "none" }}
                handleStyle={{
                  boxShadow:
                    "0 2px 4px 1px rgba(67, 103, 178, 0.4), 0 1px 1px 0 rgba(25, 25, 25, 0.12)",
                  width: "22px",
                  height: "22px",
                  border: " solid 0.3px rgba(0, 0, 0, 0.5)",
                  opacity: "1",
                }}
                marks={{
                  0: "0",
                  125000: "125,000",
                  250000: "250,000",
                  375000: "375,000",
                  500000: "500,000",
                }}
                step={125000}
                defaultValue={0}
                max={500000}
                value={range.firstRange}
                onChange={(e) => {
                  setRaneg({ ...range, firstRange: e });
                }}
              />
            </div>

            <div className="col-lg-12">
              <p>Profit Target Per Year</p>
              <Slider
                min={0}
                trackStyle={{ backgroundColor: "darkblue", height: 10 }}
                railStyle={{
                  backgroundColor: "rgba(25, 25, 25, 0.12)",
                  height: 10,
                }}
                dotStyle={{ display: "none" }}
                handleStyle={{
                  boxShadow:
                    "0 2px 4px 1px rgba(67, 103, 178, 0.4), 0 1px 1px 0 rgba(25, 25, 25, 0.12)",
                  width: "22px",
                  height: "22px",
                  border: " solid 0.3px rgba(0, 0, 0, 0.5)",
                  opacity: "1",
                }}
                marks={{
                  0: "0",
                  125000: "125,000",
                  250000: "250,000",
                  375000: "375,000",
                  500000: "500,000",
                }}
                step={125000}
                defaultValue={0}
                max={500000}
                value={range.secondRange}
                onChange={(e) => {
                  setRaneg({ ...range, secondRange: e });
                }}
              />
            </div>
            <p>Profit Target Per Year</p>
            <div className="col-lg-12">
              <Slider
                min={0}
                trackStyle={{ backgroundColor: "darkblue", height: 10 }}
                railStyle={{
                  backgroundColor: "rgba(25, 25, 25, 0.12)",
                  height: 10,
                }}
                dotStyle={{ display: "none" }}
                handleStyle={{
                  boxShadow:
                    "0 2px 4px 1px rgba(67, 103, 178, 0.4), 0 1px 1px 0 rgba(25, 25, 25, 0.12)",
                  width: "22px",
                  height: "22px",
                  border: " solid 0.3px rgba(0, 0, 0, 0.5)",
                  opacity: "1",
                }}
                marks={{
                  0: "0",
                  25: "25",
                  50: "50",
                  75: "75",
                  100: "100",
                }}
                step={25}
                defaultValue={0}
                max={100}
                value={range.thirdRange}
                onChange={(e) => setRaneg({ ...range, thirdRange: e })}
              />
            </div>
            <div className="col-lg-12 bidValue">
              <span>
                Bid value required to recover Over heads and profit per year
              </span>
              <span className="totalValue">${grandValue}</span>
            </div>
          </Col>
          </Row>

          <Row className="bid-success-rate">
            <Col lg={12}>
              <p>Bid Success Rate</p>
              <Slider
                min={0}
                trackStyle={{ backgroundColor: "darkblue", height: 10 }}
                railStyle={{
                  backgroundColor: "rgba(25, 25, 25, 0.12)",
                  height: 10,
                }}
                dotStyle={{ display: "none" }}
                handleStyle={{
                  boxShadow:
                    "0 2px 4px 1px rgba(67, 103, 178, 0.4), 0 1px 1px 0 rgba(25, 25, 25, 0.12)",
                  width: "22px",
                  height: "22px",
                  border: " solid 0.3px rgba(0, 0, 0, 0.5)",
                  opacity: "1",
                }}
                marks={{
                  0: "0",
                  25: "25",
                  50: "50",
                  75: "75",
                  100: "100",
                }}
                step={25}
                defaultValue={0}
                max={100}
                value={range.forthRange}
                onChange={(e) => setRaneg({ ...range, forthRange: e })}
              />
              <div className="bid-per-year" >
                <span>You need to bid per year</span>
                <span className="totalValue">{bidSuccess}</span>
              </div>
              <p className="title">Let's help youbid more and win mor jobs!</p>
            </Col>
          </Row>
        
        </div>
      </Container>
    </>
  );
};
export default RangeSlider;
