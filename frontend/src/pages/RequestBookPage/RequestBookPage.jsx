import RequestBook from '../../components/RequestBook/RequestBook';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './RequestBookPage.module.css';

const RequestBookPage = () => {
    return (
        <div className={styles.formContainer}>
            <Header/>
            <RequestBook/>
            <Footer/>
        </div>
    );
};

export default RequestBookPage;