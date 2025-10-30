"use client";
import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import theme from "./theme";

// Create a client-side cache
const cache = createCache({ key: "css", prepend: true });

export default function ThemeRegistry({ children }) {
	return (
		<CacheProvider value={cache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</CacheProvider>
	);
}