import styles from "./NouvelUtilisateurPage.module.css";

interface InputUserProps {
  label: string;
  id: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputUser(props: InputUserProps) {
  const {label, name, id, onChange } = props;
  return (
    <>
    <label htmlFor=(id)>{label}</label>
    <input id={id} name={name} type="text" onChange={onChange} />
    </>
  );
}


export default function NouvelUtilisateurPage() {
  return (
    <form>
      <div className={styles.formControl}>
        <label htmlFor="firstName">Prénom</label>
        <input type="text" id="firstName" name="firstName" />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="lastName">Nom</label>
        <input type="text" id="lastName" name="lastName" />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <InputUser label="Prénom" name="firstName" id="firstName" onChange={(event) => { const newText = event.currentTarget.value; setText(newText);
        }}/>
        <InputUser label="Nom" name="lastName" id="lastName" onChange={(event) => { const newText = event.currentTarget.value; setText(newText);
        }}/>
        <InputUser label="Email" name="email" id="email" onChange={(event) => { const newText = event.currentTarget.value; setText(newText);
        }}/>
      </div>
      {firstname.length > 2 || lastname.length > 2 || email.length > 6 && <button type="submit">Créer</button>}  
    </form>
  );
}
