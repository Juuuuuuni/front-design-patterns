import { toast } from "react-toastify";
import { Observable } from "~/components/ObserverPattern/basicExample/Observable";
import "react-toastify/dist/ReactToastify.css";
import { HRTeam } from "~/components/ObserverPattern/ruleBookExample/HRTeam";
import { DevelopmentTeam } from "~/components/ObserverPattern/ruleBookExample/DevelopmentTeam";
import { Box } from "@mui/material";

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
    <Box id="rulebook-root" sx={{ display: "flex", flexDirection: "row" }}>
      <Box>
        <HRTeam />
      </Box>
      <Box>
        <DevelopmentTeam />
      </Box>
    </Box>
  );
};
