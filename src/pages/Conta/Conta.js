import Menu from '../../components/Menu/Menu';
import arrowIcon from '../../assets/imgs/arrow-icon.png';
import userImage from '../../assets/imgs/user-image.png';
import cameraIcon from '../../assets/imgs/camera-icon.png';
// import { useContext, useEffect, useState } from 'react';
// import { AuthGoogleContext } from '../../contexts/authGoogle';
// import { toast } from 'react-toastify';
import './Conta.css';

function Conta() {
//     const { user } = useContext(AuthGoogleContext);
//     let userLogado = {};
//     if (user) {
//         try {
//             userLogado = JSON.parse(user);
//         } catch (e) {
//             console.error("Erro ao fazer parse do JSON:", e);
//         }
//         if (userLogado && userLogado.photoURL) {
//             console.log(userLogado.photoURL);
//         } else {
//             console.error("Usuário não possui foto.");
//         }
//     } else {
//     console.error("Usuário não definido.");
// }

    return(
        <div className="container-fluid">
            <div className="row">

                <Menu />

                <div className="col col-10 p-0" id="playbooksMain">

                    <div className="contaHeader">
                        <p className="contaTitle">Minha Conta</p>

                        <div className="perfilFixedMenu">
                            <img className="userImage" src={userImage} alt="imagem de perfil" />
                            <p className="userName">Ana Vitória</p>
                            <img src={arrowIcon} alt="arrow icon" />
                        </div>
                    </div>

                    <div className="contaContainer">
                        <div className="userImageBox">
                            <img className="contaUserImage" src={userImage} alt="foto de perfil" />
                            <img className="cameraIcon" src={cameraIcon} alt="ícone de alterar foto" />
                        </div>

                        <div className="formCadastroConta">
                            <div className="boxNomeEmailConta">
                                <div className="form-group-nome-conta">
                                    <label htmlFor="inputNome" className="labelCadastro">Nome</label>
                                    <input type="text" value="Ana Vitória" className="form-control" id="inputNome" placeholder="Digite seu nome" required/>
                                </div>

                                <div className="form-group-email-conta">
                                    <label htmlFor="inputEmail" className="labelCadastro">E-mail</label>
                                    <input type="email" value="anavitoria@gmail.com" className="form-control" id="inputEmailConta" placeholder="Digite seu e-mail"/>
                                </div>
                            </div>

                            <div className="boxSenhaNumeroConta">
                                <div className="form-group-senha-conta">
                                    <label htmlFor="inputSenha" className="labelCadastro">Senha</label>
                                    <input type="password" className="form-control" id="inputSenha" placeholder="Digite sua senha"/>
                                </div>

                                <div className="form-group-numero-conta">
                                    <label htmlFor="inputNumero" className="labelCadastro">Número</label>
                                    <input type="tel" className="form-control" id="numero" placeholder="Número"/>
                                </div>
                            </div>
                        </div>

                        <div className="btnSalvarBox">
                            <p className="btnSalvarDados">Salvar</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Conta;