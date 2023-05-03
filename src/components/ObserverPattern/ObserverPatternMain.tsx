import { ToastContainer, toast } from "react-toastify";
import { Observable } from "~/components/ObserverPattern/Observable";
import "react-toastify/dist/ReactToastify.css";
import { Button, FormControlLabel, Switch } from "@material-ui/core";

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
  const onClickButton = () => {
    Observable.instance.notify("Button Clicked!!!");
  };

  const onClickToggle = () => {
    Observable.instance.notify("Toggle Clicked!!!!!!!!!!!");
  };

  return (
    <div className="App">
      <Button variant="contained" onClick={onClickButton}>
        Click me!
      </Button>
      <FormControlLabel
        control={<Switch name="" onChange={onClickToggle} />}
        label="Toggle me!"
      />
      <ToastContainer />
    </div>
  );
};
