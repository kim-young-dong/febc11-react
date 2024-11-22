function TodoAdd() {
  return (
    <>
      <h2>할일 추가</h2>
      <div className="todo">
        <form>
          <label htmlFor="title">제목 :</label>
          <input type="text" id="title" autoFocus />
          <br />
          <label htmlFor="content">내용 :</label>
          <textarea id="content" cols="23" rows="5"></textarea>
          <br />
          <a href="./tododetail.html">추가</a>
          <a href="./todolist.html">취소</a>
        </form>
      </div>
    </>
  );
}

export default TodoAdd;
