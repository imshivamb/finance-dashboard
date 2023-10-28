import { useState } from "react";

import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/styles/FlexBetween";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[600]}>
      {/* Left Side */}
      <FlexBetween gap="0.75rem">
        <CatchingPokemonIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          Financeal
        </Typography>
      </FlexBetween>
      {/* Right Side */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[200] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[200] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
