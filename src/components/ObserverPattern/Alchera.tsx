import { HRTeam } from "~/components/ObserverPattern/RoolBook";
import { Button } from "@material-ui/core";
import { DevelopmentTeam } from "~/components/ObserverPattern/DevelopmentTeam";

export const Alchera = () => {
  const onClick = () => {
    HRTeam.instance.notify("이게 되나 ?");
  };
  return (
    <>
      <Button onClick={onClick}>Test</Button>
      <DevelopmentTeam position={} inform={} />
    </>
  );
};
