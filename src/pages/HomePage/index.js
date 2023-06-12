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

    const handleLogoff = e => {
        e.preventDefault();
        console.log('LogOff - OK');
        navigate('/');
    };

    return (
        <div className="home-page">
            <div className="header">
                <h1 className="h1-home">Bloodmate Hub</h1>
                <button
                    className="btn-logoff"
                    type="submit"
                    onClick={handleLogoff}
                > Logoff                     
                </button>   
            </div>
            <div className="home-container">
                <div className="banco-btn">
                    <button
                        className="btn-banco"
                        type="submit"
                        onClick={handleBanco}
                    >
                    <h1 className="h2-banco">Banco</h1>                       
                    </button>

                </div>
                <div className="cadastro-btn">
                    <button
                        className="btn-cadastro"
                        type="submit"
                        onClick={handleCadastro}
                    >
                    <h1 className="h2-cadastro">Cadastro</h1>     
                    </button>
                </div>
                <div className="sobre-btn">
                    <button
                        className="btn-sobre"
                        type="submit"
                        onClick={handleSobre}
                    >
                    <h1 className="h2-sobre">Sobre nós</h1>    
                    </button>
                </div>                            
            </div>
        </div>
    );
};

export default HomePage;

