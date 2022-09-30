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
            <div className="banco-btn">
                <button
                    className="btn-banco"
                    type="submit"
                    onClick={handleBancoVoltar}
                >
                    Banco
                </button>
            </div>
        </div>
    );
};

export default BancoPage;
