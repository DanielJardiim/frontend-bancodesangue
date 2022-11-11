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
                <div className="Finalidade">
                    <h1 className="h1">Finalidade do Projeto</h1>
                    <h1>
                        O projeto teve como objetivo, instruir acerca da doação
                        de sangue no Brasil, a fim do facilitamento da doação de
                        sangue pelos cidadões.
                    </h1>
                </div>
                <div className="Integrantes">
                    <h1 className="h1">Integrantes do Grupo</h1>
                    <h1>
                        Nome: Vinícius de Oliveira Azevedo - 1526 / Daniel
                        Jardim Nunes - 1525<br></br>
                        Curso: Engenharia de Computação
                    </h1>
                </div>
                <div className="Doadores">
                    <h1 className="h1">Quem doa para quem:</h1>
                    <h1>
                        A+ (doa para) → A+ / AB+ <br></br> A- (doa para) → A+ /
                        AB+ / A- / AB- <br></br>
                        B+ (doa para) → B+ / AB+ <br></br> B- (doa para) → B+ /
                        AB+ / B- / AB- <br></br>
                        AB+ (doa para) → AB+ <br></br> AB- (doa para) → AB+ /
                        AB- <br></br>
                        O+ (doa para) → A+ / AB+ / B+ / O+ <br></br> O- (doa
                        para) → Todos <br></br>
                    </h1>
                </div>
                <button
                    className="btn-sobre-voltar"
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
