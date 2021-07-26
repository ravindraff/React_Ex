import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
export default function DatePicker(props: any) {
  const { name, label, value, onChange } = props;
  const convertDate = (name: any, value: any) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        format="MMM/dd/yyyy"
        label={label}
        onChange={(date) => onChange(convertDate(name, date))}
        name={name}
        value={value}
      />
    </MuiPickersUtilsProvider>
  );
}
