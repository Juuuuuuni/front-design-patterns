import { useEffect, useState } from "react";
import { RuleBook } from "~/components/ObserverPattern/ruleBookExample/RoolBook";
import { Box, Typography } from "@mui/material";

export const DevelopmentTeam = () => {
  const [companyRegulations, setCompanyRegulations] = useState<string[]>([]);

  useEffect(() => {
    RuleBook.instance.subscribe(setCompanyRegulations);
  }, []);

  return (
    <Box sx={{ background: "grey" }}>
      <Box>Here is Development team</Box>
      {companyRegulations.map((reguldation, index) => (
        <Typography key={index}>{reguldation}</Typography>
      ))}
    </Box>
  );
};
