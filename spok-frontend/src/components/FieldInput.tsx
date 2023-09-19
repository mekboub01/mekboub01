import styles from "./FieldInput.module.css";

/**
 * @typedef {{label: string} & React.ComponentPropsWithoutRef<'input'>}FieldInputProps
 */

/**
 * @params {FieldInputProps} props
 * @returns
 */

export interface FieldInputProps
  extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
}

export default function FieldInput() {
  const { id, label, ...inputProps } = props;
  return (
    <div className={styles.formControl}>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...inputProps} />
    </div>
  );
}
