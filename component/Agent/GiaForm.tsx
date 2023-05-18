import { handleChange } from "@helper/objects/setter";
import { Grid, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { InsurancePolicy } from "@typedefs/policy";
import moment from "moment";
import { FC } from "react";

interface IGiaForm {
  data?: Partial<InsurancePolicy>;
  setData: React.Dispatch<React.SetStateAction<Partial<InsurancePolicy>>>;
}

const GiaForm: FC<IGiaForm> = ({ data, setData }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField fullWidth label="Insurer" value={data?.insurer} name="insurer" onChange={(e) => handleChange(e, data, setData)} />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Line" value={data?.line} name="line" onChange={(e) => handleChange(e, data, setData)} />
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            label="GIA Issued Date"
            value={data?.giaIssuedDate ? moment(data?.giaIssuedDate) : moment(new Date())}
            onChange={(e) => handleChange({ target: { name: "giaIssuedDate", value: e } }, data, setData)}
            slotProps={{ textField: { fullWidth: true } }}
          />
          {/* <TextField fullWidth label="GIA Issued Date" value={moment(data?.giaIssuedDate)} name="giaIssuedDate" onChange={(e) =>handleChange(e, data, setData)} /> */}
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Policy No." value={data?.policyNo} name="policyNo" onChange={(e) => handleChange(e, data, setData)} />
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            label="Inception"
            value={data?.expiry ? moment(data?.inception) : moment(new Date())}
            onChange={(e) => handleChange({ target: { name: "inception", value: e } }, data, setData)}
            slotProps={{ textField: { fullWidth: true } }}
          />
          {/* <TextField fullWidth label="Inception" value={data?.inception} name="inception" onChange={(e) => handleChange(e, data, setData)} /> */}
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Assured" value={data?.assured} name="assured" onChange={(e) => handleChange(e, data, setData)} />
        </Grid>
        <Grid item xs={12}>
          <DatePicker
            label="Expiry"
            value={data?.expiry ? moment(data?.expiry) : moment(new Date())}
            onChange={(e) => handleChange({ target: { name: "expiry", value: e } }, data, setData)}
            slotProps={{ textField: { fullWidth: true } }}
          />
          {/* <TextField fullWidth label="Expiry" value={moment(data?.expiry)} name="expiry" onChange={(e) =>handleChange(e, data, setData)} /> */}
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Mailing Address" value={data?.mailingAddress} name="mailingAddress" onChange={(e) => handleChange(e, data, setData)} />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="GIA AR" value={data?.giaAr} name="giaAr" onChange={(e) => handleChange(e, data, setData)} />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="GIA OR" value={data?.giaOr} name="giaOr" onChange={(e) => handleChange(e, data, setData)} />
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            label="GIA Date"
            value={data?.giaDate ? moment(data?.giaDate) : moment(new Date())}
            onChange={(e) => handleChange({ target: { name: "giaDate", value: e } }, data, setData)}
            slotProps={{ textField: { fullWidth: true } }}
          />
          {/* <TextField fullWidth label="GIA Date" value={moment(data?.giaDate)} name="giaDate" onChange={(e) =>handleChange(e, data, setData)} /> */}
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Insurance OR NO." value={data?.insuranceOrNo} name="insuranceOrNo" onChange={(e) => handleChange(e, data, setData)} />
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            label="Insurance OR NO. Date"
            value={data?.insuranceOrNoDate ? moment(data?.insuranceOrNoDate) : moment(new Date())}
            onChange={(e) => handleChange({ target: { name: "insuranceOrNoDate", value: e } }, data, setData)}
            slotProps={{ textField: { fullWidth: true } }}
          />
          {/* <TextField fullWidth label="Insurance OR NO. Date" value={moment(data?.insuranceOrNoDate)} name="insuranceOrNoDate" onChange={(e) =>handleChange(e, data, setData)} /> */}
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

export default GiaForm;