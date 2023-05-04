import "react-toastify/dist/ReactToastify.css";
import { HRTeam } from "~/components/ObserverPattern/ruleBookExample/HRTeam";
import { Box } from "@mui/material";
import { Team } from "~/components/ObserverPattern/ruleBookExample/Team";

export const ObserverPatternAboutRuleBook = () => {
  return (
    <Box
      id="rulebook-root"
      sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <Box>
        <HRTeam />
      </Box>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Team
          name="Development"
          color="#656976"
          tasks={["Pro 1 유지보수", "Pro 2 개발"]}
        />
        <Team
          name="Planning"
          color="#D0D4FB"
          tasks={["Pro 2 기획", "Pro 3 기획"]}
        />
        <Team name="Sales" color="#A1F2F7" tasks={["Pro 1 영업"]} />
        <Team
          name="Design"
          color="#FFE350"
          tasks={["Pro 2 디자인", "Pro 3 디자인"]}
        />
        <Team
          name="Marketing"
          color="#A7F1D0"
          tasks={["홍보영상 촬영", "홈페이지 개선"]}
        />
      </Box>
    </Box>
  );
};
