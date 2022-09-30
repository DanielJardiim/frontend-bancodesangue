import { useNavigate } from 'react-router-dom';
import './styles.css';

const CadastroPage = () => {
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Cadastro - OK');
        navigate('/');
    };

    return (
        <div className="cadastro-page">
            <div className="header">
                <h1 className="h1-cadastro">CADASTRO</h1>
            </div>
            <div className="cadastro-container">
                <div className="entrar-dados">
                    <div className="nome">
                        <label>Nome:</label>
                        <input type="text" name="nome" id="nome" required />
                    </div>
                    <div className="endereco">
                        <label>Endereço:</label>
                        <input
                            type="text"
                            name="endereco"
                            id="endereco"
                            required
                        />
                    </div>
                    <div className="telefone">
                        <label>telefone:</label>
                        <input
                            type="text"
                            name="telefone"
                            id="telefone"
                            required
                        />
                    </div>
                    <div className="email">
                        <label>Email:</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className="tipo-sanguineo">
                        <label>Tipo Sanguineo:</label>
                        <input
                            type="text"
                            name="tipo-sanguineo"
                            id="tipo-sanguineo"
                            required
                        />
                    </div>
                    <div className="senha">
                        <label>Senha:</label>
                        <input
                            type="password"
                            name="senha"
                            id="senha"
                            required
                        />
                    </div>
                </div>
                <div className="cadastrar-btn">
                    <button
                        className="btn-cadastrar"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        CADASTRAR
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CadastroPage;
