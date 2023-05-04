import { useEffect, useState } from "react";
import { RuleBook } from "~/components/ObserverPattern/ruleBookExample/RoolBook";
import { Box, Typography } from "@mui/material";

interface TeamProps {
  name: string;
  color: string;
  tasks: string[];
}

export const Team = ({ name, color, tasks }: TeamProps) => {
  const [companyRegulations, setCompanyRegulations] = useState<string[]>([]);

  useEffect(() => {
    RuleBook.instance.subscribe(setCompanyRegulations);
  }, []);

  return (
    <Box sx={{ background: color, padding: "10px", minWidth: "250px" }}>
      <Box sx={{ color: "black" }}>
        <Typography variant="h5" color="black">
          {name}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <Box sx={{ background: "#A050E2" }}>
          <Box>
            <Typography variant="h6" color="black">
              전사 규정
            </Typography>
          </Box>
          {companyRegulations.length > 0
            ? companyRegulations.map((reguldation, index) => (
                <Box>
                  <Typography key={index} color="black">
                    {reguldation}
                  </Typography>
                </Box>
              ))
            : "ㅠㅠ"}
        </Box>
        <Box sx={{ background: "#E7D3F8" }}>
          <Box>
            <Typography variant="h6" color="black">
              업무
            </Typography>
          </Box>
          {tasks.map((task, index) => (
            <Box>
              <Typography key={index} color="black">
                {task}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
