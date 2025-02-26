import React, { useState } from "react";
import { Box, Button, ButtonGroup } from "@mui/material";

export default function RoundedNav() {
  const [active, setActive] = useState("Refer");

  const menuItems = ["Refer", "Benefits", "FAQs", "Support"];

  return (
    <Box sx={{width: "100%", display: "flex",
        justifyContent: "center",
        alignItems: "center",}}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        backgroundColor: "rgba(26, 115, 232, 0.11)", 
        padding: "8px 16px",
        borderRadius: "24px",
        width: {xs:"90%", md: "30%"},
      }}
    >
      {menuItems.map((item) => (
        <Button
          key={item}
          onClick={() => setActive(item)}
          sx={{
            color: active === item ? "#1A73E8" : "#333",
            fontWeight: active === item ? "bold" : "normal",
            textTransform: "none",
            fontSize: "14px",
            position: "relative",
            "&:hover": { backgroundColor: "transparent" },
          }}
        >
          {item}
          {active === item && (
            <Box
              sx={{
                position: "absolute",
                bottom: "-2px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "4px",
                height: "4px",
                backgroundColor: "#1A73E8",
                borderRadius: "50%",
              }}
            />
          )}
        </Button>
      ))}
    </Box>
    </Box>
  );
}
