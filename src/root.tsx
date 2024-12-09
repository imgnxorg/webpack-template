import "./styles.css";
import React from "react";
import { Container, createRoot } from "react-dom/client";
import Page from "./page";
import { Press } from "../types/index.d";
const domNode = document.getElementById("root") as Container;

const children = (
    <Press>
        <Page>{<></>}</Page>
    </Press>
);

if (domNode) {
    const root = createRoot(domNode);
    root.render(children);
} else {
    console.error("Root element not found");
}
