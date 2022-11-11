import { useNavigate } from 'react-router-dom';
import './styles.css';

const BancoPage = () => {
    const navigate = useNavigate();

    const handleBancoVoltar = e => {
        e.preventDefault();
        console.log('Banco Voltar - OK');
        navigate('/');
    };

    return (
        <div className="banco-page">
            <div className="header">
                <h1 className="h1-banco">BANCO DE SANGUE</h1>
            </div>
            <div className="banco-container">
                <div className="lado-1">
                    <div className="A-mais">
                        <h1 className="h1">A+</h1>
                        <h1>
                            CAPACIDADE: 1000🔋 <br></br>
                            EM ESTOQUE: {window.localStorage.getItem('A+')}%
                        </h1>
                    </div>
                    <div className="A-menos">
                        <h1 className="h1">A-</h1>
                        <h1>
                            CAPACIDADE: 1000🔋 <br></br>
                            EM ESTOQUE: {window.localStorage.getItem('A-')}%
                        </h1>
                    </div>
                    <div className="B-mais">
                        <h1 className="h1">B+</h1>
                        <h1>
                            CAPACIDADE: 1000🔋 <br></br>
                            EM ESTOQUE: {window.localStorage.getItem('B+')}%
                        </h1>
                    </div>
                    <div className="B-menos">
                        <h1 className="h1">B-</h1>
                        <h1>
                            CAPACIDADE: 1000🔋 <br></br>
                            EM ESTOQUE: {window.localStorage.getItem('B-')}%
                        </h1>
                    </div>
                </div>
                <div className="banco-btn">
                    <button
                        className="btn-banco"
                        type="submit"
                        onClick={handleBancoVoltar}
                    >
                        VOLTAR
                    </button>
                </div>
                <div className="lado-2">
                    <div className="AB-mais">
                        <h1 className="h1">AB+</h1>
                        <h1>
                            CAPACIDADE: 1000🔋 <br></br>
                            EM ESTOQUE: {window.localStorage.getItem('AB+')}%
                        </h1>
                    </div>
                    <div className="AB-menos">
                        <h1 className="h1">AB-</h1>
                        <h1>
                            CAPACIDADE: 1000🔋 <br></br>
                            EM ESTOQUE: {window.localStorage.getItem('AB-')}%
                        </h1>
                    </div>
                    <div className="O-mais">
                        <h1 className="h1">O+</h1>
                        <h1>
                            CAPACIDADE: 1000🔋 <br></br>
                            EM ESTOQUE: {window.localStorage.getItem('O+')}%
                        </h1>
                    </div>
                    <div className="O-menos">
                        <h1 className="h1">O-</h1>
                        <h1>
                            CAPACIDADE: 1000🔋 <br></br>
                            EM ESTOQUE: {window.localStorage.getItem('O-')}%
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BancoPage;
