let mySaves = [];
const input = document.getElementById('input');
const inputButton = document.getElementById('input-button');
const deleteButton = document.getElementById('delete-button');
const tabButton = document.getElementById('tab-button');
const list = document.getElementById('list');
const localSaves = JSON.parse(localStorage.getItem('saves'));