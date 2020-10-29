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
  <Select large />
))
.add('Dropdown Medium', () => (
  <Select medium />
))
.add('Dropdown Small', () => (
  <Select small />
))
.add("Dropdown Large Faded", () => (
  <Select large faded />
))
.add('Dropdown Medium Faded', () => (
  <Select medium faded />
))
.add('Dropdown Small Faded', () => (
  <Select small faded />
))
