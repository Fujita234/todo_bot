'use strict';
const todo = require('todo');
console.log(todo.list());
module.exports = (robot) => {
  // タスク追加
  robot.respond(/todo (.+)/i, (msg) => {
    const task = msg.match[1].trim();
    todo.todo(task);
    msg.send('追加しました: ' + task);
  });

  // タスク完了
  robot.respond(/done (.+)/i, (msg) => {
    const task = msg.match[1].trim();
    todo.done(task);
    msg.send('完了にしました: ' + task);
  });

  // タスク削除
  robot.respond(/del (.+)/i, (msg) => {
    const task = msg.match[1].trim();
    todo.del(task);
    msg.send('削除しました: ' + task);
  });

  // 未完了のタスク
  robot.respond(/list/i, (msg) => {
    msg.send(todo.list().join('\n'));
  });

  // 完了のタスク
  robot.respond(/donelist/i, (msg) => {
    msg.send(todo.doneList().join('\n'));
  });
};