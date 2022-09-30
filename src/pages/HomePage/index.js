import { useNavigate } from 'react-router-dom';
import './styles.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handleBanco = e => {
        e.preventDefault();
        console.log('Banco Page - OK');
        navigate('/banco');
    };

    const handleCadastro = e => {
        e.preventDefault();
        console.log('Cadastro Page - OK');
        navigate('/cadastro');
    };

    const handleSobre = e => {
        e.preventDefault();
        console.log('Sobre Page - OK');
        navigate('/sobre');
    };

    return (
        <div className="home-page">
            <div className="header">
                <h1 className="h1-home">DOE FÁCIL</h1>
            </div>
            <div className="home-container">
                <div className="banco-btn">
                    <button
                        className="btn-banco"
                        type="submit"
                        onClick={handleBanco}
                    >
                        BANCO
                    </button>
                </div>
                <div className="cadastro-btn">
                    <button
                        className="btn-cadastro"
                        type="submit"
                        onClick={handleCadastro}
                    >
                        CADASTRO
                    </button>
                </div>
                <div className="sobre-btn">
                    <button
                        className="btn-sobre"
                        type="submit"
                        onClick={handleSobre}
                    >
                        SOBRE NÓS
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
