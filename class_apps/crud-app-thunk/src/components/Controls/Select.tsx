import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@material-ui/core";
import React from "react";
export default function Select(props: any) {
  const { name, label, value, onChange, items } = props;
  return (
    <FormControl variant="outlined" /* {...(error && { error: true })} */>
      <InputLabel>{label}</InputLabel>
      <MuiSelect>
        <MenuItem value="">None</MenuItem>
        {items.map((item: any) => (
          <MenuItem value={item.id} key={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
