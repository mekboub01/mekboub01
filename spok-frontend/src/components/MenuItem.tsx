interface MenuItemProps {
  horaire: string;
  children: React.ReactNode;
}

import styles from "./MenuItem.module.css";

export function MenuItem(props: MenuItemProps) {
  const { children, horaire } = props;
  console.log(props);
  return (
    <li className={styles.menuItem}>
      <span className={styles.horaire}>{horaire}</span>
      &nbsp;
      {children}
    </li>
  );
}
