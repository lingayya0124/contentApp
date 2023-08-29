import { TextInput } from "@mantine/core";
import React, { useState } from "react";

function FilterInput({ onUpdate }) {
  const [search, setSearch] = useState("");
  const handeChange = (text) => {
    setSearch(text);
    onUpdate(text);
  };
  return (
    <TextInput
      value={search}
      onChange={(event) => handeChange(event.currentTarget.value)}
      placeholder="Filter Headings"
    />
  );
}

export default FilterInput;
