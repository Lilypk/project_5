import React from "react";
import { storiesOf } from "@storybook/react";
import Email from "./Email";

storiesOf("Form", module)
 
.add("Email Input", () => (
  <Email size='small' placeholder='Email' />
))
.add("Email Input Medium", () => (
  <Email size='medium' />
))
.add("Email Input Large", () => (
  <Email size='large' />
))
.add("Dropdown Large", () => (
  <select type="select" label="select" />
))

