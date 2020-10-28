import React from "react";
import { storiesOf } from "@storybook/react";
import Email from "./Email";
import Select from './Select';


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
  <Select size='large' />
))
.add('Dropdown Medium', () => (
  <Select size='medium' />
))
.add('Dropdown Small', () => (
  <Select size='small' />
))
.add("Dropdown Large Faded", () => (
  <Select size='large' />
))
.add('Dropdown Medium Faded', () => (
  <Select size='medium' />
))
.add('Dropdown Small Faded', () => (
  <Select size='small' />
))
