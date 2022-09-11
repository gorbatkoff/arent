import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Dialog from './Dialog/Dialog';


function Dialogs({marks}) {

  // let token = document.cookie;
  // let index = token.indexOf('token=');
  // token = token.substring(index).slice(6);

  let token = localStorage.getItem('token')

  const api = axios.create({
    baseURL: 'http://62.113.113.106/api'
  });



  // const dialogs = [
  //   {
  //     nameOfСompanion: "Александр",
  //     nameOfAdvert: "BMW X5 48i II",
  //     priceOfAdvert: 2500,
  //     timeOfLastMessage: new Date(),
  //     lastMessage: "Да, можно завтра в 16:30"
  //   }
  // ]

  const [dialogs, setDialogs] = useState([]);


  const getDialogs = async () => {
    try {

      const response = await api.get(`/chat/my_chats/`, {
        headers: {
          "Authorization": `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjY1OTU5NzMxfQ.8wPb078Fzvaozl49AF19qLtG1RyKWfH5OkWdhZip9ic`
        }
      });

      setDialogs(response.data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDialogs();
  }, [])

  return (
    <div>
      {dialogs.map((dialog) => <Dialog dialog={dialog} marks={marks}/>)}
    </div>
  )
}

export default Dialogs

