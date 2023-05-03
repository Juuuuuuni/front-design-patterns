import { ToastContainer, toast } from "react-toastify";
import { Observable } from "~/components/ObserverPattern/Observable";
import "react-toastify/dist/ReactToastify.css";
import { Button, FormControlLabel, Switch } from "@material-ui/core";
import { HRTeam } from "~/components/ObserverPattern/HRTeam";
import { DevelopmentTeam } from "~/components/ObserverPattern/DevelopmentTeam";

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

export const ObserverPatternAboutRuleBook = () => {
  const onClickButton = () => {
    Observable.instance.notify("Button Clicked!!!");
  };

  const onClickToggle = () => {
    Observable.instance.notify("Toggle Clicked!!!!!!!!!!!");
  };

  return (
    <div className="App">
      <HRTeam />
      <DevelopmentTeam />
    </div>
  );
};
