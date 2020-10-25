import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "./Form";

storiesOf("Form", module)
  .add("Email Input", () => (
    <input label="Email" placeholder="Email" type="email" />
  ))
  .add("Email Input Medium", () => (
    <input placeholder="Email" type="email" medium label="Email" />
  ))
  .add("Email Input Large", () => (
    <input label="Email" placeholder="Email" type="email" large />
  ))
  .add("Dropdown Large", () => (
    <select type="select" label="select" />
  ))

  