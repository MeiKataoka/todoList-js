import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  //追加を押すと初期化する
  document.getElementById("add-text").value = "";

  cretateIncompleteList(inputText);
  /**毎回ちゃんとJSが機能しているか、console.log()やalert()等で確認する */
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const cretateIncompleteList = (text) => {
  //divを生成 …JS上でhtmlのDOMを生成して差し込む...createElement()
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグを生成
  const li = document.createElement("li");
  //liタグの中のテキストinnerTextに入力内容inputTextを入れる
  li.innerText = text;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグdivを未完了リストから削除
    /** 削除でも同じ処理を行うので関数化するとすっきりまとまる！ */
    deleteFromIncompleteList(deleteButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化 ...addTargetは<div class="list-row"></div>だけになる
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //button(戻す)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      /** 押された戻すボタンの親タグdivを完了リストから削除 */
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //親タグdivの最初の要素liのテキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      /** 未完了リストにテキストを表示する関数 */
      cretateIncompleteList(text);
    });

    //divタグ子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグdivを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定する ...appendChild()
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
