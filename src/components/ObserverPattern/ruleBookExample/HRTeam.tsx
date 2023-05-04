import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

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
    <Box sx={{ background: "#1A0000", padding: "10px" }}>
      <Box>
        <Typography variant="h3">HR Team business</Typography>
      </Box>
      {rules.map((rule, index) => (
        <Box
          sx={{ display: "flex", gap: "10px", alignItems: "center" }}
          key={index}
        >
          <Typography variant="h5">{rule}</Typography>{" "}
          <Button
            sx={{ background: "#660000" }}
            onClick={() => onRemoveRule(rule)}
          >
            -
          </Button>
        </Box>
      ))}
    </Box>
  );
};
