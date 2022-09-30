import { useNavigate } from 'react-router-dom';
import './styles.css';

const SobrePage = () => {
    const navigate = useNavigate();

    const handleSobreVoltar = e => {
        e.preventDefault();
        console.log('Sobre Voltar - OK');
        navigate('/');
    };

    return (
        <div className="sobre-page">
            <div className="sobre-btn">
                <div className="header">
                    <h1 className="h1-banco">SOBRE</h1>
                </div>
                <button
                    className="btn-sobre"
                    type="submit"
                    onClick={handleSobreVoltar}
                >
                    VOLTAR
                </button>
            </div>
        </div>
    );
};

export default SobrePage;
