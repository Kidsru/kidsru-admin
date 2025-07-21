import "./AnswerTextarea.css"

function AnswerTextarea({title,text}) {
  return (
    <div className="AnswerTextarea">
        <h4>Текст ответа</h4>
        <textarea name="AnswerTextarea" placeholder={title?title:"none"}></textarea>
    </div>
  )
}

export default AnswerTextarea