import { Fragment, useEffect, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

import { RuleBook } from "~/components/ObserverPattern/ruleBookExample/RoolBook";

const defaultRules = [
  "refresh vacation",
  "flextime",
  "welcome kit",
  "massage chair",
  "snack bar",
] as const;

export const HRTeam = () => {
  const [rules, setRules] = useState<string[]>(defaultRules);

  const onRemoveRule = (removedRule: string) => {
    const unRemovedRules = rules.filter((rule) => rule !== removedRule);

    setRules(unRemovedRules);
    RuleBook.instance.notify(unRemovedRules);
  };

  useEffect(() => {
    // RuleBook.instance.subscribe(setRules);
    RuleBook.instance.notify(defaultRules);
  }, []);

  return (
    <Fragment>
      {rules.map((rule, index) => (
        <Fragment key={index}>
          <Typography>{rule}</Typography>{" "}
          <Button onClick={() => onRemoveRule(rule)}>-</Button>
        </Fragment>
      ))}
    </Fragment>
  );
};
