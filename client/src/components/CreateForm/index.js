import React from "react";
import Select from "react-select";
import "./styles.css";
import { Button, TextInput, Row, Col, Icon, Dropdown } from "react-materialize";
import createLogo from "../../assets/images/characterCreate.png";
import brain from "../../assets/images/brain.gif";

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

function CreateForm(props) {
  return (
    <div id="flex-form">
      <img src={brain} id="brain" alt="brain"></img>
      <img
        src={createLogo}
        id="create-your-character"
        alt="character create"
      ></img>
      <form id="character-form">
        <Row id="characterName">
          <TextInput
            s={6}
            m={6}
            l={6}
            placeholder="Character Name"
            className="white"
            id="characterNameInput"
          />
        </Row>

        <Row id="characterImage">
          <TextInput
            s={6}
            m={6}
            l={6}
            id="characterImageInput"
            placeholder="Character Image URL"
            className="white"
          />
        </Row>

        <Row id="selections">
          <Dropdown
            id="Dropdown_6"
            options={{
              alignment: "left",
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              container: null,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250,
            }}
            trigger={<Button node="button">Drop Me!</Button>}
          >
            <a href="#" value={1}>
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">7</a>
            <a href="#">8</a>
            <a href="#">9</a>
            <a href="#">10</a>
            <a href="#">5</a>
            <a href="#">5</a>
            <a href="#">5</a>
            <a href="#">5</a>
            <a href="#">5</a>
            <a href="#">5</a>
            <a href="#">5</a>
            <a href="#">5</a>
            <a href="#">5</a>
            <a href="#">5</a>
            <a href="#">5</a>
            <a href="#">5</a>
            <a href="#">5</a>
            <a href="#">5</a>
            <a href="#">5</a>
          </Dropdown>
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
