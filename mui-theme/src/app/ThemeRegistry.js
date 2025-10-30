"use client";
import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

export default function ThemeRegistry({ children }) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}