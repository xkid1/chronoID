#!/usr/bin/env node
"use strict";
import ChronoID from "@src/chronoid";
const snowflake = () => new ChronoID().snowflake();
const UUIDv7 = () => new ChronoID().UUIDv7();

module.exports = {
  ChronoID,
  snowflake,
  UUIDv7,
};
