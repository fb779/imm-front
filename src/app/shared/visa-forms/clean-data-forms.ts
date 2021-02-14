import { FormGroup } from "@angular/forms";

/****************************************
 *          clean data to send          *
 ****************************************/
export const cleanData = (form: FormGroup) => {
  const data = form.value;
  const controls = Object.keys(form.controls);

  const fields = controls.reduce((acc, cur) => {
    const curControl = form.controls[cur];
    if (curControl.hasOwnProperty("controls")) {
      /**
       * se realiza la asignacion de todos los campos, con y sin informacion
       */
      const ctlValues = Object.keys(curControl["controls"]).reduce(
        (ac, el) =>
          el.includes("list") ? { ...ac, [el]: [] } : { ...ac, [el]: "" },
        {}
      );
      acc = { ...acc, ...ctlValues, ...curControl.value };

      /**
       * se realiza la asignacion de los campos con informacion
       */
      // acc = { ...acc, ...curControl.value };
    } else {
      acc = { ...acc, [cur]: curControl.value };
    }

    return acc;
  }, {});

  return { ...fields };
};
