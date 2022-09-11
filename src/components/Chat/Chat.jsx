import { React, useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import styles from './Chat.module.css';

import Dialogs from './Dialogs/Dialogs';
import Messages from './Messages/Messages';

import Skeleton from '@mui/material/Skeleton';
import CloseIcon from '@mui/icons-material/Close';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';

import { Button, ButtonGroup, Input, TextareaAutosize } from '@mui/material';

import axios from 'axios';

function Chat({ token, setState, state, marks }) {

    const api = axios.create({
        baseURL: 'http://62.113.113.106/api'
    });

    const [messages, setMessages] = useState({});

    const [messageText, setMessageText] = useState("");

    const getMessages = async () => {
        try {

            const response = await api.get(`/chat/view/1/`, {
                headers: {
                    "Authorization": `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjY1OTU5NzMxfQ.8wPb078Fzvaozl49AF19qLtG1RyKWfH5OkWdhZip9ic`
                }
            });
            setMessages(response.data);

        } catch (error) {
            alert("Что-то пошло не так!");
        }
    }

    useEffect(() => {
        getMessages();
    }, []);

    function handleChange(e){
        setMessageText(e.target.value);
        console.log(e.target.value)
    }

    return (

        <div className={styles['chat-wrapper']}>
            <div className={styles.dialogs}>

                <div className={styles['dialogs-header']}>
                    <IconButton>
                        <CloseIcon />
                    </IconButton>

                    <h3>Сообщения</h3>
                </div>

                <div className={styles['dialogs-list']}>
                    <Dialogs token={token} marks={marks} />
                </div>
            </div>

            <div className={styles.chat}>
                <h3>Чат</h3>



                {messages.length > 0 ? <Messages messages={messages} />
                    :
                    <Skeleton width="500px" />
                }

                <div className={styles['text-input']}>
                    <div className={styles['message-container']}>
                        <div className={styles['input-area']}>
                            <TextareaAutosize style={{
                                background: "#E8EDF5",
                                borderRadius: "7px",
                                border: "none",
                                outline: "none",
                                padding: "15px 20px",
                                fontSize: "16px",
                                color: "#595b61",
                                width: "450px",
                            }}
                            onChange={(e) => handleChange(e)}
                            placeholder="Напишите сообщение"
                            />
                        </div>

                        <div className={styles['send-message']}>
                            <IconButton>
                                <SendIcon color="#000"sx={{background: "#3069F7", color: "#fff", borderRadius: "50%", padding: "5px", fontSize: "40px"}}/>
                            </IconButton>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Chat