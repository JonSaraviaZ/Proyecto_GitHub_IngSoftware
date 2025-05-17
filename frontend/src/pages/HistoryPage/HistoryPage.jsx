import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './HistoryPage.module.css';
import History from '../../components/History/History';

const HistoryPage = () => {

    return (
        <div>
            <Header/>
            <History/>
            <Footer/>
        </div>
    )
}

export default HistoryPage;