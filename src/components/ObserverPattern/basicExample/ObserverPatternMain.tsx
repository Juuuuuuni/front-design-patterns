import { ToastContainer, toast } from "react-toastify";
import { Observable } from "~/components/ObserverPattern/basicExample/Observable";
import "react-toastify/dist/ReactToastify.css";
import { Button, FormControlLabel, Switch } from "@mui/material";
import { ObserverPatternAboutRuleBook } from "~/components/ObserverPattern/ruleBookExample/ObserverPatternAboutRuleBook";
import { useState } from "react";

const logger = (data) => {
  console.log(`${Date.now()} ${data}`);
};

const toastify = (data) => {
  toast(data, {
    position: toast.POSITION.BOTTOM_RIGHT,
    closeButton: false,
    autoClose: 2000,
  });
};

Observable.instance.subscribe(logger);
Observable.instance.subscribe(toastify);

export const ObserverPatternMain = () => {
  const [show, setShow] = useState(false);

  const onClickButton = () => {
    Observable.instance.notify("Button Clicked!!!");
  };

  const onClickToggle = () => {
    Observable.instance.notify("Toggle Clicked!!!!!!!!!!!");
  };

  return (
    <>
      <div className="App">
        <Button variant="contained" onClick={onClickButton}>
          Click me!
        </Button>
        <FormControlLabel
          control={<Switch name="" onChange={onClickToggle} />}
          label="Toggle me!"
        />
        <ToastContainer />
        <Button onClick={() => setShow(true)}>Custom</Button>
      </div>
      {show ? <ObserverPatternAboutRuleBook /> : null}
    </>
  );
};
