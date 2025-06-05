import styles from "./RegisterExitoso.module.css";
import RegisterConfirmed from "../../components/RegisterConfirmed/RegisterConfirmed";

const RegisterExitoso = () => {
    return (
        <div className={styles.formContainer}>
            <RegisterConfirmed/>
        </div>
    );
};

export default RegisterExitoso;