'use strict';

document.getElementById('form').onsubmit = function(event) {
  // console.log('クリックされました');
  event.preventDefault();
  const search = document.getElementById('form').word.value;
  document.getElementById('output').textContent = `「${search}」の検索中...`;
};