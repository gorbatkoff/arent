import React from 'react'

function PublicationDate({date}) {
  function getDate(date){
    let hour = date.getHours()
    let minutes= date.getMinutes()
    return <span>{hour}:{minutes}</span>
  }
  
    return (
    <div style={{color: "#78839E"}}>
        Опубликовано: Сегодня в {getDate(date)}
    </div>
  )
}

export default PublicationDate