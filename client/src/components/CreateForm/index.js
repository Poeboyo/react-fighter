import React from "react";
import Select from "react-select";
import "./styles.css";
import { Button, TextInput, Row, Col, Icon } from "react-materialize";

const options = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
  { value: 11, label: "11" },
  { value: 12, label: "12" },
  { value: 13, label: "13" },
  { value: 14, label: "14" },
  { value: 15, label: "15" },
  { value: 16, label: "16" },
  { value: 17, label: "17" },
  { value: 18, label: "18" },
  { value: 19, label: "19" },
  { value: 20, label: "20" },
  { value: 21, label: "21" },
  { value: 22, label: "22" },
  { value: 23, label: "23" },
  { value: 24, label: "24" },
  { value: 25, label: "25" },
];

function CreateForm() {
  return (
    <div>
      <img src="./images/brain.gif" id="brain" alt="brain"></img>
      <img
        src="./images/characterCreate.png"
        id="create-your-character"
        alt="character create"
      ></img>
      <form className="charForm">
        <Row className="center-align " id="characterName">
          <TextInput
            placeholder="Character Name"
            className="white"
            s={8}
            id="characterNameInput"
          />
        </Row>

        <Row className="center-align text-white" id="characterImage">
          <TextInput
            id="characterImageInput"
            placeholder="Character Image URL"
            className="white"
            s={8}
          />
        </Row>

        <Row id="selections">
          <Col className=" black-text white" s={2} id="attack">
            <Select placeholder="Attack" options={options} />
          </Col>{" "}
          <Col className=" black-text white" s={2} id="defense">
            <Select options={options} placeholder="Defense" />
          </Col>{" "}
          <Col className=" black-text white" s={2} id="speed">
            <Select options={options} placeholder="Speed" />
          </Col>{" "}
          <Col className=" black-text white" s={2} id="evasion">
            <Select options={options} placeholder="Evasion" />
          </Col>
        </Row>
        <Row>
          <Button
            node="button"
            type="submit"
            waves="light"
            className="blue submit"
          >
            Submit
            <Icon right>send</Icon>
          </Button>
        </Row>
      </form>
    </div>
  );
}

export default CreateForm;
