import React from 'react';
import { useState } from 'react';
import EnterCode from './EnterCode/EnterCode';
import Login from './Login/Login';
import Registration from './Registration/Registration';

function Authorization() {

    const [typeOfLogin, setTypeOfLogin] = useState('Авторизация');

    return (
        <div style={{ height: 'fit-content', width: '465px' }}>
            {typeOfLogin === "Авторизация"

                ?

                <Login setTypeOfLogin={setTypeOfLogin} />

                :

                (typeOfLogin === "Регистрация") ? <Registration setTypeOfLogin={setTypeOfLogin} />


                    :

                    (typeOfLogin === "Аутентификация") ? <EnterCode setTypeOfLogin={setTypeOfLogin} />

                        :

                        <div>Что-то пошло не так</div>

            }
        </div>
    )
}

export default Authorization